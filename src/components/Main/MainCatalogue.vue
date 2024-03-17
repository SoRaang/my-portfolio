<template>
    <div id="mainCatalogue">
        <div class="minimum-container">
            <MainTitleElement>
                <template v-slot:breakableString>catalogue</template>

                <template v-slot:catchyString>
                    We got everything best<br>
                    suits your needs
                </template>
            </MainTitleElement>
        </div>

        <div id="mainCatalogueTabs">
            <div class="catalogue-tab-container minimum-container">
                <CatalogueTabButton v-for="tabItem in catalogueCategory">
                    <template v-slot:tabLabel>
                        {{ tabItem.name }}
                    </template>

                    <template v-slot:tabItemCount>
                        {{ tabItem.items }}
                    </template>
                </CatalogueTabButton>
            </div>
        </div> <!-- #mainCatalogueTabs -->

        <div id="mainCatalogueSlider" class="main-section-container">
            <swiper-container id="catalogueSlider" v-bind="catalogueSliderParams">
                <MainCatalogueElement v-for="slide in prodList" :key="slide.itemCategory" :starPoint="slide.itemPoint">
                    <template v-slot:catalogueSliderImage>
                        <img :src="slide.itemImage[0]" alt="">
                    </template>

                    <template v-slot:itemTitle>
                        {{ slide.itemTitle ? slide.itemTitle : 'Untitled Product' }}
                    </template>

                    <template v-slot:itemIngredients>
                        <span v-for="material in slide.itemMaterial">
                            {{ material }},
                        </span>
                    </template>

                    <template v-slot:itemDescription>
                        {{ slide.itemDescription ? slide.itemDescription : 'No Description.' }}
                    </template>

                    <template v-slot:itemPrice>
                        {{ slide.itemPrice.toFixed(2) }}
                    </template>
                </MainCatalogueElement>
            </swiper-container>

            <div class="catalogue-nav-container minimum-container">
                <button type="button" class="catalogue-nav-button-prev" title="슬라이드 이전">
                    <span class="a11y-label">이전</span>
                </button>

                <div class="catalogue-nav-scrollbar"></div>

                <button type="button" class="catalogue-nav-button-next" title="슬라이드 다음">
                    <span class="a11y-label">다음</span>
                </button>
            </div>
        </div> <!-- #mainCatalogueSlider -->
    </div> <!-- #mainCatalogue -->
</template> <!-- Template Ends -->

<script setup>
    import { useProductStore } from '@/stores/productStore'
    import MainTitleElement from '@/components/Main/elements/MainTitleElement.vue'
    import CatalogueTabButton from '@/components/Main/elements/CatalogueTabButton.vue'
    import MainCatalogueElement from '@/components/Main/elements/MainCatalogueElement.vue'

    const prodStore = useProductStore()
    const prodList = prodStore.productData

    const catalogueSliderParams = {
        slidesPerView: 1,
        spaceBetween: 40,
        speed: 500,
        navigation: {
            prevEl: '.catalogue-nav-button-prev',
            nextEl: '.catalogue-nav-button-next',
            disabledClass: 'catalogue-nav-button-disabled'
        },
        scrollbar: {
            el: '.catalogue-nav-scrollbar',
            draggable: true,
            snapOnRelease: true
        },
        breakpoints: {
            720: {
                slidesPerView: 2
            },
            1080: {
                slidesPerView: 3
            },
            1480: {
                slidesPerView: 4
            }
        },
        watchSlidesProgress: true
    }

    const catalogueCategory = ref([
        {
            name: 'handheld',
            items: 6,
            sortValue: 'handheld'
        },
        {
            name: 'table',
            items: 4,
            sortValue: 'chicken'
        },
        {
            name: 'polishing',
            items: 3,
            sortValue: 'pork'
        },
        {
            name: 'auto-edge',
            items: 1,
            sortValue: 'seafood'
        }
    ])

    let totalCount = 0

    catalogueCategory.value.forEach(tabItem => {
        totalCount += tabItem.items
    })

    catalogueCategory.value.unshift({ name: 'all', items: totalCount, sortValue: '' })
</script> <!-- Logic Ends -->

<style lang="scss">
    // 메인 카탈로그 슬라이더 시작

    #catalogueSlider {
        width: min(90rem, 100%);
        overflow: visible;
    }

    #mainCatalogueTabs {
        margin-block-start: 2.5rem;
    }

    .catalogue-tab-container {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .catalogue-nav-container {
        display: flex;
        align-items: center;
        gap: .25rem;
        margin-block-start: 2.5rem;

        --swiper-scrollbar-size: .25rem;
        --swiper-scrollbar-border-radius: 2px;
        --swiper-scrollbar-drag-bg-color: rgba(var(--clr-max), .25);
    }

    .catalogue-nav-button-prev,
    .catalogue-nav-button-next {
        position: relative;
        width: .75rem;
        height: .75rem;

        &::before,
        &::after {
            display: block;
            position: absolute;
            inset: 0;
            margin: auto;
            width: .4rem;
            height: .1rem;
            background-color: rgb(var(--clr-max));
            content: '';
        }
    }

    .catalogue-nav-button-prev {
        &::before,
        &::after {
            transform-origin: center left;
        }

        &::before {
            transform: rotate(45deg);
        }

        &::after {
            transform: rotate(-45deg);
        }
    }

    .catalogue-nav-button-next {
        &::before,
        &::after {
            transform-origin: center right;
        }

        &::before {
            transform: rotate(45deg);
        }

        &::after {
            transform: rotate(-45deg);
        }
    }

    .catalogue-nav-button-disabled {
        opacity: .1;
    }

    .catalogue-nav-scrollbar {
        flex: 1;
        position: relative;
        height: .25rem;
        border-radius: 2px;
        background-color: rgba(var(--clr-min), .3);
    }

    .catalogue-nav-scrollbar-drag {
        height: 100%;
    }

    // 메인 카탈로그 슬라이더 끝

    // 미디어 쿼리 시작



    // 미디어 쿼리 끝
</style> <!-- Stylesheet Ends -->