<template>
  <v-app>

    <v-main>
       <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/signup">SignUp</router-link> |
        <router-link to="/signin" >SignIn</router-link> |
        <router-link to="/dashboard">Dashboard</router-link>
      </nav>
      <router-view/>
    </v-main> 
  </v-app>
</template>
