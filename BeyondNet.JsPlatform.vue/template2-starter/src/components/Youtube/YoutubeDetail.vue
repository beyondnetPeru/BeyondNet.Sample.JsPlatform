<template>
    <div v-if="video">
        <div>
            <iframe :src="videoUrl" />
        </div>
        <div>
            <h4>{{ video.snippet.title }}</h4>
            <p>{{ video.snippet.description }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'VideoDetail',
    props: ['video'],
    computed: {
        videoUrl() {
            const { videoId } = this.video.id;

            return `https://www.youtube.com/embed/${videoId}`;
        },
    },
});
</script>

<style scoped></style>
