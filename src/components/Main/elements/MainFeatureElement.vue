<template>
    <div class="feature-item">
        <div class="feature-title">
            <div class="feature-icon">
                <slot name="featureIcon">
                    temp icon
                </slot>
            </div>

            <p class="feature-name">
                <slot name="featureName">
                    temp name
                </slot>
            </p>
        </div>

        <div class="feature-content">
            <slot name="featureContent">
                temp content
            </slot>
        </div>
    </div>
</template> <!-- Template Ends -->

<script setup>

</script> <!-- Logic Ends -->

<style lang="scss">
    // 메인 특징 아이템 시작

    .feature-item {
        display: flex;
        flex-flow: column nowrap;
        gap: 1.5rem;
        padding: 1.5rem;
        border: .5px solid rgba(var(--clr-max), .1);
        background-color: rgba(var(--clr-max), .02);
        backdrop-filter: blur(1.5rem);
        font-weight: 100;
    }

    .feature-title {
        display: flex;
        align-items: center;
        gap: .75rem;
    }

    .feature-icon-image {
        width: 2.4rem;
        height: 2.4rem;
        filter: drop-shadow(0, .25rem, .5rem, rgba(var(--clr-min), .15));
    }

    .feature-name {
        font-size: 1.2rem;
    }

    .feature-content {
        line-height: 1.4;
        opacity: .5;
    }

    // 메인 특징 아이템 끝
</style> <!-- Stylesheet Ends -->