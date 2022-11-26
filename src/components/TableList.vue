<template>
    <v-data-table 
        :headers="headers"
        :items="books"
        :items-per-page=8
        class="elevation-1"
    >
    <template v-slot:top>
      <EditItem  v-bind:books="books" v-bind:editedItem="editedItem" v-bind:editedIndex="editedIndex" v-bind:defaultItem="defaultItem"  v-bind:dialog="dialog" v-on:editItem="editTableItem($event)" v-bind:item="item" ref="edit"/>
      <DeleteItem  v-bind:books="books" v-bind:editedIndex="editedIndex" v-bind:defaultItem="defaultItem" v-bind:dialogDelete="dialogDelete" v-bind:item="item" ref="delete"/>
      <!-- <DeleteItem  v-bind:books="books" v-bind:editedIndex="editedIndex" v-bind:defaultItem="defaultItem" v-bind:dialogDelete="dialogDelete" v-bind:item="item" ref="delete" v-on:updateFieldChild="updateFields($event)"/> -->
        <!-- <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      label="Book name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.author"
                      label="Author"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.pages"
                      label="No. of Pages"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.date"
                      label="date"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog> -->
        <!-- <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog> -->
     
    </template>
    <template v-slot:[`item.edit`]="{ item }">  
        <v-icon
            small
            class="mr-2"
            @click="editItem(item)"
        >
            mdi-pencil
            
        </v-icon> 
    </template>
    <template v-slot:[`item.delete`]="{ item }">
        <v-icon
            small
            @click="deleteItem(item)"
        >
            mdi-delete
        </v-icon>
        
    </template>
    </v-data-table>
    
</template>
<script>
import DeleteItem from './DeleteItem.vue';
import EditItem from './EditItem.vue';
export default {
  components: { EditItem, DeleteItem },
    name:'TableList',
    props:['headers','books','dialog'],
    data(){
        return{
          item:{},
          //  dialog: false,
           dialogDelete: false,
           editedIndex: -1,
            editedItem: {
                name: '',
                author:'',
                pages:0,
                date:null
            },
            defaultItem: {
                name: '',
                author:'',
                pages:0,
                date:null
            },
        }
       
    },
    //dialog,editedindex,editedItem ki value update kro from child
    // watch: {
    //   dialog (val) {
    //     val || this.close()
    //   },
    //   dialogDelete (val) {
    //     val || this.closeDelete()
    //   },
    // },
    // computed: {
    //   formTitle () {
    //     return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    //   },
    // },
    methods:{
        editItem(item){
          this.$refs.edit.editItem(item);
        },
        deleteItem(item){
          this.$refs.delete.deleteItem(item);
        },
        // updateFields(dialogDeleteInternal,editedIndexInternal,editedItemInternal,bookList){
        //   this.books=bookList;
        //   this.dialogDelete=dialogDeleteInternal;
        //   this.editedIndex=editedIndexInternal;
        //   this.editedItem=editedItemInternal;
        // }
       
       
        // editItem (item) {
        //     console.log(item)
        //     this.editedIndex = this.books.indexOf(item)
        //     this.editedItem = Object.assign({}, item)
        //     this.dialog = true
        // },

        // deleteItem (item) {
        //     this.editedIndex = this.books.indexOf(item)
        //     this.editedItem = Object.assign({}, item)
        //     this.dialogDelete = true
        // },
        // deleteItemConfirm () {
        //     console.log(this.editedIndex);
        //     this.books.splice(this.editedIndex, 1)
        //     this.closeDelete()
        // },

        // close () {
        //     this.dialog = false
        //     this.$nextTick(() => {
        //         this.editedItem = Object.assign({}, this.defaultItem)
        //         this.editedIndex = -1
        //     })
        // },

        // closeDelete () {
        //     this.dialogDelete = false
        //     this.$nextTick(() => {
        //         this.editedItem = Object.assign({}, this.defaultItem)
        //         this.editedIndex = -1
        //     })
        // },

        // save () {
        //     if (this.editedIndex > -1) {
        //         Object.assign(this.books[this.editedIndex], this.editedItem)
        //     } else {
        //         this.books.push(this.editedItem)
        //     }
        //     this.close()
        // },
    },
    
   
}
</script>
