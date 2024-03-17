<template>
    <div id="mainNews">
        <div class="minimum-container">
            <MainTitleElement>
                <template v-slot:breakableString>latest news</template>

                <template v-slot:catchyString>
                    Subscribe our channel to<br>
                    get updated
                </template>
            </MainTitleElement>
        </div>

        <div class="minimum-container">
            <div class="news-nav-paginations"></div>

            <div id="mainNewsSlider" class="main-section-container">
                <button class="news-nav-button-prev">
                    <span class="a11y-label">앞</span>
                </button>

                <swiper-container v-bind="newsSliderParams">
                    <MainNewsElement v-for="slide in slides" :articleLink="slide.link">
                        <template v-slot:articleImage>
                            <img :src="slide.image" alt="">
                        </template>

                        <template v-slot:articleTitle>
                            {{ slide.title }}
                        </template>

                        <template v-slot:articleContent>
                            {{ slide.content }}
                        </template>

                        <template v-slot:articleDate>
                            {{ slide.date }}
                        </template>

                        <template v-slot:articleFrom>
                            {{ slide.from }}
                        </template>
                    </MainNewsElement>
                </swiper-container>

                <button class="news-nav-button-next">
                    <span class="a11y-label">뒤</span>
                </button>
            </div> <!-- #mainNewsSlider -->
        </div>
    </div> <!-- #mainNews -->
</template> <!-- Template Ends -->

<script setup>
    import MainTitleElement from '@/components/Main/elements/MainTitleElement.vue'
    import MainNewsElement from '@/components/Main/elements/MainNewsElement.vue'

    const newsSliderParams = {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 40,
        speed: 500,
        navigation: {
            prevEl: '.news-nav-button-prev',
            nextEl: '.news-nav-button-next',
            disabledClass: 'news-nav-button-disabled'
        },
        pagination: {
            el: '.news-nav-paginations',
            type: 'bullets',
            bulletElement: 'button',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                slidesPerGroup: 2
            },
            1160: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            }
        }
    }

    const slides = ref([
        {
            link: '#',
            image: 'https://picsum.photos/200/300?random=1',
            title: `Lorem ipsum dolor sit amet`,
            content: `consectetur adipiscing elit. Sed dictum, lorem vel dignissim aliquet`,
            date: '2023. 01. 04',
            from: 'City Post'
        },
        {
            link: '#',
            image: 'https://picsum.photos/200/300?random=2',
            title: `Sed varius, lorem gravida consectetur sodales`,
            content: `Etiam eleifend eros nulla, eget semper lorem scelerisque nec`,
            date: '2023. 01. 04',
            from: 'Power News'
        },
        {
            link: '#',
            image: 'https://picsum.photos/200/300?random=3',
            title: `Proin eu blandit neque, a dapibus nibh`,
            content: `Curabitur dolor nibh, fermentum vel faucibus sed`,
            date: '2023. 01. 04',
            from: 'Another Tribune'
        },
        {
            link: '#',
            image: 'https://picsum.photos/200/300?random=4',
            title: `Vivamus scelerisque elementum augue`,
            content: `a convallis diam blandit eget. Vivamus luctus leo non cursus congue`,
            date: '2023. 01. 04',
            from: 'Winning Merchandise'
        },
        {
            link: '#',
            image: 'https://picsum.photos/200/300?random=5',
            title: `Donec dictum enim ut nulla rhoncus dictum`,
            content: `Curabitur vulputate, orci vitae viverra tempus`,
            date: '2023. 01. 04',
            from: 'Social Magazine'
        },
        {
            link: '#',
            image: 'https://picsum.photos/200/300?random=6',
            title: `ligula sed gravida convallis`,
            content: `lacus ligula eleifend orci, id sagittis eros neque quis eros`,
            date: '2023. 01. 04',
            from: 'The Industry'
        },
        {
            link: '#',
            image: 'https://picsum.photos/200/300?random=7',
            title: `Nam rutrum mauris mauris, id ullamcorper enim gravida in`,
            content: `Vivamus id ligula consectetur, scelerisque nisi sit amet, rhoncus neque`,
            date: '2023. 01. 04',
            from: 'Monthly Tools'
        },
        {
            link: '#',
            image: 'https://picsum.photos/200/300?random=8',
            title: `Morbi a nulla sit amet metus posuere ultrices accumsan quis nibh`,
            content: `Quisque euismod lorem non arcu semper volutpat a id lorem`,
            date: '2023. 01. 04',
            from: 'Gadget Overview'
        },
    ])
</script> <!-- Logic Ends -->

<style lang="scss">
    // 메인 최근 뉴스 슬라이더 시작

    #mainNewsSlider {
        position: relative;
    }

    .news-nav-paginations {
        display: flex;
        gap: .5rem;
        margin-block-start: 2.5rem;

        --swiper-pagination-bullet-horizontal-gap: 0;

        > .swiper-pagination-bullet {
            margin: 0;
            width: 2rem;
            height: .25rem;
            border-radius: .05rem;
            background-color: rgb(var(--clr-max));
        }
    }

    .news-nav-button-prev,
    .news-nav-button-next {
        position: absolute;
        top: 0;
        bottom: 0;
        margin-block: auto;
    }

    .news-nav-button-prev {
        right: calc(100% + 1.5rem);
    }

    .news-nav-button-next {
        left: calc(100% + 1.5rem);
    }

    .news-nav-button-disabled {
        opacity: .5;
    }

    // 메인 최근 뉴스 슬라이더 끝

    // 미디어 쿼리 시작

    @media screen and (width <= 540px) {
        .news-nav-paginations {
            > .swiper-pagination-bullet {
                width: .5rem;
                height: .5rem;
                border-radius: 500px;
            }
        }
    }

    // 미디어 쿼리 끝
</style> <!-- Stylesheet Ends -->