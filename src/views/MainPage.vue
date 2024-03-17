<template>
    <div class="main-page-wrapper">
        <div id="mainVisual">
            <div class="main-visual-image">
                <img src="@/assets/images/main-visual.jpg" alt="">
            </div>
        </div> <!-- #mainVisual -->

        <div id="mainColumn" class="reactive-inner">
            <div id="mainHero">
                <div class="minimum-container">
                    <div class="main-hero-content">
                        <h1>Korea Diamond Tools</h1>
                        <p>
                            We're Making Tools That Out Of This World
                        </p>
                    </div>
                </div>
            </div> <!-- #mainHero -->

            <MainIntroduce />

            <MainFeatures />

            <MainCatalogue />

            <MainTestimony />

            <MainPartners />

            <MainNews />

            <MainLatestArticles />
        </div> <!-- #mainColumn -->
    </div>
</template> <!-- Template Ends -->

<script setup>
    import MainIntroduce from '@/components/Main/MainIntroduce.vue'
    import MainFeatures from '@/components/Main/MainFeatures.vue'
    import MainCatalogue from '@/components/Main/MainCatalogue.vue'
    import MainTestimony from '@/components/Main/MainTestimonials.vue'
    import MainPartners from '@/components/Main/MainPartners.vue'
    import MainNews from '@/components/Main/MainNews.vue'
    import MainLatestArticles from '@/components/Main/MainLatestArticles.vue'
</script> <!-- Logic Ends -->

<style lang="scss">
    // 메인 비쥬얼 시작

    #mainVisual {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 150vh;
        pointer-events: none;
        user-select: none;
        z-index: -1;
    }

    .main-visual-image {
        position: absolute;
        top: -40%;
        bottom: 0;
        left: 0;
        right: 0;

        > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        &::after {
            display: block;
            position: absolute;
            top: 50%;
            bottom: 0;
            left: 0;
            right: 0;
            background-image: linear-gradient(to top, rgb(var(--clr-background)), transparent);
            content: '';
        }
    }

    .main-hero-content {
        display: grid;
        place-items: center;
        height: 75vh;
    }

    // 메인 비쥬얼 끝

    // 메인 플렉스 컬럼 시작

    #mainColumn {
        display: flex;
        flex-flow: column nowrap;
        gap: 10rem;
        margin-block-start: 5rem;
    }

    // 메인 플렉스 컬럼 끝

    // 메인 섹션 컨테이너 시작

    .main-section-container {
        margin-block-start: 2.5rem;
    }

    // 메인 섹션 컨테이너 끝
</style> <!-- Stylesheet Ends -->