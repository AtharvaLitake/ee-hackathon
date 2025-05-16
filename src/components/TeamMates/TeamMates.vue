<template>
    <nav-bar></nav-bar>
    <v-container class="mt-15">
        <v-row>
            <v-col cols="12" class="text-center">
                <h1 class="text-h4 custom_font ">Meet Our Team</h1>
            </v-col>
        </v-row>

        <v-row>
            <v-col v-for="member in team" :key="member.name" cols="12" sm="6" md="4">
                <v-card class="mx-auto" max-width="344" elevation="5">
                    <v-img :src="member.photo" height="300px" cover></v-img>

                    <v-card-title>{{ member.name }}</v-card-title>

                    <v-card-subtitle class="mb-3">{{ member.role }}</v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import atharva from '../../Images/Atharva Litake.jpg'
import abhishek from '../../Images/Abhishek.jpg'
import narendra from '../../Images/Narendra.jpg'
//import sakshi from '../../Images/Sakshi.jpg'
import NavBar from '../Navbar/NavBar.vue';
export default {
    components: {
        'nav-bar': NavBar
    },
    data() {
        return {
            team: [
                {
                    name: 'Atharva Litake',
                    role: 'Frontend Developer & Data Analyst',
                    photo: atharva,
                },
                {
                    name: 'Abhishek Saware',
                    role: 'Product Manager',
                    photo: abhishek,
                },
                {
                    name: 'Narendra Lungare',
                    role: 'Analyst & Manager',
                    photo: narendra,

                },
                // {
                //     name: 'Sakshi Wayal',
                //     role: 'UX & Mentor',
                //     photo: sakshi,
                // }
            ],
        }
    }
}


</script>

<style scoped>
h1 {
    margin-bottom: 32px;
}
.custom_font{
    color: rgb(82, 82, 82);
}
</style>
