<template>
	<section id="experience" class="py-24">
		<div class="mx-auto max-w-5xl px-8 md:px-10">

			<!-- Título -->
			<h2 class="mb-10 text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
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
					<div
						v-for="tech in ['Angular', '.NET', 'PostgreSQL']"
						:key="tech"
						:class="[
						'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-medium transition',
						'text-slate-700 dark:text-slate-200',
						techStyles[tech] ?? 'bg-slate-100/80 border-slate-200/60 dark:bg-slate-800/70 dark:border-slate-700',
						]">
						<img
							v-if="techIcons[tech]"
							:src="techIcons[tech]"
							:alt="tech"
							class="h-3.5 w-3.5 shrink-0"/>
						<span>{{ tech }}</span>
					</div>
				</div>

			</div>

		</div>
	</section>
</template>

<script setup>
	import { useI18n } from 'vue-i18n'
	const { t } = useI18n()

	const techIcons = {
		Angular: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
		'.NET': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
		PostgreSQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
	}

	const techStyles = {
		Angular: 'bg-red-500/10 border-red-500/20 dark:bg-red-400/10 dark:border-red-400/20',
		'.NET': 'bg-violet-500/10 border-violet-500/20 dark:bg-violet-400/10 dark:border-violet-400/20',
		PostgreSQL: 'bg-blue-500/10 border-blue-500/20 dark:bg-blue-400/10 dark:border-blue-400/20',
	}

</script>
