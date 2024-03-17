<template>
    <div class="main-section-title">
        <div class="section-actual-name">
            <p class="name-breaker" ref="slotElement">
                <slot name="breakableString">section title</slot>

                <span v-for="word in splitedString">
                    {{ word }}
                </span>
            </p>
        </div>

        <h2 class="section-catchy-sentence">
            <slot name="catchyString">
                Section catchphrase
            </slot>
        </h2>
    </div>
</template> <!-- Template Ends -->

<script setup>
    import { useSlots } from 'vue'

    const slotA = useSlots().breakableString()[0]
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
    // 메인 섹션 타이틀 시작

    .main-section-title {
        display: flex;
        flex-flow: column nowrap;
        gap: 1.5rem;
    }

    .section-actual-name {
        display: flex;
        align-items: center;
        gap: 1.5rem;
    }

    .name-breaker {
        display: flex;
        gap: .4rem;
        color: rgb(var(--clr-theme));
        font-size: var(--fnt-lg);
        font-weight: 900;
        text-transform: uppercase;

        & + .hf {
            background-color: rgb(var(--clr-theme));
        }
    }

    .section-catchy-sentence {
        font-family: var(--ff-serif-en);
        font-size: var(--fnt-title-md);
        line-height: 1.4;
    }

    // 메인 섹션 타이틀 끝
</style> <!-- Stylesheet Ends -->