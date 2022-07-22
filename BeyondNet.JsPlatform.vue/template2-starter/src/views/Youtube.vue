<template>
    <div>
        <div>
            <SearchBar @termChange="onTermChange" />
            <div>
                <!-- <YoutubeDetail :video="selectedVideo" /> -->
                <YoutubeList :videos="videos" @videoSelect="onVideoSelect"></YoutubeList>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { SearchBar } from '../components/ui';
import { RepositoryYoutubeVideo } from '../api';
import { Video } from '@/models/Video';
import { YoutubeDetail, YoutubeList } from '../components/youtube';

export default Vue.extend({
    components: { SearchBar, YoutubeList },
    name: 'VideoView',

    data: () => ({
        videos: [],
        selectedVideo: {},
    }),

    methods: {
        async onTermChange(searchTerm: string) {
            this.videos = await new RepositoryYoutubeVideo().fetch(searchTerm);
        },

        onVideoSelect(video: Video) {
            this.selectedVideo = video;
        },
    },
});
</script>
