<template>
    <div id="wrap">
        <DefaultLayout>
            <router-view v-slot="{ Component, route }">
                <transition name="fade" mode="out-in">
                    <component :is="Component" :key="route" />
                </transition>
            </router-view>
        </DefaultLayout>
    </div> <!-- #wrap -->

    <aside id="asideCookie" :class="!!cookieEnabled === false ? 'show' : ''" ref="asideCookie" v-if="!!cookieEnabled === false">
        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 512 512" class="cookie-settings-icon">
            <g>
                <path d="M256,0C114.6,0,0,114.6,0,256s114.6,256,256,256s256-114.6,256-256c0-10.3-0.8-20.5-2-30.6c-8.5,5.8-18.8,9.3-30,9.3
                    c-23,0-42.4-14.7-49.9-35c-13.3,8.5-29.1,13.7-46.1,13.7c-47.2,0-85.3-38.2-85.3-85.3c0-15.7,4.5-30.2,11.9-42.8l-1.3,0.2
                    C279.8,85.3,256,61.5,256,32c0-11.9,4-22.8,10.6-31.6C263.1,0.3,259.6,0,256,0z M416,0c-17.7,0-32,14.3-32,32s14.3,32,32,32
                    s32-14.3,32-32S433.7,0,416,0z M214.4,46.7c4.3,27.5,20.3,51.2,42.6,65.8c-0.7,5.1-1,10.3-1,15.5c0,70.6,57.4,128,128,128
                    c10.6,0,21.2-1.3,31.3-4c14.6,13.3,33,22.2,53,24.7c-10.4,108-101.7,192.7-212.3,192.7c-117.7,0-213.3-95.7-213.3-213.3
                    C42.7,152.6,116.7,66.1,214.4,46.7z M384,106.7c-11.8,0-21.3,9.6-21.3,21.3s9.6,21.3,21.3,21.3s21.3-9.6,21.3-21.3
                    S395.8,106.7,384,106.7z M213.3,128c-11.8,0-21.3,9.6-21.3,21.3s9.6,21.3,21.3,21.3s21.3-9.6,21.3-21.3S225.1,128,213.3,128z
                    M490.7,128c-11.8,0-21.3,9.6-21.3,21.3s9.6,21.3,21.3,21.3s21.3-9.6,21.3-21.3S502.4,128,490.7,128z M149.3,192
                    c-23.6,0-42.7,19.1-42.7,42.7s19.1,42.7,42.7,42.7s42.7-19.1,42.7-42.7S172.9,192,149.3,192z M256,234.7
                    c-11.8,0-21.3,9.6-21.3,21.3s9.6,21.3,21.3,21.3s21.3-9.6,21.3-21.3S267.8,234.7,256,234.7z M181.3,320c-17.7,0-32,14.3-32,32
                    s14.3,32,32,32s32-14.3,32-32S199,320,181.3,320z M330.7,341.3c-17.7,0-32,14.3-32,32c0,17.7,14.3,32,32,32c17.7,0,32-14.3,32-32
                    C362.7,355.7,348.3,341.3,330.7,341.3z"/>
            </g>
        </svg>

        <div class="cookie-settings-text">
            <h4>Cookie Settings</h4>
            <p>We use cookies and similar technologies to help personalise content, tailor and measure ads, and provide a better experience.</p>
            <p>By clicking accept, you agree to this, as outlined in our <a class="inline-link" href="">Cookie Policy</a>.</p>
        </div>

        <button type="button" id="btnCookieAccept" class="button-normal cookie-settings-buttons" @click.prevent="setCookieConfig(true)">
            <span>Accept</span>
        </button>
    </aside> <!-- #asideCookie -->
</template> <!-- Template Ends -->

<script setup>
    import DefaultLayout from '@/layouts/DefaultLayout.vue'
    import { register } from 'swiper/element/bundle'

    register()

    const asideCookie = ref(null)
    const cookieEnabled = ref(localStorage.getItem('sonamuWebDevCookieEnabled'))

    function setCookieConfig(value) {
        // localStorage.setItem('sonamuWebDevCookieEnabled', value)
        asideCookie.value.classList.remove('show')
        setTimeout(() => { asideCookie.value.remove() }, 2000)
    }
</script> <!-- Logic Ends -->

<style lang="scss">
    // 라우터 트랜지션 이펙트 시작

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .25s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

    // 라우터 트랜지션 이펙트 끝

    // 쿠키 팝업 시작

    #asideCookie {
        display: flex;
        align-items: center;
        gap: 2rem;
        position: fixed;
        bottom: 1rem;
        inset-inline: 1rem;
        margin-inline: auto;
        padding: 2rem;
        width: fit-content;
        background-color: rgb(var(--clr-background));
        box-shadow: 0 .5rem 1.5rem -.5rem rgba(var(--clr-black), .25);
        transform: translateY(150%);
        opacity: 0;
        transition: transform .3s, opacity .3s;
        transition-timing-function: cubic-bezier(1, -.3, .6, .7);
        isolation: isolate;
        z-index: 50000;

        &.show {
            transform: none;
            opacity: 1;
        }
    }

    .cookie-settings-icon {
        width: 2rem;
        height: 2rem;
        fill: rgb(177, 112, 50);
    }

    .cookie-settings-text {
        line-height: 1.6;
    }

    .cookie-settings-buttons {
        padding: .75rem 1rem;
    }

    // 쿠키 팝업 끝
</style> <!-- Stylesheet Ends -->