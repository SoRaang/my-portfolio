<template>
    <article id="productItemDetails">
        <section id="productItemHeader">
            <div class="product-item-image">
                <img :src="detailData.itemImage" alt="">
            </div>

            <dl class="product-item-description">
                <dd class="product-item-summary">
                    <p>{{ detailData.itemDescription ? detailData.itemDescription : 'No Description.' }}</p>
                </dd>

                <dt class="product-item-name">
                    <h2>{{ detailData.itemTitle ? detailData.itemTitle : 'Untitled Product' }}</h2>
                </dt>

                <dd class="product-item-price">
                    <p v-if="detailData.itemOnSale">
                        {{ detailData.itemSalePercentage * 100 }} %
                        {{ detailData.itemSalePrice }}
                    </p>

                    <p v-else>
                        {{ detailData.itemPrice }}
                    </p>
                </dd>

                <dd class="product-item-shipping">
                    {{ new Date(detailData.dateCreated).toLocaleDateString('en-US') }}
                </dd>

                <dd class="product-item-control">
                    <button type="button">
                        <span>Find Dealer</span>
                    </button>
                </dd>
            </dl>
        </section> <!-- #productItemHeader -->

        <section id="productItemSimilar">
            관련상품
        </section> <!-- #productItemSimilar -->

        <nav id="productItemContentTab">
            <button type="button" class="product-item-tab-button">
                <span>Details</span>
            </button>

            <button type="button" class="product-item-tab-button">
                <span>Information</span>
            </button>

            <button type="button" class="product-item-tab-button">
                <span>Reviews</span>
            </button>

            <button type="button" class="product-item-tab-button">
                <span>Q&A</span>
            </button>
        </nav> <!-- #productItemContentTab -->

        <section id="productItemBody">
            <div class="product-item-tab product-item-details" ref="tabDetails">
                <h4 class="product-item-tab-title">
                    Details
                </h4>

                <div class="product-item-tab-container" v-html="detailData.itemDetailContent.fullHTML"></div>
            </div>

            <div class="product-item-tab product-item-info" ref="tabInfo">
                <h4 class="product-item-tab-title">
                    Product Information
                </h4>

                <div class="product-item-tab-container">
                    상품 정보 테이블
                    <table class="product-item-info-table">
                        <tr class="product-item-info-table-row">
                            <th class="product-item-info-table-header">123</th>
                            <td class="product-item-info-table-cell">123</td>
                        </tr>
                    </table>
                </div>
            </div>

            <div class="product-item-tab product-item-reviews" ref="tabReviews">
                <h4 class="product-item-tab-title">
                    Reviews (0)
                </h4>

                <div class="product-item-tab-container">
                    후기
                </div>
            </div>

            <div class="product-item-tab product-item-qa" ref="tabQA">
                <h4 class="product-item-tab-title">
                    Q&A (0)
                </h4>

                <div class="product-item-tab-container">
                    문의사항
                </div>
            </div>
        </section> <!-- #productItemBody -->

        <section id="productItemFooter">
            배송, 환불 및 교환 정보
        </section> <!-- #productItemFooter -->
    </article> <!-- #productItemDetails -->
</template> <!-- Template Ends -->

<script setup>
    import { useRoute } from 'vue-router'
    import { useProductStore } from '@/stores/productStore'

    const route = useRoute()
    const prodStore = useProductStore()
    const currentItem = parseInt(route.params.itemID)
    const detailData = prodStore.productData.find(data => data.itemID === currentItem)

    const tabDetails = ref(null)
    const tabInfo = ref(null)
    const tabReviews = ref(null)
    const tabQA = ref(null)
    const tabsArray = [ tabDetails, tabInfo, tabReviews, tabQA ]
</script> <!-- Logic Ends -->

<style lang="scss">
    // 상품 상세 페이지 컬럼 시작

    #productItemDetails {
        display: flex;
        flex-flow: column nowrap;
        gap: 2rem;
    }

    // 상품 상세 페이지 컬럼 끝

    // 상품 상세 페이지 헤더 시작

    #productItemHeader {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(15rem, 100%), 1fr));
        gap: 2rem;
    }

    .product-item-image {
        > img {
            width: 100%;
            aspect-ratio: 4 / 3;
            object-fit: contain;
            background-color: rgb(var(--clr-black));
        }
    }

    .product-item-description {
        display: flex;
        flex-flow: column nowrap;
        gap: 1rem;
    }

    .product-item-shipping {
        padding: 1rem;
        border: .5px solid rgba(var(--clr-max), .1);
    }

    .product-item-control {
        margin-block-start: auto;
    }

    // 상품 상세 페이지 헤더 끝

    // 상품 상세 페이지 탭 시작

    #productItemContentTab {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: .05rem;
        border-block-end: .5px solid rgba(var(--clr-max), .1);
    }

    .product-item-tab-button {
        display: block;
        padding-block: 1rem;
        border-block-end: .1rem solid transparent;

        &.current {
            border-block-end-color: rgb(var(--clr-theme));
            font-weight: 900;
        }
    }

    .product-item-tab {
        & + & {
            margin-block-start: 2rem;
        }
    }

    .product-item-tab-title {
        margin-block-end: 1rem;
    }

    .product-item-tab-container {

    }

    // 상품 상세 페이지 탭 끝
</style> <!-- Stylesheet Ends -->