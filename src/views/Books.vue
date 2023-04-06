<template>
<div>

    <app-header title="Books" tooltip="Add Book" @add="$router.push('/books/0')" @search="searchInBooks($event)"></app-header>
        
        <!-- Booklist Render -->
        
        <v-list-item v-for="(item, i) in books" :key="i">
            <v-list-item-avatar>
                <v-img :alt="`${item.img} avatar`" :src="item.img"></v-img>  <!-- alt="`${item.img} avatar` => Used to create Avatar Images -->
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ item.author.name }} </v-list-item-subtitle>
                <v-list-item-subtitle>Pages : {{ item.pages }} </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-icon>
                <v-list-item-icon>
                    <div>
                        <v-menu offset-y>
                            <template v-slot:activator="{on, attrs}">
                                <v-btn color="white" plain v-bind="attrs" v-on-="on">
                                    <v-icon color="black">mdi-dots-vertical</v-icon>
                                </v-btn>
                            </template>

                            <v-list>
                                

                            <!-- Book Edit -->
                            <!-- Edit clicked => Navigate to bookEdit page with given param id -->

                            <v-list-item>
                                <v-list-item-title @click="$router.push('/books/' + item._id)">Edit</v-list-item-title>
                            </v-list-item>

                            <v-list-item>
                                <v-list-item-title>Return</v-list-item-title>
                            </v-list-item>  

                            <v-list-item>
                                <v-list-item-title>Delete</v-list-item-title>
                            </v-list-item>  

                            <v-list-item>
                                <v-list-item-title>Issue</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                    <br />
                    Status
                </div>
            </v-list-item-icon>
        </v-list-item-icon>
        </v-list-item>
 </div>
</template>

<script>
    import booksList from '@/data/books.json'
    import AppHeader from "@/views/AppHeader.vue"
    export default {
        data() {
            return{
                books: booksList // --- variable books is initialized to bookList which is imported from json file named books.json --- //
            };
        },

        methods: {
            searchInBooks(searchtext) {
                if(searchtext) {
                    this.books = booksList.filter(rec => rec.title.toLowerCase().includes(searchtext.toLowerCase))

                }

                // --- we append 'books' using the search logic to render only matching titles --- //
                /* --- we use filter method, its param is the records (rec) in json file that are converted to lowerCase
                   ---  Then includes method is used whose param is searchtext in lowerCase --- */
            }
        }
        
    };
</script>

<style lang="scss" scoped>

</style>