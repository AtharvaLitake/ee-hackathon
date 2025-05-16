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
                {column: "Daily_Min", non_null_count: 3651, dtype: "object"},
                {column: "min_Year", non_null_count: 3651, dtype: "int64"},
                {column: "min_Month", non_null_count: 3651, dtype: "int64"},
                {column: "min_Day", non_null_count: 3651, dtype: "int64"},
                {column: "min_Hour", non_null_count: 3651, dtype: "int64"},
                {column: "min_HOUSTON_Forecast_Zone", non_null_count: 3651, dtype: "float64"},
                {column: "min_NORTH_Forecast_Zone", non_null_count: 3651, dtype: "float64"},
                {column: "min_SOUTH_Forecast_Zone", non_null_count: 3651, dtype: "float64"},
                {column: "min_WEST_Forecast_Zone", non_null_count: 3651, dtype: "float64"},
                {column: "min_ERCOT", non_null_count: 3651, dtype: "float64"},
                {column: "obs", non_null_count: 2901, dtype: "float64"},
                {column: "Adjustment", non_null_count: 3135, dtype: "float64"},
                {column: "min_Coast", non_null_count: 3651, dtype: "float64"},
                {column: "min_East", non_null_count: 3651, dtype: "float64"},
                {column: "min_Far_West", non_null_count: 3651, dtype: "float64"},
                {column: "min_North_Central", non_null_count: 3651, dtype: "float64"},
                {column: "min_North", non_null_count: 3651, dtype: "float64"},
                {column: "min_South_Central", non_null_count: 3651, dtype: "float64"},
                {column: "min_South", non_null_count: 3651, dtype: "float64"},
                {column: "min_West", non_null_count: 3651, dtype: "int64"},
                {column: "ee_HourEnding", non_null_count: 3651, dtype: "int64"},
                {column: "ee_timestamp", non_null_count: 3651, dtype: "object"},
                {column: "Publish Date", non_null_count: 3651, dtype: "object"},
                {column: "ChangesetId", non_null_count: 3651, dtype: "object"},
                {column: "ChangesetAction", non_null_count: 3651, dtype: "object"},
                {column: "ChangesetDate", non_null_count: 3651, dtype: "object"}
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