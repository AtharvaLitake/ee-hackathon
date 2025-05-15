<template>
    <div>
        <h1>Dataset Details</h1>
        <div class="d-flex justify-center">
            <p>Dataset Name: </p>
            <pre>{{ routeData.datasetName }}</pre>
        </div>        
        <div class="d-flex">
            <img class="pl-6 pr-6 " src="https://themesbrand.com/lexa-node/images/demo/purple-hori-light.png" alt="Dashboard">
            <img src="https://themesbrand.com/lexa-node/images/demo/purple-hori-light.png" alt="Dashboard">
        </div>
        <div class="d-flex">
            <img class="pl-6 pr-6 " src="https://themesbrand.com/lexa-node/images/demo/purple-hori-light.png" alt="Dashboard">
            <img src="https://themesbrand.com/lexa-node/images/demo/purple-hori-light.png" alt="Dashboard">
        </div>
        
    
    </div>
</template>

<script>
export default {
    name: "DatasetDetails",
    data() {
        return {
            routeData: this.$route.params, // Accessing route data
        };
    },
};
</script>

<style scoped>
h1 {
    color: #333;
}

</style>