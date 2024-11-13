export interface Article {
    id: number,
    title: string,
    createdAt: string,
    content: string,
    image: string,
    isPublished: boolean,
    comment?: string,
    categoryName: string,
    likeCount: number,
    isLiked: boolean,
}