<template>
    <div class="product-item">
        <div class="product-image-container">
            <a :href="'products/details/' + itemID">
                <img class="product-image" :src="itemImage ? itemImage[0] : 'https://picsum.photos/360/450'" alt="">
            </a>
        </div>

        <dl class="product-details">
            <dt class="product-titles">
                <h5 class="product-name">
                    <a :href="'products/details/' + itemID" :title="itemTitle">
                        {{ itemTitle ? itemTitle : 'Untitled Product' }}
                    </a>
                </h5>
            </dt>

            <dd class="product-descriptions">
                <a :href="'products/details/' + itemID">
                    {{ itemDescription ? itemDescription : 'No Description.' }}
                </a>
            </dd>

            <dd class="product-pricetag">
                From ${{ itemPrice.toFixed(2) }}
            </dd>
        </dl>
    </div>
</template> <!-- Template Ends -->

<script setup>
    defineProps({
        itemID: Number,
        itemImage: Array,
        itemTitle: String,
        itemDescription: String,
        itemPrice: Number
    })
</script> <!-- Logic Ends -->

<style lang="scss">
    // 상품 아이템 시작

    .product-item {
        display: flex;
        flex-flow: column nowrap;
        gap: 1rem;
    }

    .product-image-container {
        position: relative;
        aspect-ratio: 1 / 1;
    }

    .product-image {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
    }

    .product-details {
        display: flex;
        flex-flow: column nowrap;
        gap: .5rem;
    }

    .product-titles {
        font-size: var(--fnt-title-sm);
    }

    .product-descriptions {
        opacity: .5;
    }

    .product-pricetag {

    }

    // 상품 아이템 끝
</style> <!-- Stylesheet Ends -->