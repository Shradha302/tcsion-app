<template>
    <v-card class="elevation-2">
        <v-card v-for="item in data" :key="item.id" class="center" text>
            <div>{{item.id}}</div>
            <div>{{item.name}}</div>
            <div>{{item.email}}</div>
            <div>{{item.address.city}}</div>
        </v-card>
    </v-card>
</template>
<script>
export default {
    name:'Users',
    data(){
        return{
            data:{},
        }
    },
    async created(){
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        this.data = data;
    }
}
</script>
