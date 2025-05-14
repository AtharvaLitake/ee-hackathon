<template>
    <v-app-bar app fixed dense height="70" class="navbar" elevation="0" flat>
        <div class="logo-container">
            <span class="logo-text text-primary">VizMetaPeek</span>
        </div>
        <div>
            <v-btn text class="text-primary nav-link" to="/">HOME</v-btn>
            <v-btn text class="text-primary nav-link" to="/data">BROWSE DATA</v-btn>
            <v-btn text class="text-primary nav-link" to="/team">TEAM MEMBERS</v-btn>
        </div>
    </v-app-bar>
</template>

<style scoped>
body,
.v-application {
    margin: 0;
    padding: 0;
}

.logo-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 50px;
}

/* Bold text for website name */
.logo-text {
    font-size: 26px;
    font-weight: bold;
    margin-right: 20px;
}

.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    box-shadow: none;
}

.nav-link {
    font-size: 14px;
    text-transform: none;
    margin: 0 16px;
    transition: all 0.3s ease-in-out;
    margin-left: 100px;
}
</style>