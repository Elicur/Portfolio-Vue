<template>
    <header class="sticky top-3 z-50">
        <div class="mx-auto max-w-6xl px-4 sm:px-6">
            <div class="flex items-center justify-between rounded-2xl border border-border/70 bg-surface/70 px-4 py-3 backdrop-blur
                        dark:border-slate-800 dark:bg-slate-950/60">

                <!-- Brand -->
                <a href="#top" class="flex items-center gap-2 font-semibold tracking-tight">
                <span class="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    E
                </span>
                <span class="text-lg">Elías</span>
                </a>

                <!-- Desktop nav -->
                <nav class="hidden items-center gap-1 md:flex">
                <a
                    v-for="item in Menu"
                    :key="item.name"
                    :href="item.href"
                    @click.prevent="scrollToSection(item.href)"
                    class="rounded-xl px-3 py-2 text-sm font-medium text-muted hover:bg-slate-100 hover:text-text
                        dark:text-slate-300 dark:hover:bg-slate-900/60 dark:hover:text-white"
                >
                    {{ item.name }}
                </a>
                </nav>

                <!-- Actions -->
                <div class="flex items-center gap-2">

                    <button
                        @click="toggleLang"
                        class="text-sm font-medium text-muted hover:text-text"
                        >
                        {{ locale === 'es' ? 'EN' : 'ES' }}
                    </button>

                <!-- Dark toggle -->
                <button
                    type="button"
                    @click="toggleDarkMode"
                    class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-surface
                        text-muted hover:text-text hover:shadow-sm
                        dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 dark:hover:text-white"
                    aria-label="Toggle dark mode"
                >
                    <Icon v-if="!isDarkMode" icon="line-md:moon-filled" class="text-2xl" />
                    <Icon v-else icon="line-md:sunny-outline" class="text-2xl" />
                </button>

                <!-- Mobile menu button -->
                <button
                    type="button"
                    class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-surface
                        text-muted hover:text-text hover:shadow-sm
                        dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 dark:hover:text-white md:hidden"
                    @click="isMenuOpen = !isMenuOpen"
                    aria-label="Toggle menu"
                >
                    <Icon v-if="isMenuOpen" icon="material-symbols:close" class="text-3xl" />
                    <Icon v-else icon="material-symbols:menu" class="text-3xl" />
                </button>
                </div>
            </div>

            <!-- Mobile panel -->
            <div v-if="isMenuOpen" class="md:hidden">
                <div
                class="mt-2 rounded-2xl border border-border/70 bg-surface/90 p-2 shadow-sm backdrop-blur
                        dark:border-slate-800 dark:bg-slate-950/80"
                >
                <a
                    v-for="item in Menu"
                    :key="item.name"
                    :href="item.href"
                    @click.prevent="scrollToSection(item.href)"
                    class="block rounded-xl px-3 py-3 text-sm font-medium text-muted hover:bg-slate-100 hover:text-text
                        dark:text-slate-300 dark:hover:bg-slate-900/60 dark:hover:text-white"
                >
                    {{ item.name }}
                </a>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
    import { ref } from 'vue'
    import { Icon } from '@iconify/vue'
    import { useI18n } from 'vue-i18n'

    const { locale } = useI18n()
    const isMenuOpen = ref(false)

    const toggleLang = () => {
        locale.value = locale.value === 'es' ? 'en' : 'es'
    }

    const Menu = ref([
        { name: 'Services', href: '#services' },
        { name: 'Skills', href: '#skills' },
        { name: 'Why me', href: '#whyme' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ])

    const scrollToSection = (href) => {
    isMenuOpen.value = false
    const section = document.querySelector(href)
    if (section) section.scrollIntoView({ behavior: 'smooth' })
    }

    // Dark mode state
    const isDarkMode = ref(localStorage.getItem('theme') === 'dark')

    const toggleDarkMode = () => {
    const html = document.documentElement
    if (isDarkMode.value) {
        html.classList.remove('dark')
        localStorage.setItem('theme', 'light')
    } else {
        html.classList.add('dark')
        localStorage.setItem('theme', 'dark')
    }
    isDarkMode.value = !isDarkMode.value
    }
</script>
