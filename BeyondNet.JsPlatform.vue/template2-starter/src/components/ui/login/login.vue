<template>
    <v-container>
        <v-btn @click="login">SignIn</v-btn>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'Login',
    data: () => ({
        isSignedIn: null,
    }),
});
</script>
