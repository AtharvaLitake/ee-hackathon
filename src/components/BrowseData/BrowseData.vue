<template>
    <nav-bar></nav-bar>
    <v-container class="mt-15" v-if="!loading">
        <div class="d-flex justify-space-between align-center mb-5">
            <h1 class="text-h4 text-primary">
                Browse the Data
            </h1>
            <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="search" label="Search" append-inner-icon="mdi-magnify" single-line hide-details
                    color="primary"></v-text-field>
            </v-col>
        </div>
        <v-row dense>
            <v-col v-for="data in filteredDataSets" :key="data.TableName" cols="12" sm="6" md="4" lg="3"
            class="d-flex justify-center">
            <v-card class="pa-6 d-flex flex-column align-center" outlined style="width: 100%; height: 100%;">
                <v-img src="../../Images/folder.jpg" transition width="120" height="120" class="mb-3" />
                <p class="text-h6 font-weight-bold text-primary text-center mb-2">
                {{ data.Name }}
                </p>
                <p class="font-weight-medium text-center mb-3">
                {{ data.TableName }}
                </p>
                <v-btn 
                    class="mb-2" 
                    variant="outlined" 
                    size="large" 
                    color="primary" 
                    :to="`/data/${data.TableName}`">
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
                {
                    Name: "ERCOT - Real_Time_Load_Forecast",
                    TableName: "Real_Time_Load_Forecast",
                },
                {
                    Name: "ERCOT - Monthly_Load_Statistics",
                    TableName: "Monthly_Load_Statistics",
                },
                {
                    Name: "ERCOT - Annual_Load_Statistics",
                    TableName: "Annual_Load_Statistics",
                },
                {
                    Name: "ERCOT - Hourly_Load_Data",
                    TableName: "Hourly_Load_Data",
                },
                {
                    Name: "ERCOT - Renewable_Energy_Production",
                    TableName: "Renewable_Energy_Production",
                },
                {
                    Name: "North America - Energy_Consumption_Trends",
                    TableName: "Energy_Consumption_Trends",
                },
                {
                    Name: "North America - Market_Price_Analysis",
                    TableName: "Market_Price_Analysis",
                },
                {
                    Name: "North America - Grid_Stability_Reports",
                    TableName: "Grid_Stability_Reports",
                },
                {
                    Name: "North America - Power_Outage_Statistics",
                    TableName: "Power_Outage_Statistics",
                },
                {
                    Name: "North America - Demand_Response_Programs",
                    TableName: "Demand_Response_Programs",
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
.custom_loader {
    height: 90vh;
}

.fixed-width {
    width: 150px;
    text-align: center;
}
</style>