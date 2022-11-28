<template >
         
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
</template>
<script>
export default {
    name:'DeleteItem',
    props:['dialogDelete','editedIndex','editedItem','defaultItem','item','books'],
    data(){
        return{
            
            // booksList:this.books,
            // editedIndexInternal:this.editedIndex,
            // editedItemInternal:this.editedItem,
            // dialogDeleteInternal:this.dialogDelete,
        }
    },
    methods:{
        deleteItem (item) {
            //console.log(item)
            //console.log(typeof books)
            this.editedIndex = this.books.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
           // this.updateFieldChild(dialogDeleteInternal,editedIndexInternal,editedItemInternal,bookList);
        },
        deleteItemConfirm () {
            //console.log(this.editedIndex);
            this.books.splice(this.editedIndex, 1)
            this.closeDelete()
           // this.updateFieldChild(dialogDeleteInternal,editedIndexInternal,editedItemInternal,bookList);

        },
        closeDelete () {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
            //this.updateFieldChild(dialogDeleteInternal,editedIndexInternal,editedItemInternal,bookList);    
        },
        // updateFieldChild(dialogDeleteInternal,editedIndexInternal,editedItemInternal,bookList){
        //     console.log(dialogDeleteInternal)
        //     console.log(editedIndexInternal)
        //     console.log(editedItemInternal)
        //     console.log(bookList)
        // }
    },
    watch: {
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },
}
</script>