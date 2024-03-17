/* Site Information Store */

import { defineStore } from 'pinia'

export const useSiteInfoStore = defineStore('site', () => {
    const siteConfigs = ref({
        domain: 'http://alienmadetools.com/',
        siteName: 'Alien Made Tools',
        companyCEO: 'Mike S.',
        companyAddress: '34-2, Cheomdan Venture So-ro 62beon-gil, Buk-gu, Gwangju, South Korea, 61007',
        companySince: '1980',
        companyMail: 'ysshim@koreadiamondtools.com',
        companyCallCS: '+821031104900',
        companyCallBiz: '+821031104900',
        companyFax: '+825155555555',
        companySNS: {
            youtube: 'https://www.youtube.com',
            twitter: 'https://www.twitter.com',
            instagram: 'https://www.instagram.com'
        },
        urlLogoColored: '/images/logo-colored.png',
        urlLogoGrayscale: '/images/logo-grayscale.png',
    })

    return { siteConfigs }
})