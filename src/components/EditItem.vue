<template>
        <v-dialog v-model="proxyDialog" max-width="500px">
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
                        v-model="proxyEditedItem.name"
                        label="Book name"
                        ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                        md="4"
                    >
                        <v-text-field
                        v-model="proxyEditedItem.author"
                        label="Author"
                        ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                        md="4"
                    >
                        <v-text-field
                        v-model="proxyEditedItem.pages"
                        label="No. of Pages"
                        ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                        md="4"
                    >
                        <v-text-field
                        v-model="proxyEditedItem.date"
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
            </v-dialog>
</template>
<script>
export default {
  name:'EditItem',
  props:['editedIndex','defaultItem','item','dialog','editedItem','books'],
  data() {
    return {
        proxyEditedItem:{
                name: '',
                author:'',
                pages:0,
                date:null
        },
        proxyEditedIndex:-1,
    };
  },
  created(){
    this.proxyEditedItem= this.editedItem;
    this.proxyEditedIndex = this.editedIndex;
    this.proxyDialog = this.dialog;
  },
  methods: {
    editTableItem(proxyEditedItem,proxyEditedIndex,proxyDialog){
        this.$emit('sendData',proxyEditedItem,proxyEditedIndex,proxyDialog);   
    },
    editItem (item) {
            //console.log(item)
            //console.log(typeof books)
            // this.editedIndex = this.books.indexOf(item)
            // this.editedItem = Object.assign({}, item)
            // this.dialog = true
            this.proxyEditedIndex = this.books.indexOf(item)
            this.proxyEditedItem = Object.assign({}, item)
            this.proxyDialog = true
    },
    save () {
            if (this.proxyEditedIndex > -1) {
                //console.log(this.editedIndex)
                Object.assign(this.books[this.proxyEditedIndex], this.proxyEditedItem)
            } else {
                this.books.push(this.proxyEditedItem)
            }
            this.close()
    },
    close () {
            this.proxyDialog = false
            this.$nextTick(() => {
                this.proxyEditedItem = Object.assign({}, this.defaultItem)
                this.proxyEditedIndex = -1
            })
    },
  },
  watch: {
      dialog (val) {
        val || this.close()
      },
    },
  computed: {
      formTitle () {
        return this.proxyEditedIndex === -1 ? 'New Item' : 'Edit Item'
      },  
    },
};
</script>
