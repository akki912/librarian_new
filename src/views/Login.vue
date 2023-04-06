<template>
    <div class="center">
        <v-row>
         <v-col cols="10" offset="1" sm="6" offset-sm="3" md="4" offset-md="4" > 
            <v-avatar color="primary" size="100" tile>
                <v-img src="@/assets/Librarian_Woman.jpg"> </v-img>
            </v-avatar>
            <v-text-field label="Username" v-model="username"></v-text-field>
            <v-text-field label="Password" type="password" v-model="password"></v-text-field>
            <v-btn block class = "base-inverted" @click="authenticate()">Log In</v-btn>
            </v-col>
    </v-row>

    </div>
</template>

<script>
export default {
    data() {
        return{
            username:"",
            password:""
        }
    },

    mdethods: {
        authenticate() {
            console.log(this.username);
            alert(`username is ${this.username} password is ${this.password}`);
        },
    }

};
</script>

<style lang="scss" scoped>

</style>