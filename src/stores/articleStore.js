/* Article Store */

import { defineStore } from 'pinia'

export const useArticleStore = defineStore('articles', () => {
    const boardCategory = ref([
        {
            boardID: 0,
            boardName: 'Notice',
            boardPrefix: 'notice',
            includeCategories: [
                {
                    categoryID: 0,
                    categoryName: 'Notice'
                },
                {
                    categoryID: 1,
                    categoryName: 'Schedule'
                },
                {
                    categoryID: 2,
                    categoryName: 'Events'
                },
                {
                    categoryID: 3,
                    categoryName: 'Contribution'
                }
            ],
        },
        {
            boardID: 3,
            boardName: 'Q&A',
            boardPrefix: 'qna',
            includeCategories: [
                {
                    categoryID: 0,
                    categoryName: 'Order'
                },
                {
                    categoryID: 1,
                    categoryName: 'Shipping'
                },
                {
                    categoryID: 2,
                    categoryName: 'Return / Exchange'
                },
                {
                    categoryID: 3,
                    categoryName: 'Product Quality'
                },
                {
                    categoryID: 4,
                    categoryName: 'Events'
                },
                {
                    categoryID: 5,
                    categoryName: 'Others'
                }
            ],
        },
        {
            boardID: 1,
            boardName: 'Latest News',
            boardPrefix: 'media',
            includeCategories: [
                {
                    categoryID: 0,
                    categoryName: 'Company'
                },
                {
                    categoryID: 1,
                    categoryName: 'Industry'
                },
                {
                    categoryID: 2,
                    categoryName: 'Global'
                },
                {
                    categoryID: 3,
                    categoryName: 'Local'
                }
            ],
        },
        {
            boardID: 2,
            boardName: 'Recruit',
            boardPrefix: 'recruit',
            includeCategories: [
                {
                    categoryID: 0,
                    categoryName: 'Ongoing'
                },
                {
                    categoryID: 1,
                    categoryName: 'Closed'
                }
            ],
        },
    ])

    const articleData = ref([
        {
            articleID: 0,
            articleBoard: 0,
            articleCategory: 0,
            articleTitle: '공지사항 게시판',
            articleContent: `
                <p>가나다라마바사</p>
            `,
            articleFiles: [],
            articleLinks: [],
            targetArticle: null,
            isCredited: null,
            isRestricted: false,
            isPassword: null,
            wroteUser: '1831jeue',
            wroteDate: 20210411,
            modifiedUser: null,
            modifiedDate: null,
        }
    ])

    return { boardCategory, articleData }
})