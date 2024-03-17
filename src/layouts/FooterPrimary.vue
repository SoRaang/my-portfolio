<template>
    <footer id="footPrimary">
        <div class="reactive-inner">
            <div id="footReactiveGrid" class="minimum-container">
                <div id="footInternalLinks">
                    <dl class="footer-internal-links">
                        <dt>Informations</dt>

                        <dd>About Us</dd>
                        <dd>Products</dd>
                        <dd>Recruit</dd>
                        <dd>Latest News</dd>
                        <dd>Media</dd>
                    </dl>

                    <dl class="footer-internal-links">
                        <dt>FAQ</dt>

                        <dd>Account</dd>
                        <dd>Order</dd>
                        <dd>Shipping</dd>
                        <dd>Return / Exchange</dd>
                        <dd>Product Quality</dd>
                    </dl>
                </div> <!-- #footInternalLinks -->

                <dl id="footPartners">
                    <dt>Our Partners</dt>

                    <dd class="footer-partners-grid">
                        <div class="footer-partner-banner">
                            <a href="">
                                배너즈
                            </a>
                        </div>
                        <div class="footer-partner-banner">
                            <a href="">
                                배너즈
                            </a>
                        </div>
                        <div class="footer-partner-banner">
                            <a href="">
                                배너즈
                            </a>
                        </div>
                        <div class="footer-partner-banner">
                            <a href="">
                                배너즈
                            </a>
                        </div>
                        <div class="footer-partner-banner">
                            <a href="">
                                배너즈
                            </a>
                        </div>
                        <div class="footer-partner-banner">
                            <a href="">
                                배너즈
                            </a>
                        </div>
                        <div class="footer-partner-banner">
                            <a href="">
                                ...And You!
                            </a>
                        </div>
                    </dd>
                </dl> <!-- #footPartners -->

                <div class="footer-empty-separator"></div>

                <div id="footGeoCopy">
                    <div class="footer-geo-location">
                        <i class="ri-map-pin-2-fill"></i>
                        <span>Worldwide</span>
                    </div>

                    <p class="footer-copyright">© {{ copyYear }} {{ siteInfo.siteName }} All Rights Reserved.</p>
                </div> <!-- #footGeoCopy -->

                <div id="footTerms">
                    <button type="button">
                        <span>Order Policies</span>
                    </button>

                    <button type="button">
                        <span>Privacy Policy</span>
                    </button>

                    <button type="button">
                        <span>Terms Of Use</span>
                    </button>

                    <button type="button">
                        <span>Sales & Distributors</span>
                    </button>
                </div> <!-- #footTerms -->

                <hr class="hf">

                <address id="footContactInfo">
                    <div class="footer-company-info">
                        <p>{{ siteInfo.companyCEO }}, CEO of {{ siteInfo.siteName }}.</p>
                        <p>{{ siteInfo.companyAddress }}</p>
                    </div>

                    <div class="footer-customer-contacts">
                        <dl>
                            <dt>Customer Service</dt>
                            <dd><a class="inline-link" :href="'tel:' + siteInfo.companyCallCS">{{ siteInfo.companyCallCS }}</a></dd>
                        </dl>

                        <dl>
                            <dt>Fax</dt>
                            <dd><a class="inline-link" :href="'fax:' + siteInfo.companyFax">{{ siteInfo.companyFax }}</a></dd>
                        </dl>

                        <dl>
                            <dt>E-Mail</dt>
                            <dd><a class="inline-link" :href="'mailto:' + siteInfo.companyMail">{{ siteInfo.companyMail }}</a></dd>
                        </dl>
                    </div>
                </address> <!-- #footContactInfo -->

                <div id="footDisclaimer">
                    <p class="mb-2">This website is optimized for modern web browsers like Google Chrome, Microsoft Edge, Mozilla Firefox. We highly recommend using modern web browsers for an enhanced and secure browsing experience, with improved compatibility, speed, and advanced features.</p>
                    <i class="ri-settings-3-fill"></i>
                </div> <!-- #footDisclaimer -->
            </div> <!-- #footReactiveGrid -->
        </div>
    </footer> <!-- #footPrimary -->
</template> <!-- Template Ends -->

<script setup>
    import { useSiteInfoStore } from '@/stores/siteInfoStore'

    const siteStore = useSiteInfoStore()
    const siteInfo = siteStore.siteConfigs
    const copyYear = ref(new Date().getFullYear())
</script> <!-- Logic Ends -->

<style lang="scss" scoped>
    // 푸터 컨테이너 시작

    #footPrimary {
        margin-block-start: 5rem;
        padding-block: 2.5rem;
        background-color: rgba(var(--clr-min), .5);
        color: rgba(var(--clr-max), .5);
        font-size: .55rem;
    }

    #footReactiveGrid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        row-gap: 1rem;
        column-gap: 2rem;

        > .hf {
            grid-column: 1 / -1;
            background-color: rgba(var(--clr-max), .5);
        }
    }

    .footer-empty-separator {
        grid-column: 1 / 3;
        height: 1.5rem;
    }

    // 푸터 컨테이너 끝

    // 푸터 내부 링크 시작

    #footInternalLinks {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }

    .footer-internal-links {
        display: flex;
        flex-flow: column nowrap;
        gap: .75rem;

        > dt {
            color: rgb(var(--clr-max));
            font-size: var(--fnt-md);
            font-weight: 900;
        }
    }

    // 푸터 내부 링크 종료

    // 푸터 파트너 배너 그리드 시작

    #footPartners {
        display: flex;
        flex-flow: column nowrap;
        gap: .75rem;
        user-select: none;

        > dt {
            color: rgb(var(--clr-max));
            font-size: var(--fnt-md);
            font-weight: 900;
        }
    }

    .footer-partners-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(6rem, auto));
        gap: .2rem;
    }

    .footer-partner-banner {
        height: 2.4rem;
        border-radius: .25rem;
        background-color: rgba(var(--clr-max), .1);
        color: rgb(var(--clr-min));
        transition: background-color .15s;

        > a {
            display: grid;
            place-items: center;
            padding: .25rem;
            height: 100%;
            filter: invert(1) grayscale(1);
            transition: filter .15s;
        }

        &:hover {
            background-color: rgb(var(--clr-max));

            > a {
                filter: none;
            }
        }
    }

    // 푸터 파트너 배너 그리드 끝

    // 푸터 위치 정보 및 카피라이트 시작

    #footGeoCopy {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .footer-geo-location {
        display: flex;
        align-items: center;
        gap: .25rem;
        color: rgb(var(--clr-max));
    }

    #footTerms {
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
    }

    // 푸터 위치 정보 및 카피라이트 끝

    // 푸터 회사 정보 및 안내 시작

    #footContactInfo {
        display: flex;
        flex-flow: column nowrap;
        row-gap: .5rem;
    }

    .footer-company-info {
        display: flex;
        flex-flow: row wrap;
        column-gap: .25rem;
    }

    .footer-customer-contacts {
        display: flex;
        flex-flow: row wrap;
        column-gap: .5rem;

        > dl {
            display: contents;
        }
    }

    // 푸터 회사 정보 및 안내 끝

    // 미디어 쿼리 시작

    @media screen and (width <= 1080px) {
        #footReactiveGrid {
            display: flex;
            flex-flow: column nowrap;
        }

        #footPartners {
            margin-block-start: 2.5rem;
        }

        #footTerms {
            justify-content: flex-start;
        }
    }

    // 미디어 쿼리 끝
</style> <!-- Stylesheet Ends -->