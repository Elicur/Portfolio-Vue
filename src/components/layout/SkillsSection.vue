<template>
    <section class="py-20">
        <div class="mx-auto max-w-5xl px-8 md:px-10">
        <h2 class="mb-10 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
            {{ t('skills.title') }}
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
            v-for="key in categoryKeys"
            :key="key"
            class="rounded-2xl border border-border/70 bg-surface/60 p-6
                    dark:border-slate-800 dark:bg-slate-950/60"
            >
                <h3 class="text-base font-semibold text-slate-900 dark:text-slate-100 mb-4">
                    {{ t(`skills.categories.${key}`) }}
                </h3>

                <div class="flex flex-wrap gap-2">
                    <span v-for="item in skillsByCategory(key)" :key="item" class="chip">
                    {{ item }}
                    </span>
                </div>
            </div>
        </div>

        </div>
    </section>
</template>

<script setup>
    import { computed } from 'vue'
    import { useI18n } from 'vue-i18n'

    const { t, tm } = useI18n()

    const categoryKeys = [
        'languages',
        'frameworks',
        'databases',
        'frontend',
        'platforms',
        'versioning',
    ]

    // tm devuelve el mensaje “tipado” (array/obj) en modo i18n composition
    const skillsByCategory = (key) => {
        const items = tm(`skills.items.${key}`)
        return Array.isArray(items) ? items : []
    }
</script>
