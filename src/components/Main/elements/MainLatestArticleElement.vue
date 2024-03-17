<template>
    <li class="latest-article-item">
        <p class="latest-article-title" :class="tag ? 'tagged' : ''" :data-tag-name="tag" :style="styleString(tag)">
            <a :href="linkHref">
                {{ title }}
            </a>
        </p>

        <p class="latest-article-date">
            {{ date }}
        </p>
    </li>
</template> <!-- Template Ends -->

<script setup>
    defineProps({
        title: String,
        date: Date,
        linkHref: String,
        tag: String
    })

    function styleString(tag) {
        let bg = ''
        let text = ''

        switch (tag) {
            case 'hot' :
                bg = '255, 102, 0'
                text = '101, 35, 0'
            break

            case 'new' :
                bg = '0, 255, 136'
                text = '19, 81, 52'
            break

            default :
                bg = '0, 0, 0'
                text = '255, 255, 255'
        }

        return `
            --article-tag-background: ${bg};
            --article-tag-text: ${text};
        `
    }
</script> <!-- Logic Ends -->

<style lang="scss">
    // 메인 최근 게시물 아이템 시작

    .latest-article-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        border-block-end: .5px solid rgba(var(--clr-max), .5);

        &:hover {
            .latest-article-title {
                font-weight: 900;
                opacity: 1;
            }
        }
    }

    .latest-article-title {
        flex: 1;
        display: flex;
        align-items: center;
        gap: .75rem;
        width: 12rem;
        opacity: .75;

        > a {
            display: block;
            padding-block: 1rem;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        &.tagged {
            &::after {
                flex: 0;
                display: block;
                padding: .15rem .5rem;
                border-radius: 500px;
                background-color: rgb(var(--article-tag-background, 0, 0, 0)); // 임시
                color: rgb(var(--article-tag-text, 255, 255, 255)); // 임시
                font-size: .4rem;
                font-weight: 900;
                text-decoration: none;
                text-transform: uppercase;
                line-height: .4rem;
                content: attr(data-tag-name);
            }
        }
    }

    .latest-article-date {
        font-weight: 100;
        opacity: .5;
    }

    .latest-article-button {
        display: flex;
        align-items: center;
        gap: .5rem;
        margin-inline-start: auto;
        padding-block: 1rem;

        > i {
            font-size: var(--fnt-lg);
        }

        &:hover {
            color: rgb(var(--clr-theme));
        }
    }

    // 메인 최근 게시물 아이템 끝
</style> <!-- Stylesheet Ends -->