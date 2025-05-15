<template>
    <nav-bar></nav-bar>
    <v-container>
                <v-row class="d-flex justify-space-between mt-15 mb-10">
            <v-col cols="5" class="bg-primary text-center" style="border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                <p class="text-white text-subtitle-1">Dataset Name</p>
                <p class="text-white text-h6">{{ routeData.datasetName }}</p>
            </v-col>
            <v-col cols="3" class="bg-primary text-center" style="border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                <p class="text-white text-subtitle-1">Number of Features</p>
                <p class="text-white text-h6">9</p>
            </v-col>
            <v-col cols="3" class="bg-primary text-center" style="border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                <p class="text-white text-subtitle-1">Total Records</p>
                <p class="text-white text-h6">15,000</p>
            </v-col>
        </v-row>
        <div class="dashboard">
            <div class="dashboard-item" v-for="(image, index) in images" :key="index">
                <img 
                    :src="require(`@/Images/Data-1-visuals/${image}`)" 
                    :alt="`Image ${index + 1}`" 
                    @click="enlargeImage(require(`@/Images/Data-1-visuals/${image}`))"
                >
            </div>
        </div>
        <div v-if="enlargedImage" class="image-modal" @click="enlargedImage = null">
            <img :src="enlargedImage" alt="Enlarged Image">
        </div>
    </v-container>
</template>

<script>
import NavBar from '../Navbar/NavBar.vue';
export default {
    name: "DatasetDetails",
    data() {
        return {
            routeData: this.$route.params,
            images: [
                "buy-time.png",
                "sell-time.png",
                "freq-dist-sell.png",
                "freq-dist-buy.png",
            ],
            enlargedImage: null,
        };
    },
    methods: {
        enlargeImage(image) {
            this.enlargedImage = image;
        },
    },
    components:{
        "nav-bar": NavBar,
    }
};
</script>

<style scoped>
h1 {
    color: #333;
    text-align: center;
}

.d-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}

.dashboard {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Two images per row */
    gap: 20px;
    margin-top: 20px;
}

.dashboard-item {
    text-align: center;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.dashboard-item img {
    max-width: 100%;
    height: 300px; /* Increase image size */
    border-radius: 4px;
    cursor: pointer; /* Indicate clickable image */
}

.dashboard-item p {
    margin-top: 10px;
    font-size: 14px;
    color: #555;
}

.image-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.image-modal img {
    max-width: 90%;
    max-height: 90%;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-color: #fff;
}
</style>
