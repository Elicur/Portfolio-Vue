<template>
	<section class="py-24">
		<div class="mx-auto max-w-5xl px-8 md:px-10">

			<!-- Título -->
			<h2 class="mb-12 text-3xl md:text-4xl font-semibold tracking-tight
						text-slate-900 dark:text-slate-100">
				{{ t('experience.title') }}
			</h2>

			<!-- Card experiencia -->
			<div class="rounded-2xl border border-border/70
						bg-surface/60 p-6 md:p-8
						dark:border-slate-800 dark:bg-slate-950/60">
				
				<div class="flex flex-col gap-2 mb-4">
					<h3 class="text-lg font-semibold text-text dark:text-slate-200">
						{{ t('experience.role') }}
						<span class="text-muted font-semibold dark:text-slate-200">
						· {{ t('experience.company') }}
						</span>
					</h3>

					<span class="text-sm text-muted">
						{{ t('experience.period') }}
					</span>
				</div>

				<p class="text-base text-muted leading-relaxed max-w-3xl text-slate-700 dark:text-slate-200">
					{{ t('experience.description') }}
				</p>

				<!-- Tech stack -->
				<div class="mt-6 flex flex-wrap gap-2">
					<span class="badge">Angular</span>
					<span class="badge">.NET</span>
					<span class="badge">PostgreSQL</span>
					<span class="badge">Testing / QA</span>
				</div>
			</div>

		</div>
	</section>
</template>

<script setup>
	import { useI18n } from 'vue-i18n'
	const { t } = useI18n()
</script>
