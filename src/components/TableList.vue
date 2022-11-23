<template>
    <v-data-table 
    :headers="headers"
    :items="books"
    :items-per-page=5
    class="elevation-1">

    </v-data-table>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'

// export default defineComponent({
//     setup() {
        

//     },
// })
export default {
    name:'TableList',
    props:['headers','books'],
    data(){
        return{
           
        }
       
    },
   
}
</script>
