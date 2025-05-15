<template>
        <v-row class="d-flex justify-space-between mb-15 mt-10">
            <v-col cols="12" sm="6" class="d-flex flex-column" align-self="center">
                <v-sheet>
                    <p class="custom_color">EE - Content Hackathon</p>
                    <h1 class="text-primary font-weight-bold">VizMetaPeek</h1>
                    <p class="custom_font">This website provides visualistic preview of Market Data</p>
                    <v-btn class="mt-4 bg-primary" size="x-large" to="/data">Browse Data</v-btn>
                </v-sheet>
            </v-col>
            <v-col cols="12" sm="5">
                <v-img src="../../Images/Visualization_page.svg" width="80%"></v-img>
            </v-col>
        </v-row>
</template>

<script>
export default {
}
</script>

  
<style scoped>
.custom_font{
    color: rgb(82, 82, 82);
}
</style>