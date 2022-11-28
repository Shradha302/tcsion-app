<template>
        <v-dialog v-model="dialog" max-width="500px">
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
            </v-dialog>
</template>
<script>
export default {
  name:'EditItem',
  props:['editedIndex','defaultItem','item','dialog','editedItem','books'],
  data() {
    return {
    };
  },
  methods: {
    editItem (item) {
            //console.log(item)
            //console.log(typeof books)
            this.editedIndex = this.books.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
    },
    save () {
            if (this.editedIndex > -1) {
                //console.log(this.editedIndex)
                Object.assign(this.books[this.editedIndex], this.editedItem)
            } else {
                this.books.push(this.editedItem)
            }
            this.close()
    },
    close () {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
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
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
      
    },
};
</script>
