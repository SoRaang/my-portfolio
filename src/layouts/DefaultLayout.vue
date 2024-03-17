<template>
    <div>
        <HeaderPrimary />

        <main id="contentView">
            <slot></slot>
        </main> <!-- #contentView -->

        <FooterPrimary />
    </div>
</template> <!-- Template Ends -->

<script setup>
    import HeaderPrimary from '@/layouts/HeaderPrimary.vue'
    import FooterPrimary from '@/layouts/FooterPrimary.vue'
</script> <!-- Logic Ends -->

<style lang="scss">

</style> <!-- Stylesheet Ends -->