<template>
    <div id="mainLatestArticles" class="minimum-container">
        <div id="mainLatestArticlesGrid">
            <div class="latest-article-container">
                <div class="latest-article-header">
                    <span>R</span>
                    <span>E</span>
                    <span>C</span>
                    <span>R</span>
                    <span>U</span>
                    <span>I</span>
                    <span>T</span>
                </div>

                <ul class="latest-article-list">
                    <MainLatestArticleElement v-for="article in articlesRecruit"
                        :title="article.title"
                        :date="article.date"
                        :linkHref="article.link"
                        :tag="article.tag"
                    />
                </ul>

                <div>
                    <button type="button" class="latest-article-button">
                        <span>View All</span>
                        <i class="ri-arrow-right-up-line"></i>
                    </button>
                </div>
            </div>

            <div class="latest-article-container">
                <div class="latest-article-header">
                    <span>O</span>
                    <span>U</span>
                    <span>R</span>
                    <span></span>
                    <span>C</span>
                    <span>O</span>
                    <span>N</span>
                    <span>T</span>
                    <span>R</span>
                    <span>I</span>
                    <span>B</span>
                    <span>U</span>
                    <span>T</span>
                    <span>I</span>
                    <span>O</span>
                    <span>N</span>
                </div>

                <ul class="latest-article-list">
                    <MainLatestArticleElement v-for="article in articlesContribution"
                        :title="article.title"
                        :date="article.date"
                        :linkHref="article.link"
                        :tag="article.tag"
                    />
                </ul>

                <div>
                    <button type="button" class="latest-article-button">
                        <span>View All</span>
                        <i class="ri-arrow-right-up-line"></i>
                    </button>
                </div>
            </div>
        </div> <!-- #mainLatestArticlesGrid -->
    </div> <!-- #mainLatestArticles -->
</template> <!-- Template Ends -->

<script setup>
    import MainLatestArticleElement from '@/components/Main/elements/MainLatestArticleElement.vue'

    const articlesRecruit = ref([
        {
            title: '2023 상반기 채용공고 [소프트웨어 개발, 디자이너]',
            date: '2023. 01. 21',
            link: 'http://www.naver.com'
        },
        {
            title: '2023 상반기 채용공고 [총무, 회계]',
            date: '2023. 01. 21',
            link: 'http://www.naver.com'
        },
        {
            title: '2023 상반기 채용공고 [대표이사]',
            tag: 'hot',
            date: '2023. 01. 21',
            link: 'http://www.naver.com'
        }
    ])

    const articlesContribution = ref([
    {
            title: '거동이 불편한 장애인, 독거노인 층을 위한 셔틀버스 운행',
            tag: 'new',
            date: '2023. 04. 01',
            link: 'http://www.naver.com'
        },
        {
            title: '불우이웃 대상 설 연휴 셔틀버스 운행',
            date: '2023. 02. 01',
            link: 'http://www.naver.com'
        },
        {
            title: '독거노인층에 난방비 지원',
            date: '2022. 12. 25',
            link: 'http://www.naver.com'
        }
    ])
</script> <!-- Logic Ends -->

<style lang="scss">
    // 메인 최근 게시물 시작

    #mainLatestArticlesGrid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }

    .latest-article-header {
        display: flex;
        gap: .4rem;
        opacity: .5;
        margin-block-end: 2.5rem;
        font-weight: 900;
    }

    // 메인 최근 게시물 끝

    // 미디어 쿼리 시작

    @media screen and (width <= 760px) {
        #mainLatestArticlesGrid {
            display: flex;
            flex-flow: column nowrap;
        }

        .latest-article-header {
            margin-block-end: 1rem;
        }
    }

    // 미디어 쿼리 끝
</style> <!-- Stylesheet Ends -->