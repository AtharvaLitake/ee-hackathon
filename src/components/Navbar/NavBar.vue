<template>
  <v-app-bar app fixed dense height="70" class="navbar" elevation="0" flat>
    <div class="logo-container" @click="$router.push('/')">
      <span class="logo-text text-primary" style="cursor: pointer;">VizMetaPeek</span>
    </div>
    <v-spacer></v-spacer>
    <div>
      <v-btn text class="custom_font nav-link" :class="{ 'text-primary': $route.path === '/' }" to="/">HOME</v-btn>

      <v-btn text class="custom_font nav-link" :class="{ 'text-primary': $route.path.startsWith('/data') }"
        to="/data">BROWSE DATA</v-btn>

      <v-btn text class="custom_font nav-link" :class="{ 'text-primary': $route.path.startsWith('/team') }"
        to="/team">TEAM MEMBERS</v-btn>
    </div>
    <v-avatar size="36" class="ml-6 mr-6" color="pink-darken-3" style="color: white;">
      <span style="font-weight: medium;">VK</span>
    </v-avatar>
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

.custom_font {
  color: rgb(82, 82, 82);
}
</style>