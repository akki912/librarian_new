<template>
    <div>
        <h1>Book Rendering</h1>
        
        <v-row>
            <v-col cols="10" offset="1" offset-sm="2" md="6" offset-md="3">
                <v-form>
                    <v-text-field label="Code" v-model="book._id" ></v-text-field>
                    <v-text-field label="Title" v-model="book.title"></v-text-field>
                    <v-text-field label="Description" v-model="book.description"></v-text-field>
                </v-form>
                </v-col>
               
                <div class="text-right">
                    <v-btn>Save</v-btn>
                    <v-btn>Cancel</v-btn>
                </div>
            
        </v-row>
    </div>    
</template>


<script>
import bookList from '/src/data/books.json'
export default {
    
    data(){    
        return {
            id: 0,
            book: this.defaultObject()  // --- default when 'Add' button is clicked --- //
         }
    },
    mounted() {
        console.log("In Mounted");
        this.init()
        //  --- Lifecycle hook, calls INIT method everytime page is rendered --- //
    },
    methods:{
        init() {
            this.id = this.$route.params.id  //getting ID from Path
            if(this.id != 0){
                this.book = bookList.find(rec => rec._id==this.id)
                console.log(this.book);
                //fetch from books.json
            }
        }
    },

    defaultObject() {
        return {
            code:"",
            title:"",
            description:"",
            // --- Has to be initialized when object is to be added, empty object required -- //
        }

    }
}

</script>

<style lang = "scss" scoped>
</style>