<template>
    <div class="sub-page-wrapper">
        <div class="sub-page-hero">
            <div class="sub-page-header-image">
                <img :src="'/images/' + $route.meta.heroImage" alt="">
            </div>

            <div class="sub-page-header-overlay reactive-inner">
                <h2 class="sub-page-header-title minimum-container" :data-blend-text="$route.meta.heroTitle">
                    {{ $route.meta.heroTitle }}
                </h2>

                <p class="sub-page-header-text minimum-container" :data-blend-text="$route.meta.heroText">
                    {{ $route.meta.heroText }}
                </p>
            </div>
        </div>

        <div class="sub-page-breadcrumbs reactive-inner">
            <BreadCrumbs />
        </div>

        <div class="sub-page-container reactive-inner">
            <div class="minimum-container">
                <slot></slot>
            </div>
        </div>
    </div>
</template> <!-- Template Ends -->

<script setup>
    import BreadCrumbs from '@/components/BreadCrumbs.vue'
</script> <!-- Logic Ends -->

<style lang="scss">

</style> <!-- Stylesheet Ends -->