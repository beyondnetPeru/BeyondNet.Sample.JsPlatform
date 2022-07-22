/* eslint-disable @typescript-eslint/no-explicit-any */
import { IRepositoryVideo } from './interfaces';
import axios from 'axios';

import { Video } from '@/models/Video';

const API_HOST = process.env.VUE_APP_YOUTUBE_API_HOST;
const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY;

export class RepositoryYoutubeVideo implements IRepositoryVideo {
    async fetch(searchTerm: string): Promise<Video[]> {
        guard(searchTerm);

        const response = await axios.get(`${API_HOST}/youtube/v3/search`, {
            params: { key: API_KEY, type: 'video', part: 'snippet', q: searchTerm },
        });

        return mapFrom(response.data.items);
    }
}

const guard = (searchTerm: string) => {
    if (!searchTerm || searchTerm === '')
        throw new Error(`Parameter value cannot be null or empty. Searchterm: ${searchTerm}`);
};

const mapFrom = (data: any): Video[] => {
    const videoList: Video[] = [];

    data.map((item: any) => {
        const { videoId } = item.id;
        const { channelTitle, description } = item.snippet;
        const { url } = item.snippet.thumbnails.default;

        const video = new Video(videoId, channelTitle, description, url, item.etag);

        videoList.push(video);
    });

    console.log(videoList);

    return videoList;
};
