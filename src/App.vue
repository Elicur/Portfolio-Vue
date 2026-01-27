<template>
	<div class="relative min-h-screen text-text bg-bg dark:bg-slate-950 overflow-hidden">

    <!-- Glow (light: casi invisible | dark: sutil) -->
    <div
      class="pointer-events-none absolute -top-48 left-1/2 -translate-x-1/2
             h-[520px] w-[520px] rounded-full
             bg-slate-900/5 dark:bg-primary/10
             blur-[140px]"
    ></div>

		<Navbar />
		<HeroSection />
		<ExperienceSection />
		<EducationSection />
		<ProjectsSection />
		<SkillsSection />
	</div>
</template>

<script setup>
	import { defineAsyncComponent } from 'vue';
	const Navbar = defineAsyncComponent(() => import('./components/layout/Navbar.vue'));
	const HeroSection = defineAsyncComponent(() => import('./components/layout/HeroSection.vue'));
	const ExperienceSection = defineAsyncComponent(() => import('./components/layout/ExperienceSection.vue'));
	const SkillsSection = defineAsyncComponent(() => import('./components/layout/SkillsSection.vue'));
	const EducationSection = defineAsyncComponent(() => import('./components/layout/EducationSection.vue'));
	const ProjectsSection = defineAsyncComponent(() => import('./components/layout/ProjectsSection.vue'));
</script>