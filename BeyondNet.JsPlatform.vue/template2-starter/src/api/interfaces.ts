import { Video } from '@/models/Video';

export interface IRepositoryVideo {
    fetch(searchTerm: string): Promise<Array<Video>>;
}
