<template>
    <v-list-item :key="video.id" @click="onVideoSelect">
        <v-list-item-avatar>
            <v-img :src="thumbnailUrl"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
            <v-list-item-title v-html="video.title"></v-list-item-title>
            <v-list-item-subtitle v-html="video.description"></v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>
</template>

<script lang="ts">
import { Video } from '@/models/Video';
import Vue from 'vue';

export default Vue.extend({
    name: 'VideoListItem',
    props: { video: Object as () => Video },

    computed: {
        thumbnailUrl(): string {
            return this.video.url;
        },
    },
    methods: {
        onVideoSelect() {
            this.$emit('videoSelect', this.video);
        },
    },
});
</script>

<style scoped></style>
