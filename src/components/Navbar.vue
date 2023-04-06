<template>
    <div>

    <v-app>
    <v-app-bar app color="white" light>
        <div class="d-flex align-center" @click="$router.push('/')">
            <v-img
                alt="Logo"
                class="shrink mr-2"
                contain
                src="@/assets/Librarian_Woman.jpg"
                transition="scale-transition"
                width="40"
            />
            {{ $const.APP_NAME }}
            <!-- $const is directed to AppConstants in main, APP_NAME variable using $const -->
        </div>

        <v-spacer></v-spacer>    

        <v-btn target="_blank" text>
            <span class="mr-2">Log In</span>
            <v-icon>mdi-account-circle</v-icon>
        </v-btn>    

    </v-app-bar>

    <v-main>
        <router-view/>
    </v-main>   
</v-app>

    </div>
</template>

<script>
    export default {

    }    
</script>

<style lang="scss" scoped>

</style>