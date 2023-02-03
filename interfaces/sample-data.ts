export interface SampleData {
    contentId: number;
    title: string;
    body: SampleDataBody;
    statistics: SampleDataStatistic;
    author: SampleDataAuthor;
    creationDate: string;
    modificationDate: string;
    images: Array<SampleDataImage>;
    community: SampleDataCommunity;
    comments: Array<SampleDataComment>;
}

export interface SampleDataBody {
    type: string;
    text: string;
}

export interface SampleDataStatistic {
    likes: number;
    views: number;
}

export interface SampleDataAuthor {
    name: string;
    avatar: string;
}

export interface SampleDataImage {
    id: number;
    contentType: string;
    name: string;
    url: string;
    size: number;
    width: number;
    height: number;
    type: string;
}

interface SampleDataCommunity {
    id: number;
    name: string;
}

export interface SampleDataComment {
    commentId: number;
    text: string;
    author: SampleDataAuthor;
    creationDate: string;
}
