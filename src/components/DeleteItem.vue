<template > 
        <v-dialog v-model="proxyDialogDelete" max-width="500px">
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
          proxyDialogDelete:false
        }
    },
    created(){
      this.proxyEditedItem= this.editedItem;
      this.proxyEditedIndex = this.editedIndex;
      this.proxyDialogDelete = this.dialogDelete;
    },
    methods:{
        deleteItem (item) {
            //console.log(item)
            //console.log(typeof books)
            //console.log(this.dialogDelete)
            //console.log(this.proxyDialogDelete)
            this.proxyEditedIndex = this.books.indexOf(item)
            this.proxyEditedItem = Object.assign({}, item)
            this.proxyDialogDelete = true
            //console.log(this.proxyDialogDelete)
        },
        deleteItemConfirm () {
            //console.log(this.editedIndex);
            this.books.splice(this.proxyEditedIndex, 1)
            this.closeDelete()
        },
        closeDelete () {
            this.proxyDialogDelete = false
            this.$nextTick(() => {
                this.proxyEditedItem = Object.assign({}, this.defaultItem)
                this.proxyEditedIndex = -1
            })
        },
    },
    watch: {
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },
}
</script>