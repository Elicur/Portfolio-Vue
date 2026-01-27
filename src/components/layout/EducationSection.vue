<template>
	<section class="py-20">
		<div class="mx-auto max-w-5xl px-8 md:px-10">
			<h2 class="mb-10 text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
				{{ t('education.title') }}
			</h2>

			<div class="space-y-5">
				<article
					v-for="(item, idx) in educationItems"
					:key="idx"
					class="rounded-2xl border border-border/60
							bg-slate-50/80 dark:bg-slate-900/60
							dark:border-slate-800
							p-6 md:p-7 transition hover:bg-slate-100 dark:hover:bg-slate-900/80">
					<!-- Period -->
					<div class="mb-4">
						<span class="text-sm md:text-base font-bold text-secondary/90">
						{{ item.period }}
						</span>
					</div>

					<div class="flex items-center gap-4">
						<!-- Logo bubble -->
						<div
							class="h-12 w-12 rounded-full overflow-hidden
									ring-1 ring-border/60 dark:ring-slate-800
									shrink-0">
							
							<img
								v-if="item.logo && logoMap[item.logo]"
								:src="logoMap[item.logo]"
								:alt="item.institution"
								class="h-full w-full object-cover"/>

								<span
									v-else class="flex h-full w-full items-center justify-center
												text-sm font-semibold text-slate-700 dark:text-slate-200">
									{{ logoText(item) }}
								</span>
						</div>

						<!-- Text content -->
						<div class="space-y-1">
							<h3 class="text-base md:text-lg font-semibold text-slate-900 dark:text-slate-100">
								{{ item.degree }}
							</h3>

							<p class="text-sm md:text-base text-slate-700 dark:text-slate-200">
								{{ item.status }}
							</p>

							<p class="text-sm text-muted text-slate-600 dark:text-slate-400">
								{{ item.institution }}
							</p>

						</div>
					</div>
				</article>

			</div>
		</div>
	</section>
</template>

<script setup>
	import { computed } from 'vue'
	import { useI18n } from 'vue-i18n'
	import utecLogo from '@/assets/logos/utec.png'
	import japLogo from '@/assets/logos/jap.png'
	import cambridgeLogo from '@/assets/logos/cambridge.png'

	const { t, tm } = useI18n()

	const educationItems = computed(() => {
		const items = tm('education.items')
		return Array.isArray(items) ? items : []
	})


	const logoMap = {
		UTEC: utecLogo,
		JAP: japLogo,
		CAMBRIDGE: cambridgeLogo,
	}
</script>
