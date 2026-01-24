<template>
  <section class="min-h-screen flex items-center pt-14 md:pt-18">
    <div class="mx-auto max-w-5xl px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">

      <!-- Texto -->
      <div class="text-center lg:text-left">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
          Hi, I’m
          <span class="text-primary">Elías</span>
        </h1>

        <p class="text-lg text-muted max-w-xl mx-auto lg:mx-0 mb-8">
          Full Stack Developer focused on building clean, scalable and
          user-friendly web applications.
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
            Contact Me
          </a>

          <!-- Secondary / Outline -->
          <a
            href="/cv.pdf"
            class="inline-flex items-center justify-center rounded-xl
                   border border-border px-6 py-3 text-sm font-medium
                   text-text hover:bg-slate-100 transition
                   dark:border-slate-800 dark:hover:bg-slate-900"
          >
            Download CV
          </a>
        </div>
      </div>

      <!-- Imagen -->
      <!-- Columna derecha: IMAGEN ANIMADA -->
      <aside class="flex justify-center lg:justify-end">
        <HeroImage />
      </aside>

    </div>
  </section>
</template>

<script setup>
import HeroImage from './HeroImage.vue'
</script>
