<template>
    <SplideSlide class="testimony-item">
        <img src="https://picsum.photos/260/260" alt="" class="testimony-image">

        <div class="testimony-overlay">
            <div class="testimony-picture" style="--testimony-user-picture: url(https://picsum.photos/36/36)"></div>

            <dl class="testimony-content">
                <dt>Customer</dt>
                <dd>
                    I'm satisfied
                </dd>
            </dl>
        </div>
    </SplideSlide>
</template> <!-- Template Ends -->

<script setup>

</script> <!-- Logic Ends -->

<style lang="scss">
    // 메인 사용후기 아이템 시작

    .testimony-item {
        position: relative;
        width: 13rem;
        height: 13rem;
        background-color: rgb(var(--clr-black));

        &:hover {
            > .testimony-image {
                mix-blend-mode: normal;
                opacity: 1;
            }
        }
    }

    .testimony-image {
        position: absolute;
        inset: 0;
        mix-blend-mode: luminosity;
        opacity: .75;
        transition: mix-blend-mode .3s, opacity .3s;
    }

    .testimony-overlay {
        display: flex;
        gap: .5rem;
        padding: 1rem;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to bottom, rgba(var(--clr-black), .75), rgba(var(--clr-black), .5) 50%);
        text-align: start;
        transition: opacity .3s;
        direction: ltr;
        isolation: isolate;
    }

    .testimony-picture {
        flex: 0;
        flex-basis: 1.8rem;
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 500px;
        background: {
            color: rgb(var(--clr-black));
            image: var(--testimony-user-picture);
            repeat: no-repeat;
            position: center;
            size: 100% 100%;
        }
        box-shadow: 0 .15rem .25rem rgba(var(--clr-black), .15);
    }

    .testimony-content {
        flex: 1;
        color: rgb(var(--clr-white));
        text-shadow: .05rem .05rem 0 rgba(var(--clr-black), .5);

        > dt {
            margin-block-end: .25rem;
            font-weight: 100;
            opacity: .5;
        }

        > dd {
            line-height: 1.4;

            &::before,
            &::after {
                content: '"';
            }
        }
    }

    // 메인 사용후기 아이템 끝
</style> <!-- Stylesheet Ends -->