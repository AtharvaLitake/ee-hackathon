<template>
    <v-container>
        <v-card>
            <v-data-table
                :headers="headers"
                :items="rows"
                class="elevation-1"
                dense
            />
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: "DataTablesInfo",
    data() {
        return {
            datasetName: "ERCOT - Seven_Day_Load_Forecast_by_Weather_Zone",
            tableName: "Seven_Day_Load_Forecast_by_Weather_Zone",
            headers: [
                { title: "Column Name", value: "column" },
                { title: "Non-Null Count", value: "nonNullCount" },
                { title: "Data Type", value: "dtype" },
            ],
            rows: [
                { column: "DeliveryDate", nonNullCount: 3389, dtype: "datetime64[ns]" },
                { column: "HourEnding", nonNullCount: 3389, dtype: "object" },
                { column: "Coast", nonNullCount: 3389, dtype: "float64" },
                { column: "East", nonNullCount: 3389, dtype: "float64" },
                { column: "FarWest", nonNullCount: 3389, dtype: "float64" },
                { column: "North", nonNullCount: 3389, dtype: "float64" },
                { column: "NorthCentral", nonNullCount: 3389, dtype: "float64" },
                { column: "SouthCentral", nonNullCount: 3389, dtype: "float64" },
                { column: "Southern", nonNullCount: 3389, dtype: "float64" },
                { column: "West", nonNullCount: 3389, dtype: "float64" },
                { column: "SystemTotal", nonNullCount: 3389, dtype: "float64" },
                { column: "DSTFlag", nonNullCount: 3389, dtype: "object" },
                { column: "ee_hourEnding", nonNullCount: 3389, dtype: "object" },
                { column: "ee_timestamp", nonNullCount: 3389, dtype: "object" },
                { column: "ChangesetId", nonNullCount: 3389, dtype: "object" },
                { column: "ChangesetAction", nonNullCount: 3389, dtype: "object" },
                { column: "ChangesetDate", nonNullCount: 3389, dtype: "object" },
            ],
        };
    },
};
</script>

<style scoped>
.v-data-table {
    margin-top: 20px;
}
</style>