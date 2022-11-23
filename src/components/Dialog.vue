<template>
    <v-toolbar>
        <v-toolbar-title>CRUD Operations</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-dialog max-width="600px" v-model="dialog">
           <template v-slot:activator="{on,attrs}">
            <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">New Item</v-btn>
           </template>
           <v-card class="pa-3 ma-3">
                <v-card-title class="pa-3 ma-3"><h2>Add new book</h2></v-card-title>
                <v-text-field label="Book Name" v-model="newBook.name" class="pa-3 ma-3"> </v-text-field>
                <v-text-field label="Author Name" v-model="newBook.author" class="pa-3 ma-3"> </v-text-field>
                <v-text-field label="No. of Pages" v-model="newBook.pages" class="pa-3 ma-3"> </v-text-field>
                <v-text-field label="Publishing Date" v-model="newBook.date" @click="datepicker=false" class="pa-3 ma-3">
                    <!-- <template>
                        <v-row justify="center">
                            <v-date-picker
                            v-model="date"
                            :allowed-dates="allowedDates"
                            class="mt-4"
                            min="2016-06-15"
                            max="2018-03-20"
                            ></v-date-picker>
                        </v-row>
                    </template>    -->
                </v-text-field>
                <v-card-actions>
                    
                    
                    <!-- <v-btn color="primary" text @click="dialog=false" v-on:click="addItem">SAVE</v-btn> -->
                    <v-btn color="primary" text  v-on:click="addItem">SAVE</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-toolbar>
</template>
<script>

export default {
    name:'Dialog',
    data() {
        return{
           newBook:{
                name: '',
                author: '',
                pages:0,
                date:'',
           },
           date: '2022-11-22',
           dialog:false,
        //    datepicker:false,
        }
    },
    methods:{
        addItem(){
            this.$emit('addItem',this.newBook);
        },
        // allowedDates(val){
        //     parseInt(val.split('-')[2], 10) % 2 === 0
        // }
    }
  
}
</script>
