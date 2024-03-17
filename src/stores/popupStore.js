/* Pop-Up Store */

import { defineStore } from 'pinia'

export const usePopupStore = defineStore('popups', () => {
    const popUps = ref([
        {
            popIndex: 0,
            dateCreated: null,
            dateExpire: null,
            popTitle: 'Temp Title',
            popImageURL: '',
            popLinkURL: '',
        }
    ])

    return { popUps }
})