<template>
    <header class="fixed left-0 right-0 top-3 z-50 transition-transform duration-300 will-change-transform"
            :class="isVisible ? 'translate-y-0' : '-translate-y-24'">
        
        <div class="mx-auto max-w-5xl px-4 sm:px-6">

            <!-- Single navbar -->
            <div
                class="grid grid-cols-[auto_1fr_auto] items-center gap-3
                    rounded-2xl border border-border/70 bg-surface/70 px-4 py-3 backdrop-blur
                    dark:border-slate-800 dark:bg-slate-950/60"
            >
                <!-- Left: Home icon -->
                <a
                    href="#home"
                    @click.prevent="scrollToSection('#home')"
                    class="inline-flex h-10 w-10 items-center justify-center rounded-xl
                        text-muted hover:text-text hover:bg-slate-100
                        dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-900/60 transition"
                    aria-label="Home"
                >
                    <Icon icon="material-symbols:home-rounded" class="text-2xl" />
                </a>

                <!-- Center: Links (desktop only) -->
                <nav class="hidden md:flex justify-center">
                    <ul class="flex items-center gap-3">
                    <li v-for="item in Menu" :key="item.name">
                        <a
                        :href="item.href"
                        @click.prevent="scrollToSection(item.href)"
                        class="inline-flex h-10 items-center justify-center rounded-xl px-4
                                text-sm font-semibold
                                text-muted hover:text-text hover:bg-slate-100
                                dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-900/60
                                transition"
                        >
                        {{ item.name }}
                        </a>
                    </li>
                    </ul>
                </nav>

                <!-- Right: actions -->
                <div class="flex items-center justify-end gap-2">
                    <!-- Language selector -->
                    <div ref="langRef" class="relative">
                        <button
                            type="button"
                            @click="isLangOpen = !isLangOpen"
                            class="inline-flex h-10 items-center gap-2 rounded-xl
                                border border-border/70 bg-surface px-3
                                text-sm font-semibold text-muted hover:text-text hover:shadow-sm transition
                                dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 dark:hover:text-white"
                            aria-haspopup="listbox"
                            :aria-expanded="isLangOpen">
                            
                                <img
                                    :src="flagByLocale[locale]"
                                    alt=""
                                    class="h-5 w-5 rounded-sm shrink-0"
                                />
                                <span>{{ locale === 'es' ? 'Español' : 'English' }}</span>
                                <Icon
                                icon="material-symbols:keyboard-arrow-down-rounded"
                                class="text-xl opacity-70 transition-transform"
                                :class="isLangOpen && 'rotate-180'"/>
                        </button>

                        <!-- Dropdown -->
                        <div
                            v-if="isLangOpen"
                            class="absolute right-0 mt-2 w-40 rounded-xl
                                border border-border/70 bg-surface/90 p-1 shadow-lg backdrop-blur
                                dark:border-slate-800 dark:bg-slate-950/90 z-50"
                            role="listbox">
                            <button @click="setLang('es')" class="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium
                                        text-muted hover:bg-slate-100 hover:text-text
                                        dark:text-slate-300 dark:hover:bg-slate-900/60 dark:hover:text-white">
                            <img :src="esFlag" alt="" class="h-5 w-5 rounded-sm shrink-0" />
                            Español
                            </button>

                            <button @click="setLang('en')" class="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium
                                        text-muted hover:bg-slate-100 hover:text-text
                                        dark:text-slate-300 dark:hover:bg-slate-900/60 dark:hover:text-white">
                            <img :src="usFlag" alt="" class="h-5 w-5 rounded-sm shrink-0" />
                            English
                            </button>
                        </div>
                    </div>


                    <!-- Dark toggle -->
                    <button
                    type="button"
                    @click="toggleDarkMode"
                    class="inline-flex h-10 w-10 items-center justify-center rounded-xl
                            border border-border/70 bg-surface
                            text-muted hover:text-text hover:shadow-sm transition
                            dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 dark:hover:text-white"
                    aria-label="Toggle dark mode"
                    >
                    <Icon v-if="!isDarkMode" icon="line-md:moon-filled" class="text-2xl" />
                    <Icon v-else icon="line-md:sunny-outline" class="text-2xl" />
                    </button>

                    <!-- Mobile menu -->
                    <button
                    type="button"
                    class="inline-flex h-10 w-10 items-center justify-center rounded-xl
                            border border-border/70 bg-surface
                            text-muted hover:text-text hover:shadow-sm transition
                            dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 dark:hover:text-white md:hidden"
                    @click="isMenuOpen = !isMenuOpen"
                    aria-label="Toggle menu"
                    >
                    <Icon v-if="isMenuOpen" icon="material-symbols:close" class="text-3xl" />
                    <Icon v-else icon="material-symbols:menu" class="text-3xl" />
                    </button>
                </div>
            </div>

            <!-- Mobile panel (igual que ya tenés, solo cambio opcional: añadir idioma aquí también) -->
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
                class="block rounded-xl px-3 py-3 text-sm font-semibold
                        text-muted hover:bg-slate-100 hover:text-text
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
    import { ref, computed, onMounted, onUnmounted } from 'vue'
    import { Icon } from '@iconify/vue'
    import { useI18n } from 'vue-i18n'
    import { onClickOutside } from '@vueuse/core'

    const { t, locale } = useI18n()

    const isMenuOpen = ref(false)
    const isLangOpen = ref(false)
    const langRef = ref(null)

    // Menu con labels desde i18n
    const Menu = computed(() => [
        { name: t('navbar.experience'), href: '#experience' },
        { name: t('navbar.education'), href: '#education' },
        { name: t('navbar.projects'), href: '#projects' },
        { name: t('navbar.skills'), href: '#skills' },
    ])

    const scrollToSection = (href) => {
        isMenuOpen.value = false
        const section = document.querySelector(href)
        if (section) section.scrollIntoView({ behavior: 'smooth' })
    }

    const setLang = (lang) => {
        locale.value = lang
        localStorage.setItem('lang', lang)
        isLangOpen.value = false
    }

    onClickOutside(langRef, () => {
        isLangOpen.value = false
    })

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


const isVisible = ref(true)
let lastScrollY = window.scrollY

const handleScroll = () => {
  const currentScrollY = window.scrollY

  // Mostrar siempre cerca del top
  if (currentScrollY < 50) {
    isVisible.value = true
    lastScrollY = currentScrollY
    return
  }

  // Scroll down → hide
  if (currentScrollY > lastScrollY) {
    isVisible.value = false
  }
  // Scroll up → show
  else {
    isVisible.value = true
  }

  lastScrollY = currentScrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

import esFlag from '@/assets/flags/es.svg'
import usFlag from '@/assets/flags/us.svg'

const flagByLocale = {
    es: esFlag,
    en: usFlag,
}

</script>

