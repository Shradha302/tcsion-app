<template>
    <v-toolbar>
        <v-toolbar-title>CRUD Operations</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-dialog max-width="600px" v-model="dialog">
           <template v-slot:activator="{on,attrs}">
            <v-btn color="blue lighten-2" v-bind="attrs" v-on="on">New Item</v-btn>
           </template>
           <v-card class="red lighten-3 dark">
                <v-card-title class="pa-3 ma-3"><h2>Add new book</h2></v-card-title>
                <v-text-field label="Book Name" v-model="newBook.name" class="pa-3 ma-3"> </v-text-field>
                <v-text-field label="Author Name" v-model="newBook.author" class="pa-3 ma-3"> </v-text-field>
                <v-text-field label="No. of Pages" v-model="newBook.pages" class="pa-3 ma-3"> </v-text-field>
                <!-- datepicker -->
                <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                >
                    <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="newBook.date"
                        label="Publishing date"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                    ></v-text-field>
                    </template>
                    <v-date-picker
                    v-model="newBook.date"
                    min="1950-01-01"
                    max="2022-11-30"
                    @change="save"
                    ></v-date-picker>
                </v-menu>
                <v-card-actions>
                    <v-btn color="blue"  v-on:click="addItem">SAVE</v-btn>
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
                date:null,
           },
           
          dialog:false,
          menu: false,  
        }
    },
    watch: {
      menu (val) {
        val 
      },
    },
    methods:{
      addItem(){
        if(!this.newBook.name || !this.newBook.author || this.newBook === 0 || !this.newBook.date){
            alert('Null entry cannot be added!')    
        } else{
          this.$emit('addItem',this.newBook);//validation block
        }  
      },
      save (date) {
        this.$refs.menu.save(date) 
      },
    } 
}
</script>
