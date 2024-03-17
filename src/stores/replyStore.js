/* Reply Store */

import { defineStore } from 'pinia'

export const useReplyStore = defineStore('reply', () => {
    const replyData = ref([
        {
            targetItem: 0
        }
    ])

    return { replyData }
})