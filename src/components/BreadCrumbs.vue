<template>
    <nav id="subPageBreadCrumbs" class="minimum-container">
        <p class="bread-crumbs">
            <router-link to="/" class="bread-crumbs-link">
                <i class="ri-home-4-fill"></i>
            </router-link>
        </p>

        <p v-for="(matched, idx) in $route.matched" :key="idx" class="bread-crumbs">
            <router-link :to="matched.path" class="bread-crumbs-link">
                <span>{{ matched.name }}</span>
            </router-link>
        </p>
    </nav>
</template> <!-- Template Ends -->

<script setup>

</script> <!-- Logic Ends -->

<style lang="scss">
    #subPageBreadCrumbs {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: .5rem;
        padding-block: 1rem;
    }

    .bread-crumbs {
        display: contents;

        & + & {
            &::before {
                display: block;
                width: .5px;
                height: .6rem;
                background-color: rgba(var(--clr-max), .5);
                transform: skewX(-15deg);
                content: '';
            }
        }
    }

    .bread-crumbs-link {
        display: block;
        padding: .5rem;
        border-radius: .25rem;

        &:hover {
            background-color: rgb(var(--clr-theme));
            color: rgb(var(--clr-text-on-tint));
            transition: background-color .15s, color .15s;
        }
    }
</style> <!-- Stylesheet Ends -->