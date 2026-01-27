<template>
    <section id="skills" class="py-20">
        <div class="mx-auto max-w-5xl px-8 md:px-10">
            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 mb-10">
                {{ t('skills.title') }}
            </h2>

            <div class="space-y-10">
                <div v-for="cat in categories" :key="cat.key">
                    <!-- Category title -->
                    <h3 class="text-lg md:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
                        {{ t(`skills.categories.${cat.key}`) }}
                    </h3>

                    <!-- Tiles -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
         gap-3 sm:gap-4">
                        <article
                            v-for="name in cat.items"
                            :key="name"
                            class="group rounded-2xl border border-slate-200/60 dark:border-slate-800
                                    bg-white/60 dark:bg-slate-950/40
                                    p-4 md:p-5
                                    flex items-center gap-3
                                    transition
                                    hover:bg-white/80 dark:hover:bg-slate-900/50
                                    hover:border-slate-300 dark:hover:border-slate-700
                                    hover:shadow-sm">
                            <div
                                class="h-11 w-11 rounded-xl border border-slate-200/60 dark:border-slate-800
                                    bg-slate-50/70 dark:bg-slate-900/40
                                    flex items-center justify-center
                                    transition
                                    group-hover:scale-[1.03]">
                                <img
                                    v-if="iconFor(name)"
                                    :src="iconFor(name)"
                                    :alt="name"
                                    class="h-6 w-6"
                                    loading="lazy"/>
                            </div>

                            <p class="text-sm md:text-[15px] font-semibold text-slate-900 dark:text-slate-100 truncate">
                                {{ name }}
                            </p>
                        </article>
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

    const devicon = (path) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`

    // Mapa nombre (i18n) -> icono
    const techIcons = {
        Java: devicon('java/java-original.svg'),
        'C++': devicon('cplusplus/cplusplus-original.svg'),
        'C#': devicon('csharp/csharp-original.svg'),
        JavaScript: devicon('javascript/javascript-original.svg'),
        Python: devicon('python/python-original.svg'),
        PHP: devicon('php/php-original.svg'),
        Kotlin: devicon('kotlin/kotlin-original.svg'),

        Angular: devicon('angularjs/angularjs-original.svg'),
        React: devicon('react/react-original.svg'),
        Vue: devicon('vuejs/vuejs-original.svg'),
        Django: devicon('django/django-plain.svg'),
        'CodeIgniter 4': devicon('codeigniter/codeigniter-plain.svg'),

        PostgreSQL: devicon('postgresql/postgresql-original.svg'),
        MySQL: devicon('mysql/mysql-original.svg'),

        HTML: devicon('html5/html5-original.svg'),
        CSS: devicon('css3/css3-original.svg'),
        Bootstrap: devicon('bootstrap/bootstrap-original.svg'),
        'Tailwind CSS': devicon('tailwindcss/tailwindcss-original.svg'),

        '.NET': devicon('dot-net/dot-net-original.svg'),
        GitHub: devicon('github/github-original.svg'),
    }

    // Devuelve icono si existe, o null si no (fallback)
    const iconFor = (name) => techIcons[name] ?? null

    // Construye categorías usando tu i18n.skills.items
    const categories = computed(() => {
        // tm() devuelve el objeto/array “tipado” (no string)
        const items = tm('skills.items') || {}

        const keysInOrder = [
                'languages',
                'frameworks',
                'databases',
                'frontend',
                'platforms',
                'versioning',
        ]

        return keysInOrder.map((key) => ({
                key,
                items: Array.isArray(items[key]) ? items[key] : [],
        }))
    })
</script>
