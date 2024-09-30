import { Article } from "../models/article";

export const articles: Article[] = [
    {
        id: 0,
        title: 'Ce titre est fabuleux',
        author:'Paul Eholé',
        content: 'Il y a des choses qui ne se font pas, telles que de boire du Dom Pérignon 55 à une température au-dessus de trois degrés et écouter les Beatles sans boules Quiès.',
        image: 'https://lh6.googleusercontent.com/proxy/cMNDH4zczPPe1sZD-scxKWIwYO6iMlKEWuDPt1JhqzKgD4rrU9zrrWYo1_KU4wzxzi3rHgQ7BRjMS3u2zwu_s2ixmNSK8QpeFmKXtCwd5cZIDyuidI4yE1ocOgNv0KOYN9lCr21aa2tXwRULdBKFDVeBIoSB4bhG5np8UmU',
        isPublished: true,
        comment: '',
        likes: 1999,
    },
    { 
        id: 1,
        title: 'Angular 16: Les nouveautés', 
        author: 'Alice', 
        content: 'Les nouveautés d\'Angular 16 incluent...', 
        image: 'https://via.placeholder.com/350x150',
        isPublished: true, 
        comment: '', 
        likes: 120 
    },
    { 
        id: 2,
        title: 'Développer une API REST', 
        author: 'Bob', 
        content: 'Développer une API REST nécessite...', 
        image: 'https://via.placeholder.com/350x150',
        isPublished: true, 
        comment: '', 
        likes: 75 
    },
    {   
        id: 3,
        title: 'Pourquoi TypeScript est essentiel ?', 
        author: 'Charlie', 
        content: 'TypeScript apporte de la robustesse...', 
        image: 'https://via.placeholder.com/350x150',
        isPublished: true, 
        comment: '', 
        likes: 200 
    }
];