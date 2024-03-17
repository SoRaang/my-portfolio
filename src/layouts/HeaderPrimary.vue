<template>
    <header id="headPrimary" ref="headEl">
        <div class="reactive-inner">
            <div id="headerLogo">
                <h1 id="mainLogo">
                    <router-link to="/">
                        <span class="a11y-label">{{ siteInfo.siteName }}</span>
                        <img class="main-logo-image grayscale" :src="siteInfo.urlLogoGrayscale" :alt="siteInfo.siteName">
                    </router-link>
                </h1>
            </div> <!-- #headerLogo -->

            <div id="headerInfo">
                <p class="customer-service">
                    <p class="flex flex-row items-center gap-2 opacity-50">
                        <i class="ri-customer-service-2-fill"></i>
                        <span>Call Us</span>
                    </p>
                    <span>{{ siteInfo.companyCallCS }}</span>
                </p>

                <hr class="vf">

                <div class="social-external-links">
                    <a :href="siteInfo.companySNS.youtube" class="external-link-item" style="--social-icon-present-color: 196, 48, 43" target="_blank" data-social-name="YouTube">
                        <i class="ri-youtube-fill"></i>
                    </a>

                    <a :href="siteInfo.companySNS.twitter" class="external-link-item" style="--social-icon-present-color: 0, 172, 255" target="_blank" data-social-name="Twitter">
                        <i class="ri-twitter-fill"></i>
                    </a>

                    <a :href="siteInfo.companySNS.instagram" class="external-link-item" style="--social-icon-present-color: 255, 0, 105" target="_blank" data-social-name="Instagram">
                        <i class="ri-instagram-fill"></i>
                    </a>
                </div>
            </div> <!-- #headerInfo -->

            <div id="headerNavigation">
                <div id="navBurger">
                    <button type="button" id="btnNavBurger" :class="isNavShown === true ? 'toggled' : ''" @click.prevent="isNavShown = !isNavShown">
                        <div class="burger-button-text">
                            <div class="burger-button-text-roller">
                                <p>M E N U</p>
                                <p>C L O S E</p>
                            </div>
                        </div>

                        <div class="burger-button-icon">
                            <span class="burger-button-compartment top"></span>
                            <span class="burger-button-compartment middle"></span>
                            <span class="burger-button-compartment bottom"></span>
                        </div>
                    </button> <!-- #btnNavBurger -->
                </div> <!-- #navBurger -->

                <nav id="navOverlay" :class="isNavShown === true ? 'toggled' : ''" role="navigation" ref="navOverlay">
                    <ul class="nav-link-drawer">
                        <li data-navigation-depth="1">
                            <router-link to="/">Home</router-link>
                        </li>

                        <li data-navigation-depth="1">
                            <router-link to="/info">About Us</router-link>
                        </li>

                        <li data-navigation-depth="1">
                            <router-link to="/products">Products</router-link>
                        </li>

                        <li data-navigation-depth="1">
                            <router-link to="/services">Services</router-link>

                            <ul class="nav-link-drawer-depth-2">
                                <li data-navigation-depth="2">
                                    <router-link to="/services/notice">Notice</router-link>
                                </li>

                                <li data-navigation-depth="2">
                                    <router-link to="/services/ask">Q&A</router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav> <!-- #navOverlay -->
            </div> <!-- #headerNavigation -->
        </div>
    </header> <!-- #headPrimary -->
</template> <!-- Template Ends -->

<script setup>
    import { useRoute } from 'vue-router'
    import { useSiteInfoStore } from '@/stores/siteInfoStore'

    const route = useRoute()
    const siteStore = useSiteInfoStore()
    const siteInfo = siteStore.siteConfigs
    const isNavShown = ref(false)
    const isOpened = ref(false)
    const navOverlay = ref(null)

    function isNavClicked(event) {
        const navEl = navOverlay.value

        if (navEl !== event.target && !navEl.contains(event.target)) {
            if (isOpened.value === true) {
                isNavShown.value = false
            }
        }
    }

    watch(isNavShown, () => {
        if (isNavShown.value === true) {
            window.addEventListener('click', isNavClicked)
            setTimeout(() => isOpened.value = true, 10)
        } else {
            window.removeEventListener('click', isNavClicked)
            isOpened.value = false
        }
    })

    watch(route, () => {
        isNavShown.value = false
    })

    const headEl = ref(null)
    const scrollWait = ref(false)
    const isScrolled = ref(300)

    function scrollHandler(e) {
        if (!scrollWait.value) {
            scrollWait.value = true

            const currentScroll = window.scrollY

            if (currentScroll > isScrolled.value) {
                headEl.value.classList.add('scrolled-down')
            } else if (currentScroll < isScrolled.value) {
                headEl.value.classList.remove('scrolled-down')
            }

            setTimeout(() => {
                scrollWait.value = false
            }, 100)
        }
    }

    onMounted(() => {
        window.addEventListener('scroll', scrollHandler)
    })
</script> <!-- Logic Ends -->

<style lang="scss" scoped>
    // 헤더 컨테이너 시작

    #headPrimary {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 5rem;
        z-index: 50000;

        --reactive-base: 58rem;

        #headerLogo,
        #headerInfo,
        #btnNavBurger {
            transition: color .3s;
        }

        &:not(.scrolled-down) {
            #headerLogo,
            #headerInfo,
            #btnNavBurger {
                color: rgb(var(--clr-white));
            }
        }

        &::before {
            display: block;
            position: absolute;
            inset: 0;
            background-color: rgba(var(--clr-background), .75);
            backdrop-filter: blur(1.5rem);
            transform: translateY(-100%);
            transition: transform .3s;
            z-index: -1;
            content: '';
        }

        &.scrolled-down {
            &::before {
                transform: none;
            }
        }

        > .reactive-inner {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            height: 100%;
        }
    }

    // 헤더 컨테이너 끝

    // 헤더 로고 시작

    #headerLogo {
        flex: 1;
        flex-basis: calc((100% - var(--reactive-base)) / 2);
        font-family: var(--ff-serif-en);
        font-size: var(--fnt-title-sm);
    }

    #mainLogo {
        width: fit-content;
    }

    .main-logo-image {
        max-height: 3rem;
    }

    // 헤더 로고 끝

    // 외부 링크 시작

    #headerInfo {
        flex: 1 1 min(var(--reactive-base), 100% - 1.5rem);
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 1.5rem;

        > .vf {
            height: 1rem;
            background-color: currentColor;
            opacity: .5;
        }
    }

    .customer-service {
        display: flex;
        gap: 1.5rem;
        font-weight: 900;
    }

    .social-external-links {
        display: flex;
        gap: 1.25rem;
        font-size: .8rem;
    }

    .external-link-item {
        display: block;
        position: relative;
        margin: -.5rem;
        padding: .5rem;
        border-radius: .5rem;
        transition: .15s;

        &::before {
            display: block;
            position: absolute;
            top: calc(100% + .25rem);
            left: 50%;
            padding: .25rem .5rem;
            width: fit-content;
            height: fit-content;
            border-radius: .25rem;
            background-color: rgba(var(--clr-black), .9);
            box-shadow: 0 .25rem .5rem rgba(var(--clr-black), .25);
            font-size: var(--fnt-sm);
            color: rgb(var(--clr-white));
            transform: translateX(-50%);
            transition: opacity .3s;
            opacity: 0;
            pointer-events: none;
            content: attr(data-social-name);
        }

        &:hover {
            background-color: rgb(var(--clr-white));
            box-shadow: 0 .15rem .5rem rgba(var(--clr-black), .25);
            color: rgb(var(--social-icon-present-color));

            &::before {
                opacity: 1;
            }
        }
    }

    // 외부 링크 끝

    // 네비게이션 컨테이너 시작

    #headerNavigation {
        flex: 1;
        flex-basis: calc((100% - var(--reactive-base)) / 2);
        display: flex;
        justify-content: flex-end;
    }

    #btnNavBurger {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        gap: .5rem;
        isolation: isolate;
    }

    .burger-button-text {
        height: 1em;
        font-size: .4rem;
        font-weight: 900;
        text-align: end;
        line-height: 1em;
        overflow: hidden;
    }

    .burger-button-text-roller {
        transition: transform .3s;

        > p {
            transition: opacity .15s;

            &:nth-child(1) {
                opacity: 1;
            }

            &:nth-child(2) {
                opacity: 0;
            }
        }
    }

    #btnNavBurger.toggled {
        :where(.burger-button-text-roller) {
            transform: translateY(-50%);

            > p {
                &:nth-child(1) {
                    opacity: 0;
                }

                &:nth-child(2) {
                    opacity: 1;
                }
            }
        }
    }

    .burger-button-icon {
        position: relative;
        width: .7rem;
        height: .6rem;
    }

    .burger-button-compartment {
        display: block;
        position: absolute;
        margin: auto;
        width: .7rem;
        height: .1rem;
        border-radius: .1rem;
        background-color: currentColor;
        transform-origin: center;

        &.top {
            top: 0;
            transition: all .3s;
        }

        &.middle {
            top: 0;
            bottom: 0;
            transition: {
                property: transform, opacity;
                duration: .15s;
                timing-function: ease-in, ease-out;
            }
        }

        &.bottom {
            bottom: 0;
            transition: all .3s;
        }
    }

    #btnNavBurger.toggled {
        :where(.burger-button-compartment) {
            &.top {
                top: calc(50% - .05rem);
                transform: rotate(45deg);
                transition: {
                    property: top, transform;
                    duration: .3s, .15s;
                    delay: 0s, .2s;
                }
            }

            &.middle {
                transform: translateX(-2rem);
                opacity: 0;
            }

            &.bottom {
                bottom: calc(50% - .05rem);
                transform: rotate(-45deg);
                transition: {
                    property: bottom, transform;
                    duration: .3s, .15s;
                    delay: 0s, .2s;
                }
            }
        }
    }

    #navOverlay {
        display: flex;
        flex-flow: column nowrap;
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        padding: 5rem 2.5rem;
        width: 320px;
        background-color: rgba(var(--clr-min), .9);
        box-shadow: 0 0 0 200vmax transparent;
        transform: translateX(100%);
        transition: transform .5s, box-shadow .3s;
        z-index: -1;
        will-change: transform, box-shadow;

        &.toggled {
            transform: none;
            box-shadow: 0 0 0 200vmax rgba(var(--clr-min), .25);
        }
    }

    // 네비게이션 컨테이너 끝

    // 네비게이션 시작

    .nav-link-drawer {
        display: flex;
        flex-flow: column nowrap;
        gap: 1.5rem;
        font-size: var(--fnt-lg);
    }

    .nav-link-drawer-depth-2 {
        display: flex;
        flex-flow: column nowrap;
        gap: .5rem;
        margin-block-start: .5rem;
        color: rgba(var(--clr-max), .5);
        font-size: var(--fnt-md);
        text-indent: .25rem;
    }

    [data-navigation-depth="1"] {
        > a {
            display: block;
            font-weight: 900;

            &:hover {
                text-decoration: underline .5px solid rgb(var(--clr-theme));
            }

            &.router-link-active {
                color: rgb(var(--clr-theme));
            }
        }
    }

    [data-navigation-depth="2"] {
        > a {
            display: block;
            font-weight: 100;
            transition: color .15s;

            &:hover {
                color: rgba(var(--clr-max), .75);
            }

            &.router-link-active {
                color: rgb(var(--clr-max));
                font-weight: 400;
                text-decoration: underline .5px solid;
            }
        }
    }

    // 네비게이션 끝

    // 미디어 쿼리 시작

    @media screen and (width <= 1480px) {
        #headPrimary {
            --reactive-base: 36rem;
        }
    }

    @media screen and (width <= 1080px) {
        #headPrimary {
            > .reactive-inner {
                justify-content: space-between;
            }
        }

        #headerInfo {
            display: none;
        }
    }

    // 미디어 쿼리 끝
</style> <!-- Stylesheet Ends -->