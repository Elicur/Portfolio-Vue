<template>
    <div class="relative flex items-center justify-center">

        <!-- Halo (respira, no rota) -->
        <div class="pointer-events-none absolute -z-10
                    h-[360px] w-[360px] md:h-[480px] md:w-[480px]
                    rounded-full blur-3xl hero-glow
                    bg-[radial-gradient(circle,rgba(79,70,229,0.14)_0%,rgba(79,70,229,0.06)_35%,rgba(0,0,0,0)_70%)]
                    dark:bg-[radial-gradient(circle,rgba(14,165,233,0.14)_0%,rgba(14,165,233,0.06)_35%,rgba(0,0,0,0)_70%)]"
        ></div>

        <!-- Ring rotando (SOLO el borde) -->
        <div class="pointer-events-none absolute
                    h-[250px] w-[250px] md:h-[350px] md:w-[350px]
                    rounded-full ring-spin"
        ></div>

        <!-- Imagen (estática) -->
        <div class="relative z-10
                    h-[230px] w-[230px] md:h-[320px] md:w-[320px]
                    rounded-full overflow-hidden
                    ring-1 ring-primary/20 dark:ring-secondary/20">
            
            <img
                src="@/assets/images/eliasProfile2.jpg"
                alt="Elías"
                class="h-full w-full object-cover"
                loading="lazy" />
            
                <div class="absolute inset-0 bg-black/20 dark:bg-black/35"></div>
        </div>

    </div>
</template>

<style scoped>
    /* Halo: respiración lenta */
    .hero-glow {
        animation: glowPulse 8s ease-in-out infinite;
    }

    @keyframes glowPulse {
        0%, 100% {
            transform: scale(1);
            opacity: 0.9;
        }
        50% {
            transform: scale(1.05);
            opacity: 1;
        }
    }

    /* Ring decorativo: rota SOLO él */
    /* Ring decorativo: fino y elegante */
    .ring-spin {
        background: conic-gradient(
            from 0deg,
            rgba(79,70,229,0.00),
            rgba(79,70,229,0.45),
            rgba(14,165,233,0.30),
            rgba(79,70,229,0.00)
        );

        /* Hace que solo se vea un aro fino */
        -webkit-mask: radial-gradient(
            farthest-side,
            transparent calc(100% - 2px),
            black calc(100% - 1px)
        );
        mask: radial-gradient(
            farthest-side,
            transparent calc(100% - 2px),
            black calc(100% - 1px)
        );

        animation: ringRotate 11s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
    }

    /* Dark ajustado */
    :global(.dark) .ring-spin {
        background: conic-gradient(
            from 0deg,
            rgba(14,165,233,0.00),
            rgba(14,165,233,0.45),
            rgba(79,70,229,0.30),
            rgba(14,165,233,0.00)
        );
    }


    :global(.dark) .ring-spin {
        background: conic-gradient(
            from 0deg,
            rgba(14,165,233,0.00),
            rgba(14,165,233,0.35),
            rgba(79,70,229,0.18),
            rgba(14,165,233,0.00)
        );
    }

    @keyframes ringRotate {
        to {
            transform: rotate(360deg);
        }
    }

    /* Accesibilidad */
    @media (prefers-reduced-motion: reduce) {
        .hero-glow,
        .ring-spin {
            animation: none;
        }
    }   
</style>
