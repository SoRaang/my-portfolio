<template>
    <div id="mainFeatures">
        <div class="minimum-container">
            <MainTitleElement>
                <template v-slot:breakableString>features</template>

                <template v-slot:catchyString>
                    Here's why<br>
                    You shouldn't have to hesitate
                </template>
            </MainTitleElement>
        </div>

        <div class="minimum-container">
            <div id="mainFeaturesGrid" class="main-section-container">
                <MainFeatureElement v-for="feature in serviceFeatures">
                    <template v-slot:featureIcon>
                        <img class="feature-icon-image" :src="feature.icon" alt="">
                    </template>

                    <template v-slot:featureName>
                        {{ feature.name }}
                    </template>

                    <template v-slot:featureContent>
                        {{ feature.content }}
                    </template>
                </MainFeatureElement>
            </div> <!-- #mainFeaturesGrid -->
        </div>
    </div> <!-- #mainFeatures -->
</template> <!-- Template Ends -->

<script setup>
    import MainTitleElement from '@/components/Main/elements/MainTitleElement.vue'
    import MainFeatureElement from '@/components/Main/elements/MainFeatureElement.vue'

    const serviceFeatures = ref([
        {
            icon: '/images/feature-icon-01.png',
            name: 'Efficiency',
            content: `Fastfood is fast, so you can do your things more quickly.`
        },
        {
            icon: '/images/feature-icon-02.png',
            name: 'Documents',
            content: `Read or die. It's not a threat. This is real. You have to read it.`
        },
        {
            icon: '/images/feature-icon-03.png',
            name: 'YouTube',
            content: `YouTube is most popular media platform in the world. That's why I mention YouTube.`
        },
        {
            icon: '/images/feature-icon-04.png',
            name: 'Award-winning',
            content: `If there's any kind of burger competition or something. we'll definitely win.`
        },
        {
            icon: '/images/feature-icon-05.png',
            name: 'Economic',
            content: `Best thing of fastfood is it's cheap. It's cheap as hell. Like, you'll thinking "How that's possible?"`
        },
        {
            icon: '/images/feature-icon-06.png',
            name: 'Conversation',
            content: `You can speak loudly in our restaurants. Nobody touches you.`
        },
    ])
</script> <!-- Logic Ends -->

<style lang="scss">
    // 메인 특징 그리드 시작

    #mainFeaturesGrid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(16rem, auto));
        gap: 2rem;
    }

    // 메인 특징 그리드 끝
</style> <!-- Stylesheet Ends -->