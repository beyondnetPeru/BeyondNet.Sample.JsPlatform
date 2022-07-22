<template>
    <v-container>
        <v-app-bar color="red accent-4" dense dark rounded absolute>
            <v-toolbar-title>VueJS Guidance 2.x</v-toolbar-title>

            <v-spacer />

            <v-btn to="/youtube">YouTube</v-btn>

            <Login />
        </v-app-bar>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';
import Login from '../ui/login/login.vue';

export default Vue.extend({
    name: 'TheTopBar',
    props: ['drawer'],
    computed: mapGetters(['isLoggedIn']),
    methods: mapActions(['login', 'logout']),
    components: { Login },
});
</script>

<style scoped></style>
