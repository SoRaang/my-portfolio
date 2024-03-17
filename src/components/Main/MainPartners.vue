<template>
    <div id="mainPartners">
        <div class="minimum-container">
            <MainTitleElement>
                <template v-slot:breakableString>our partners</template>

                <template v-slot:catchyString>
                    Grow your business<br>
                    as a KDT partner
                </template>
            </MainTitleElement>
        </div>

        <div id="mainPartnersSlider" class="main-section-container">
            (Company Banner)
        </div> <!-- #mainPartnersSlider -->
    </div> <!-- #mainPartners -->
</template> <!-- Template Ends -->

<script setup>
    import MainTitleElement from '@/components/Main/elements/MainTitleElement.vue'
</script> <!-- Logic Ends -->

<style lang="scss">

</style> <!-- Stylesheet Ends -->