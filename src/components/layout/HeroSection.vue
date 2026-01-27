<template>
	<section id="home" class="min-h-screen flex items-center pt-14 md:pt-18">
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


				<p class="text-lg text-muted max-w-xl mx-auto lg:mx-0">
					<span class="font-semibold text-slate-700 dark:text-slate-200">
						{{ t('hero.role') }}
					</span>
				
					<i18n-t
						keypath="hero.description"
						tag="span"
						class="text-slate-700 dark:text-slate-300">
						<template #fullstack>
							<span class="font-semibold text-secondary/90">Full Stack</span>
						</template>

						<template #testing>
							<span class="font-semibold text-secondary/90">Testing / QA</span>
						</template>

						<template #infra>
							<span class="font-semibold text-secondary/90">
								{{ locale === 'es' ? 'Infraestructura' : 'Infrastructure' }}
							</span>
						</template>

						<template #os>
							<span class="font-semibold text-secondary/90">
								{{ locale === 'es' ? 'Sistemas Operativos' : 'Operating Systems' }}
							</span>
						</template>
					</i18n-t>
				</p>


				<!-- Actions -->
				<div class="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
				
					<!-- LinkedIn -->
					<a
						href="https://www.linkedin.com/in/el%C3%ADas-bentancur-silvera-7b8937222/"
						target="_blank"
						rel="noopener noreferrer"
						class="group inline-flex h-11 items-center gap-2 rounded-xl
							bg-primary px-5 text-sm font-semibold text-white
							shadow-sm transition
							hover:bg-primary/90 hover:shadow-md">
						<Icon icon="mdi:linkedin" class="text-xl transition-transform group-hover:scale-110" />
						{{ t('hero.linkedin') }}
					</a>

					<!-- Email -->
					<a
						href="mailto:ebentancur19@gmail.com"
						class="group inline-flex h-11 items-center gap-2 rounded-xl
							border border-border/70 bg-surface px-5
							text-sm font-semibold text-text
							transition
							hover:bg-slate-100 hover:shadow-sm
							dark:border-slate-800 dark:bg-slate-950
							dark:text-slate-100 dark:hover:bg-slate-900/60">
						<Icon icon="mdi:email-outline" class="text-xl transition-transform group-hover:scale-110" />
						{{ t('hero.mail') }}
					</a>

					<!-- Download CV -->
					<a
						href="/cv/Elias_Bentancur_CV.pdf"
						download
						class="group inline-flex h-11 items-center gap-2 rounded-xl
							px-5 text-sm font-semibold text-muted
							transition
							hover:bg-slate-100 hover:text-text
							dark:text-slate-300 dark:hover:bg-slate-900/60 dark:hover:text-white">
						<Icon icon="mdi:download" class="text-xl transition-transform group-hover:translate-y-0.5" />
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
			class="flex justify-center lg:justify-end">
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
	const {	locale } = useI18n()
</script>
