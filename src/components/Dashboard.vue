
<template>
  <div>
  <Dialog v-on:addItem="updateTable($event)" />
  <TableList v-bind:headers="headers" v-bind:books="books" v-on:editItem="updateItem($event)" />
  </div>
</template>
<script>
import Dialog from '../components/Dialog.vue'
import TableList from '../components/TableList.vue'
export default {
  name:'Dashboard',
  data() {
    return {
      newBook:{},
       headers:[
                {
                    text:'Name',value:'name',align:'start',sortable:false
                },
                {
                    text:'Author',value:'author'
                },
                {
                    text:'No. of Pages',value:'pages'
                },
                {
                    text:'Publishing Date',value:'date'
                },
                {
                  text:'Actions',
                  value:'actions',
                  sortable:false
                }
            ],
            books:[
                
                {          
                name: "Anywhere You Run",
                author: "Wanda M. Morris",
                pages: 400,
                date: "October 25, 2022",
                 
                },
                {
                name: "The Missing",
                author: "Lisa Childs",
                pages: 352,
                date: " October 25, 2022",
                
                },
                {
                name: "The Hybrid Enemy (James Macrae Thriller Series #1)",
                author: "Richard D. Ross ",
                pages: 425,
                date: " Sep 04, 2021",
                
                },
                {
                name: "Dark Hollow Road (Possum Gap, #2)",
                author: "Karen Ann Hopkins",
                pages: 321,
                date: " Oct 18, 2022",
               
                },
                {
                name: "The Widow",
                author: "Kaira Rouda",
                pages: 310,
                date: "December 1, 2022",
                
                },
                {
                name: "The Inmate",
                author: "Freida McFadden",
                pages: 388,
                date: "June 13, 2022",
                
                },
                {
                name: "Hidden in Snow",
                author: "Viveca Sten",
                pages: 434,
                date: "October 14, 2020",
                
                },
                {
                name: "The Book Thief",
                author: "Markus Zusak",
                pages: 552,
                date: "March 1, 2006",
                
                },
                {
                name: "Harry Potter and the Sorcerers Stone",
                author: "J.K. Rowling",
                pages: 309,
                date: "June 26, 1997",
                
                },
                {
                name: "Pride and Prejudice",
                author: "Jane Austen",
                pages: 279,
                date: "January 28, 1813",
                
                },
                {
                name: "The Help",
                author: "Kathryn Stockett",
                pages: 464,
                date: "February 10, 2009",
                
                },
                {
                name: "To Kill a Mockingbird",
                author: "Harper Lee",
                pages: 336,
                date: "January 1, 1960",
                
                },
                {
                name: "Good Girl, Bad Blood",
                author: "Holly Jackson",
                pages: 417,
                date: "April 30, 2020",
                
                },
                
                        
            ],

    };
  },
  components:{
    Dialog,
    TableList
  },
  methods:{
    updateTable(newBook){
       this.books.push(newBook);
       console.log(newBook);
       alert('New Book Added!');
       console.log('New Book Added!')
       
    }
  }
};
</script>
