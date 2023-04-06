<template>
    <div>
        <div class="app-header">
<!-- ## SearchBar ## -->

        <v-row>
            <v-col>
                <v-text-field
                    placeholder="Search"
                    append-icon="mdi-magnify"
                    @input="$emit('search', $event)"
                ></v-text-field>
            </v-col>
        </v-row>

        <v-row>  <!-- Add Button -->
            <v-col cols="2" class="text-right">
                <v-btn @click="$emit('add')">   <!-- add is caught in the parent-->
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </v-col>
        </v-row>    
        </div>    
        
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.app-header{
    display:flex;
    padding: 1rem;
}

</style>
