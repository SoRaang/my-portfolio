<template>
    <div id="mainTestimonials">
        <div class="minimum-container">
            <MainTitleElement>
                <template v-slot:breakableString>testimonials</template>

                <template v-slot:catchyString>
                    What our clients<br>
                    say about us
                </template>
            </MainTitleElement>
        </div>

        <div id="mainTestimonialSlider" class="main-section-container">
            <Splide class="testimonial-sliders" :options="testimonialSliderParams" aria-label="Testimonials - 1">
                <MainTestimonyElement></MainTestimonyElement>
                <MainTestimonyElement></MainTestimonyElement>
                <MainTestimonyElement></MainTestimonyElement>
                <MainTestimonyElement></MainTestimonyElement>
            </Splide>

            <Splide class="testimonial-sliders" :options="secondOption" aria-label="Testimonials - 2">
                <MainTestimonyElement></MainTestimonyElement>
                <MainTestimonyElement></MainTestimonyElement>
                <MainTestimonyElement></MainTestimonyElement>
                <MainTestimonyElement></MainTestimonyElement>
            </Splide>
        </div> <!-- #mainTestimonialSlider -->

        <button type="button" id="btnViewAllTestimonies">
            <span>V</span>
            <span>I</span>
            <span>E</span>
            <span>W</span>
            <span></span>
            <span>A</span>
            <span>L</span>
            <span>L</span>
        </button> <!-- #btnViewAllTestimonies -->
    </div> <!-- #mainTestimony -->
</template> <!-- Template Ends -->

<script setup>
    import MainTitleElement from '@/components/Main/elements/MainTitleElement.vue'
    import MainTestimonyElement from '@/components/Main/elements/MainTestimonialElement.vue'
    import '@splidejs/vue-splide/css'

    const testimonialSliderParams = {
        type: 'loop',
        perPage: 4,
        perMove: 1,
        speed: 60000,
        autoplay: true,
        interval: 1,
        pauseOnHover: true,
        pauseOnFocus: true,
        autoWidth: true,
        gap: '2rem',
        arrows: false,
        pagination: false,
        drag: false,
        easing: 'linear',
    }

    const secondOption = { ... testimonialSliderParams, ... { direction: 'rtl' } }
</script> <!-- Logic Ends -->

<style lang="scss">
    // 메인 사용후기 슬라이더 시작

    #mainTestimonialSlider {
        display: flex;
        flex-flow: column nowrap;
        gap: 2rem;
        position: relative;

        &::after {
            display: block;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 13rem;
            background-image: linear-gradient(to top, rgb(var(--clr-background)), transparent);
            pointer-events: none;
            content: '';
        }
    }

    // 메인 사용후기 슬라이더 끝

    // 사용후기 더 보기 버튼 시작

    #btnViewAllTestimonies {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .25rem;
        margin-block-start: 2.5rem;
        margin-inline: auto;
        width: 14rem;
        height: 3.6rem;
        border-radius: 500px;
        background-color: rgb(var(--clr-theme));
        color: rgb(var(--clr-text-on-tint));
        font-weight: 900;
    }

    // 사용후기 더 보기 버튼 끝
</style> <!-- Stylesheet Ends -->