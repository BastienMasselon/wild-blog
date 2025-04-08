export interface Article {
    id: number,
    authors: any[],
    title: string,
    updatedAt: string,
    content: string,
    imageUrls: string[],
    categoryName: string,
    createdAt?: string,
    isPublished?: boolean,
    comment?: string,
    likeCount?: number,
    isLiked?: boolean,
}
