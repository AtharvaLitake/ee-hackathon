<template>
    <nav-bar></nav-bar>
    <v-container class="mt-15" v-if="!loading">
        <div class="d-flex justify-space-between align-center mb-5">
            <h1 class="custom_font text-h4">
                Browse Data
            </h1>
            <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="search" label="Search" append-inner-icon="mdi-magnify" single-line hide-details variant="outlined"
                    class="custom_font"></v-text-field>
            </v-col>
        </div>
        <v-row class="mb-10">
            <v-col v-for="data in filteredDataSets" :key="data.TableName" cols="12" sm="6" md="4" xl="3"
            class="d-flex justify-center">
            <v-card class="pa-6 d-flex flex-column align-center" outlined style="width: 100%; height: 100%;">
                <v-img src="../../Images/folder.jpg" transition width="120" height="120" class="mb-3" />
                <p class="text-subtitle-1 font-weight-bold custom_font text-center mb-2">
                {{ data.Name }}
                </p>
                <p class="custom_font text-subtitle-2 text-center mb-3">
                    {{ data.TableName }}
                </p>
                <v-btn 
                    class="mb-2" 
                    variant="outlined" 
                    size="large" 
                    color="primary" 
                    :to="`/data/${data.Name}`">
                    Visualize
                </v-btn>
            </v-card>
            </v-col>
        </v-row>
    </v-container>
    <app-footer></app-footer>
</template>

<script>
import NavBar from '../Navbar/NavBar.vue';
export default {
    components: {
        'nav-bar': NavBar
    },
    data() {
        return {
            search: '',
            DataSets: [
                {
                    Name: "Seven_Day_Load_Forecast_by_Weather_Zone",
                    TableName: "Seven_Day_Load_Forecast_by_Weather_Zone",
                },
                {
                    Name: "Long_Term_Daily_Load_Forecast_Updated",
                    TableName: "Daily_Mins_Data",
                },
                {
                    Name: "ERCOT-Long_Term_Daily_Load_Forecast_Updated",
                    TableName: "Daily_Peak_Data",
                },
            ],
        };
    },
    computed: {
        filteredDataSets() {
            return this.DataSets.filter(data =>
                data.Name.toLowerCase().includes(this.search.toLowerCase())
            );
        }
    }
};
</script>

<style scoped>
.custom_font{
    color: rgb(82, 82, 82);
}
.fixed-width {
    width: 150px;
    text-align: center;
}
</style>