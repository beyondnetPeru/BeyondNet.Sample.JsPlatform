export class Video {
    id: string;
    title: string;
    description: string;
    url: string;
    eTag: string;

    constructor(id: string, title: string, description: string, url: string, etag: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.url = url;
        this.eTag = etag;
    }
}
