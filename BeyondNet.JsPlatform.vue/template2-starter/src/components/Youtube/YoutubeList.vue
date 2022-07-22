<template>
    <v-container>
        <v-card class="mx-auto" max-width="500" tile>
            <v-list three-line>
                <video-list-item v-for="video in videos" :video="video" :key="video.id" @videoSelect="onVideoSelect" />
            </v-list>
        </v-card>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

import VideoListItem from './YoutubeListItem.vue';
import { Video } from '@/models/Video';

export default Vue.extend({
    components: { VideoListItem },
    name: 'VideoList',
    props: ['videos'],
    methods: {
        onVideoSelect(video: Video) {
            this.$emit('videoSelect', video);
        },
    },
});
</script>
