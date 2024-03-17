<template>
    <div id="prodInfoMain">
        <div id="prodCategoryTabs">
            <ProdSearch />
        </div>

        <div id="prodItemList">
            <div class="sub-page-content" v-if="prodList.length === 0">
                상품이 없습니다.
            </div>

            <div class="sub-page-content" v-else>
                <div class="product-list-grid">
                    <ProdItemElement v-for="product in prodList"
                        :itemID="product.itemID"
                        :itemImage="product.itemImage"
                        :itemTitle="product.itemTitle"
                        :itemDescription="product.itemDescription"
                        :itemPrice="product.itemPrice"
                    />
                </div>
            </div>
        </div> <!-- #prodItemList -->
    </div> <!-- #prodInfoMain -->
</template> <!-- Template Ends -->

<script setup>
    import { useProductStore } from '@/stores/productStore'
    import ProdSearch from '@/components/ProdInfo/elements/ProdSearch.vue'
    import ProdItemElement from '@/components/ProdInfo/elements/ProdItemElement.vue'

    const prodStore = useProductStore()
    const prodList = prodStore.toList
</script> <!-- Logic Ends -->

<style lang="scss">
    #prodInfoMain {
        display: flex;
        flex-flow: column nowrap;
        gap: 1rem;
    }

    .product-list-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
        column-gap: 2rem;
        row-gap: 4rem;
    }
</style> <!-- Stylesheet Ends -->