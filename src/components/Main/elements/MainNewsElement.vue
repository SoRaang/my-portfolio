<template>
    <swiper-slide class="latest-news-article">
        <a :href="articleLink">
            <div class="news-article-image">
                <slot name="articleImage">
                    <img src="https://picsum.photos/360/270" alt="">
                </slot>
            </div>

            <div class="news-article-overlay">
                <h4 class="news-article-title">
                    <slot name="articleTitle">
                        제목을 불러오지 못했습니다.
                    </slot>
                </h4>

                <p class="news-article-shorts">
                    <slot name="articleContent">
                        내용이 없습니다.
                    </slot>
                </p>

                <p class="news-article-date">
                    <slot name="articleDate">1900. 01. 01</slot>
                </p>

                <p class="news-article-from">
                    <slot name="articleFrom">New York Herald Tribune</slot>
                </p>
            </div>
        </a>
    </swiper-slide>
</template> <!-- Template Ends -->

<script setup>
    defineProps({
        articleLink: String
    })
</script> <!-- Logic Ends -->

<style lang="scss">
    // 메인 최근 뉴스 아이템 시작

    .latest-news-article {
        position: relative;
        width: min(18rem, 100%);
        height: 21rem;

        &:hover {
            .news-article-image {
                height: 10rem;
            }

            .news-article-overlay {
                height: 12rem;
            }

            .news-article-title {
                opacity: .5;
            }

            .news-article-shorts {
                margin-block-start: 1rem;
                height: 2rem;
                opacity: 1;
            }
        }
    }

    .news-article-image {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 13.5rem;
        transition: height .3s;

        > img {
            width: 100%;
            height: 100%;
        }
    }

    .news-article-overlay {
        display: flex;
        flex-flow: column nowrap;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: .75rem 1.5rem 1.5rem;
        height: 8.75rem;
        backdrop-filter: blur(1.5rem) brightness(.9);
        transition: height .3s;
    }

    .news-article-title {
        font-size: var(--fnt-xl);
        font-weight: 900;
        line-height: 1.4;
        transition: opacity .3s;
    }

    .news-article-shorts {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        height: 0;
        line-height: 1rem;
        -webkit-line-clamp: 2;
        opacity: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        transition: margin-block-start .3s, height .3s, opacity .3s;
    }

    .news-article-date {
        margin-block-start: .5rem;
        margin-block-end: auto;
        font-size: var(--fnt-sm);
        opacity: .5;
    }

    .news-article-from {
        align-self: flex-end;
        opacity: .5;
    }

    // 메인 최근 뉴스 아이템 끝
</style> <!-- Stylesheet Ends -->