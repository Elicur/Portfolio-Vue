<template>
    <section class="py-20">
        <div class="mx-auto max-w-5xl px-8 md:px-10">

            <div class="flex items-end justify-between mb-10">
                <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                    {{ t('projects.title') }}
                </h2>

            </div>

            <!-- Wrapper (sin overflow-hidden) -->
            <div class="relative">

                <!-- Desktop arrows -->
                <div class="hidden md:flex">
                    <button
                    @click="prev"
                    class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2
                            h-11 w-11 rounded-full
                            border border-slate-200/60 dark:border-slate-800
                            bg-white/90 dark:bg-slate-950/80
                            text-slate-900 dark:text-slate-100
                            hover:bg-white dark:hover:bg-slate-900
                            transition z-30 shadow-md"
                    aria-label="Previous project"
                    >
                    ←
                    </button>

                    <button
                    @click="next"
                    class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2
                            h-11 w-11 rounded-full
                            border border-slate-200/60 dark:border-slate-800
                            bg-white/90 dark:bg-slate-950/80
                            text-slate-900 dark:text-slate-100
                            hover:bg-white dark:hover:bg-slate-900
                            transition z-30 shadow-md"
                    aria-label="Next project"
                    >
                    →
                    </button>
                </div>


                <!-- Card -->
                <div
                    class="relative rounded-2xl border border-slate-200/60 dark:border-slate-800
                        bg-slate-50/80 dark:bg-slate-900/60 overflow-hidden"
                    tabindex="0"
                    @keydown.left.prevent="prev"
                    @keydown.right.prevent="next">
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 items-stretch">

                        <!-- Image -->
                        <div class="relative aspect-[16/10] overflow-hidden bg-slate-200/40 dark:bg-white/5 group">
                            <!-- Fondo blur -->
                            <img
                                :src="currentImage"
                                :alt="current.title"
                                class="absolute inset-0 h-full w-full object-cover blur-2xl scale-110 opacity-30"
                                aria-hidden="true"
                            />

                            <!-- Imagen principal -->
                            <img
                                :src="currentImage"
                                :alt="current.title"
                                class="relative z-10 h-full w-full object-contain p-6 
                                    transition-transform duration-300 ease-out group-hover:scale-105"
                                loading="lazy"
                            />
                        </div>


                        <!-- Content -->
                        <div class="p-6 md:p-8 flex flex-col h-full">
                            <!-- Mobile arrows -->
                            <div class="md:hidden flex justify-between mb-4">
                                <button
                                    @click="prev"
                                    class="h-9 w-9 rounded-lg border border-slate-200/60 dark:border-slate-800
                                        bg-white/70 dark:bg-slate-950/60
                                        text-slate-900 dark:text-slate-100
                                        hover:bg-white dark:hover:bg-slate-900 transition"
                                    aria-label="Previous project"
                                >
                                    ←
                                </button>

                                <button
                                    @click="next"
                                    class="h-9 w-9 rounded-lg border border-slate-200/60 dark:border-slate-800
                                        bg-white/70 dark:bg-slate-950/60
                                        text-slate-900 dark:text-slate-100
                                        hover:bg-white dark:hover:bg-slate-900 transition"
                                    aria-label="Next project"
                                >
                                    →
                                </button>
                            </div>

                            <h3 class="text-xl md:text-2xl font-semibold text-slate-900 dark:text-slate-100">
                                {{ current.title }}
                            </h3>

                            <p class="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                                {{ current.description }}
                            </p>

                            <div class="mt-5 flex flex-wrap gap-2">
                                <div
                                    v-for="tag in current.tech"
                                    :key="tag"
                                    :class="[
                                        'inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium transition',
                                        'text-slate-700 dark:text-slate-200',
                                        techStyles[tag] ?? 'bg-slate-100/80 border-slate-200/60 dark:bg-slate-800/70 dark:border-slate-700',
                                    ]">
                                    <img
                                        v-if="techIcons[tag]"
                                        :src="techIcons[tag]"
                                        :alt="tag"
                                        class="h-4 w-4 shrink-0"/>
                                    <span>{{ tag }}</span>
                                </div>
                            </div>


                            <div class="mt-7">
                                <a
                                    v-if="current.githubUrl"
                                    :href="current.githubUrl"
                                    target="_blank"
                                    rel="noreferrer"
                                    class="inline-flex items-center gap-2 rounded-xl border border-slate-200/60 dark:border-slate-800
                                        bg-white/70 dark:bg-slate-950/60
                                        px-4 py-2 text-sm font-semibold text-slate-900 dark:text-slate-100
                                        hover:bg-white dark:hover:bg-slate-900 transition">
                                    {{ t('projects.github') }}
                                    ↗
                                </a>
                            </div>

                            <!-- Dots -->
                            <div class="mt-6 flex justify-center md:justify-start gap-2">
                                <button
                                    v-for="(_, i) in projects"
                                    :key="i"
                                    class="h-2.5 w-2.5 rounded-full transition"
                                    :class="i === index ? 'bg-secondary/90' : 'bg-slate-400/40 dark:bg-white/20'"
                                    @click="goTo(i)"
                                    :aria-label="`Go to project ${i + 1}`" />
                            </div>

                        </div>
                    </div>                

                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { computed, ref, watch } from 'vue'
    import { useI18n } from 'vue-i18n'

    import spiImg from '@/assets/projects/spi.jpg'
    import trucoImg from '@/assets/projects/tm2.jpg'

    const { t, tm, locale } = useI18n()

    const imageMap = {
        SPI: spiImg,
        'truco-masters': trucoImg,
    }

    const projects = computed(() => {
        const items = tm('projects.items')
        return Array.isArray(items) ? items : []
    })

    const index = ref(0)

    const clampIndex = () => {
        const n = projects.value.length
        index.value = n === 0 ? 0 : ((index.value % n) + n) % n
    }

    watch(projects, clampIndex)
    watch(locale, clampIndex)

    const current = computed(() => projects.value[index.value] || {})
    const currentImage = computed(() => imageMap[current.value.image] || '')

    const next = () => { index.value++; clampIndex() }
    const prev = () => { index.value--; clampIndex() }
    const goTo = (i) => { index.value = i; clampIndex() }

    const techIcons = {
        React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        Django: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
        PostgreSQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        Docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
        Kotlin: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
        'Android Studio': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg',
    }

    const techStyles = {
        React: 'bg-sky-500/10 border-sky-500/20 dark:bg-sky-400/10 dark:border-sky-400/20',
        Python: 'bg-yellow-500/10 border-yellow-500/20 dark:bg-yellow-400/10 dark:border-yellow-400/20',
        Django: 'bg-emerald-500/15 border-emerald-500/25 dark:bg-emerald-400/25 dark:border-emerald-400/25',
        PostgreSQL: 'bg-blue-500/10 border-blue-500/20 dark:bg-blue-400/10 dark:border-blue-400/20',
        Docker: 'bg-cyan-500/10 border-cyan-500/20 dark:bg-cyan-400/10 dark:border-cyan-400/20',
        'Tailwind CSS': 'bg-teal-500/10 border-teal-500/20 dark:bg-teal-400/10 dark:border-teal-400/20',
        Kotlin: 'bg-violet-500/10 border-violet-500/20 dark:bg-violet-400/10 dark:border-violet-400/20',
        'Android Studio': 'bg-green-500/10 border-green-500/20 dark:bg-green-400/10 dark:border-green-400/20',
    }

</script>
