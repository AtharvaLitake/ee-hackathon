<template>
    <nav-bar></nav-bar>
    <v-container class="mt-15" v-if="!loading">
        <h1 class="text-h4 mt-5 mb-5 text-primary">
            Browse the Data
        </h1>
        <v-row no-gutters v-for="data in DataSets" :key="data.id" justify="space-between" class="mb-2 border-b-sm">
            <v-col cols="2" class="d-flex align-center">
                <v-img src="../../Images/folder.jpg" transition width="120" height="120" />
            </v-col>
            <v-col cols="7" class="d-flex flex-column justify-center text-left">
                <p class="text-h6 font-weight-bold text-primary mb-2">
                    {{ data.Name }}
                </p>
                <p class="font-weight-medium">
                    {{ data.TableName }}
                </p>
            </v-col>
            <v-col cols="3" class="d-flex flex-column justify-center align-center">
                <!--<v-btn class="mb-2" variant="outlined" size="x-large" color="primary" :to="`jobdetails/${data.id}`">Applied</v-btn>-->
                <v-btn class="mb-2" variant="outlined" size="large" color="primary">
                    Visualize
                </v-btn>
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
            DataSets :[
                {
                    Name: "ERCOT - Seven_Day_Load_Forecast_by_Weather_Zone",
                    TableName: "Seven_Day_Load_Forecast_by_Weather_Zone",
                },
                {
                    Name: "ERCOT - DAM_CURRENT_OPERATING_PLAN_ALL_UPDATES",
                    TableName: "DAM_CURRENT_OPERATING_PLAN_ALL_UPDATES",
                },
                {
                    Name: "ERCOT - Long_Term_Daily_Load_Forecast_Updated",
                    TableName: "Daily_Mins_Data",
                },
                {
                    Name: "ERCOT - Long_Term_Daily_Load_Forecast_Updated",
                    TableName: "Daily_Peak_Data",
                },
            ],
        }
    }
}
</script>

<style scoped>
.custom_loader {
    height: 90vh;
}

.fixed-width {
    width: 150px;
    text-align: center;
}
</style>