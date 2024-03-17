<template>
    <swiper-slide class="catalogue-slide">
        <div class="catalogue-image">
            <slot name="catalogueSliderImage"></slot>
        </div>

        <div class="catalogue-overlay">
            <dl class="catalogue-item-content">
                <dt class="catalogue-item-title">
                    <slot name="itemTitle"></slot>
                </dt>

                <dd class="catalogue-item-ingredients">
                    <slot name="itemIngredients"></slot>
                </dd>

                <dd class="catalogue-item-description">
                    <slot name="itemDescription"></slot>
                </dd>

                <dd class="catalogue-item-label">
                    <div class="catalogue-item-pricetag">
                        <slot name="itemPrice"></slot>
                    </div>

                    <div class="catalogue-item-starpoint">
                        <div class="starpoint-mask" v-for="point in 5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="star-icon" width="24" height="24" viewBox="0 0 24 24">
                                <rect data-name="icon frame" width="24" height="24" fill="none" />
                                <path class="star-shape" :class="starPoint < point ? '' : 'filled'" data-name="star shape" d="M9.859,2.356a2,2,0,0,1,3.282,0l2.277,3.27a2,2,0,0,0,1.053.768l3.812,1.173a2,2,0,0,1,1.013,3.11l-2.408,3.215a2,2,0,0,0-.4,1.233l.069,4.014A2,2,0,0,1,15.9,21.065l-3.75-1.3a2,2,0,0,0-1.308,0l-3.75,1.3A2,2,0,0,1,4.442,19.14l.069-4.014a2,2,0,0,0-.4-1.233L1.7,10.678a2,2,0,0,1,1.013-3.11L6.529,6.394a2,2,0,0,0,1.053-.768Z" />
                            </svg>
                        </div>
                    </div>
                </dd>
            </dl>
        </div>
    </swiper-slide>
</template> <!-- Template Ends -->

<script setup>
    defineProps({
        starPoint: Number
    })
</script> <!-- Logic Ends -->

<style lang="scss">
    // 메인 카탈로그 아이템 시작

    .catalogue-slide {
        position: relative;
        width: 100%;
        aspect-ratio: 7 / 10;
        background-color: rgb(var(--clr-min));
        opacity: .1;
        transition: opacity .3s;
        user-select: none;

        &.swiper-slide-visible {
            opacity: 1;
        }

        &:not(.swiper-slide-visible) {
            pointer-events: none;
        }
    }

    .catalogue-image {
        position: absolute;
        inset: 0;

        > img {
            width: 100%;
            height: 100%;
        }
    }

    .catalogue-overlay {
        position: absolute;
        inset: 0;
        padding: 2rem 1.5rem;
        background: {
            image: linear-gradient(to bottom, transparent 12.5%, rgba(var(--clr-black), .75) 35%, rgba(var(--clr-theme), .9) 50%, rgba(var(--clr-theme), .9));
            position: 0 0;
            size: 100% 300%;
        }
        color: rgb(var(--clr-white));
        transition: background-position .5s, color .3s;
        overflow: hidden;

        &:hover,
        &:focus {
            background-position: 0 100%;
            color: rgb(var(--clr-text-on-tint));

            .catalogue-item-description {
                flex: 1;
                margin-block-start: 1.5rem;
                margin-block-end: 1rem;
                opacity: 1;
            }
        }
    }

    // 메인 카탈로그 아이템 끝

    // 카탈로그 아이템 내용 시작

    .catalogue-item-content {
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-end;
        height: 100%;
    }

    .catalogue-item-title {
        margin-block-end: .5rem;
        font-family: var(--ff-serif-en);
        font-size: var(--fnt-title-md);
        line-height: 1.2;
        text-shadow: 0 0 .25rem rgba(var(--clr-black), .3);
    }

    .catalogue-item-ingredients {
        opacity: .5;
    }

    .catalogue-item-description {
        flex: 0;
        margin-block-start: 0;
        margin-block-end: 0;
        font-weight: 500;
        line-height: 1.6;
        opacity: 0;
        transition: flex .3s, margin-block-start .3s, margin-block-end .3s, opacity .3s;
        overflow: auto;
    }

    .catalogue-item-label {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-block-start: 1rem;
        transition: margin-block-start .5s;
    }

    .catalogue-item-pricetag {
        font-size: 1.2rem;
        font-weight: 900;

        &::after {
            content: ' $';
        }
    }

    .catalogue-item-starpoint {
        display: flex;
        position: relative;
    }

    .starpoint-mask {
        width: 1.2rem;
        height: 1.2rem;
    }

    .star-shape {
        fill: rgb(108, 108, 146);

        &.filled {
            fill: rgb(238, 255, 0);
        }
    }

    // 카탈로그 아이템 내용 끝

    // 미디어 쿼리 시작

    @media screen and (width <= 720px) and (orientation: landscape) {
        .catalogue-slide {
            aspect-ratio: 2 / 1;
        }
    }

    // 미디어 쿼리 끝
</style> <!-- Stylesheet Ends -->