<template>
	<section class="min-h-screen flex items-center pt-14 md:pt-18">
		<div class="mx-auto max-w-5xl px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">

			<!-- Texto -->
			<Motion
				is="div"
				:initial="{ opacity: 0, y: 20 }"
				:animate="{ opacity: 1, y: 0 }"
				:transition="{ duration: 0.45, easing: 'ease-out' }"
				class="text-center lg:text-left">
				<h1
					class="text-5xl lg:text-6xl font-semibold tracking-tight mb-6
							text-slate-900 dark:text-slate-100">
					{{ t('hero.title') }}
					<span class="ml-2 font-semibold tracking-tight
								bg-gradient-to-r from-pink-300 via-slate-400 to-purple-500
								bg-clip-text text-transparent">
						{{ t('hero.name') }}
					</span>
				</h1>


				<p class="text-lg text-muted max-w-xl mx-auto lg:mx-0 mb-8">
					<span class="font-semibold text-slate-700 dark:text-slate-200">
						{{ t('hero.role') }}
					</span>
					<span class="text-slate-700 dark:text-slate-300">
						{{ t('hero.description') }}
					</span>
				</p>

				<!-- Buttons -->
				<div class="flex justify-center lg:justify-start gap-4">
				<!-- Primary -->
				<a
					href="#contact"
					class="inline-flex items-center justify-center rounded-xl
						bg-primary px-6 py-3 text-sm font-medium text-white
						hover:bg-primary-700 transition"
				>
					{{ t('hero.contact') }}
				</a>

				<!-- Secondary / Outline -->
				<a
					href="/cv.pdf"
					class="inline-flex items-center justify-center rounded-xl
						border border-border px-6 py-3 text-sm font-medium
						text-text hover:bg-slate-100 transition
						dark:border-slate-800 dark:hover:bg-slate-900"
				>
					{{ t('hero.download') }}
				</a>
				</div>
			</Motion>

			<!-- Imagen -->
			<!-- Columna derecha: IMAGEN ANIMADA -->
			<Motion
			is="aside"
			:initial="{ opacity: 0, scale: 0.96 }"
			:animate="{ opacity: 1, scale: 1 }"
			:transition="{ duration: 0.45, delay: 0.1, easing: 'ease-out' }"
			class="flex justify-center lg:justify-end"
			>
				<HeroImage />
			</Motion>

		</div>
	</section>
</template>

<script setup>
import HeroImage from './HeroImage.vue'
import { Motion } from '@motionone/vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
