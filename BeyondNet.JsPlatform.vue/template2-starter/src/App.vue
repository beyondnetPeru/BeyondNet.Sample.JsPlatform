<template>
    <v-app>
        <TheTopBar />
        <v-main>
            <v-container fluid>
                <router-view />
            </v-container>
        </v-main>
        <TheFooter />
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import TheTopBar from './components/layout/TheTopBar.vue';
import TheFooter from './components/layout/TheFooter.vue';

export default Vue.extend({
    components: { TheTopBar, TheFooter },
    name: 'App',
});
</script>
