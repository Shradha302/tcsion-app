<template>
  <v-app>
    <v-main class="indigo lighten-1 white--text " height="200">
        <router-link to="/" class="white--text text-decoration-none">Home</router-link> |
        <router-link to="/signup" class="white--text text-decoration-none ">SignUp</router-link> |
        <router-link to="/signin" class="white--text text-decoration-none ">SignIn</router-link> |
        <router-link to="/dashboard" class="white--text text-decoration-none">Dashboard</router-link> |
        <router-link to="/users" class="white--text text-decoration-none">Users</router-link>
        <router-view />
    </v-main> 
  </v-app>
</template>
