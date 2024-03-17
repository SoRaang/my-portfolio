<template>
    <button class="catalogue-tab-button" @click="changeTab">
        <p class="catalogue-tab-label" ref="slotElement">
            <slot name="tabLabel"></slot>
        </p>

        <span class="catalogue-tab-itemcount">
            <slot name="tabItemCount"></slot>
        </span>
    </button>
</template> <!-- Template Ends -->

<script setup>
    import { useSlots } from 'vue'

    const slotA = useSlots().tabLabel()[0]
    const originString = slotA.children
    const splitedString = ref([ ... originString])
    const slotElement = ref(null)

    onMounted(() => {
        slotElement.value.innerHTML = ''

        for (let i = 0; i < splitedString.value.length; i ++) {
            const word = splitedString.value[i]
            const wordToSpan = document.createElement('span')

            wordToSpan.innerHTML = word
            slotElement.value.appendChild(wordToSpan)
        }
    })
</script> <!-- Logic Ends -->

<style lang="scss">
    // 메인 카탈로그 탭 버튼 시작

    .catalogue-tab-button {
        display: flex;
        align-items: center;
        gap: .5rem;
        padding: .75rem;
        border-radius: .25rem;

        &.current-tab {
            background-color: rgba(var(--clr-max), .15)
        }
    }

    .catalogue-tab-label {
        display: flex;
        gap: .25rem;
        font-weight: 900;
        text-transform: uppercase;
    }

    .catalogue-tab-itemcount {
        font-weight: 100;
        opacity: .5;

        &::before {
            content: '( ';
        }

        &::after {
            content: ' )';
        }
    }

    // 메인 카탈로그 탭 버튼 끝

    // 미디어 쿼리 시작



    // 미디어 쿼리 끝
</style> <!-- Stylesheet Ends -->