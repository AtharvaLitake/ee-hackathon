<template>
    <nav-bar></nav-bar>
    <v-container>
        <v-row class="d-flex justify-space-between mt-15 mb-10">
            <v-col cols="5" class="bg-blue-lighten-5 text-center"
                style="border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                <p class=" text-subtitle-1">Dataset Name</p>
                <p class="text-h6"> Daily_Mins</p>
            </v-col>
            <v-col cols="3" class="bg-blue-lighten-5  text-center"
                style="border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                <p class=" text-subtitle-1">Number of Features</p>
                <p class="text-h6">9</p>
            </v-col>
            <v-col cols="3" class="bg-blue-lighten-5  text-center"
                style="border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                <p class=" text-subtitle-1">Total Records</p>
                <p class="text-h6">15,000</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
                <div class="meta-tables">
                    <div @click="enlargedTable = true">
                        <data-tables-info />
                    </div>
                </div>
                <div v-if="enlargedTable" class="table-modal" @click.self="enlargedTable = false">
                    <div class="table-modal-content">
                        <data-tables-info />
                        <button class="close-button" @click="enlargedTable = false">Close</button>
                    </div>
                </div>
            </v-col>
            <v-col cols="6">
                <div class="dashboard-item mt-2" v-for="(image, index) in images.slice(0, 2)" :key="index">
                    <img :src="require(`@/Images/Data-1-visuals/${image}`)" :alt="`Image ${index + 1}`"
                        @click="enlargeImage(require(`@/Images/Data-1-visuals/${image}`))">
                </div>
                <div v-if="enlargedImage" class="image-modal" @click="enlargedImage = null">
                    <img :src="enlargedImage" alt="Enlarged Image">
                </div>
            </v-col>
        </v-row>
                <div class="dashboard summary-visuals">
            <div class="dashboard-item" v-for="(image, index) in images.slice(2, images.length)" :key="index">
                <img :src="require(`@/Images/Data-1-visuals/${image}`)" :alt="`Image ${index + 1}`"
                    @click="enlargeImage(require(`@/Images/Data-1-visuals/${image}`))">
            </div>
        </div>
        <div v-if="enlargedImage" class="image-modal" @click="enlargedImage = null">
            <img :src="enlargedImage" alt="Enlarged Image">
        </div>
    </v-container>
</template>

<script>
import NavBar from '../Navbar/NavBar.vue';
import DataTablesInfo from './DataTablesInfo.vue';
export default {
    name: "DatasetDetails",
    data() {
        return {
            routeData: this.$route.params,
            images: [
                "daily_mins_1.png",
                "daily_mins_2.png",
                "daily_mins_3.png",
                "daily_mins_4.png",
                "daily_mins_5.png",
                "daily_mins_6.png",
                "daily_mins_7.png",
                "daily_mins_8.png",
                "daily_mins_9.png",
                "daily_mins_10.png",
            ],
            enlargedImage: null,
            enlargedTable: false, // Added enlargedTable state
        };
    },
    methods: {
        enlargeImage(image) {
            this.enlargedImage = image;
        },
    },
    components: {
        "nav-bar": NavBar,
        "data-tables-info": DataTablesInfo,
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
    grid-template-columns: repeat(2, 1fr);
    /* Two images per row */
    gap: 20px;
    margin-top: 20px;
}

.dashboard-item img {
    max-width: 100%;
    height: 300px;
    /* Increase image size */
    border-radius: 4px;
    cursor: pointer;
    /* Indicate clickable image */
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

.table-modal {
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

.table-modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 90%;
    max-height: 90%;
    overflow-y: auto;
}

.close-button {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #f44336;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.close-button:hover {
    background-color: #d32f2f;
}

.dashboard-item {
    text-align: center;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

</style>
