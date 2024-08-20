export type FileDir = ("default" | "article" | "swiper")

export interface File {
    name: string;
    size: number;
    type: string;
    url: string;
    createTime: number;
}