type PostEditData = {
    id: string;
    current: {
        id: string;
        title: string;
        featured: boolean;
        published_at: Date;
    },
    previous: {
        id: string;
        title: string;
        featured: boolean;
        published_at: Date;
    }
};

export class PostEditedEvent {
    id: string;
    data: PostEditData;
    timestamp: Date;

    constructor(data: any, timestamp: Date) {
        this.id = data.id;
        this.data = data;
        this.timestamp = timestamp;
    }

    static create(data: any, timestamp = new Date()) {
        return new PostEditedEvent(data, timestamp);
    }
}
