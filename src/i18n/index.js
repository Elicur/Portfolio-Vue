import { info } from 'autoprefixer'
import { createI18n } from 'vue-i18n'

export const messages = {
    es: {
        hero: {
        title: 'Hola,',
        name: 'Soy Elías Bentancur',
        role: 'Tecnólogo en Informática',
        description: ', desarrollador Full Stack con conocimientos en Testing / QA e Infraestructura, enfocado en construir soluciones sólidas y mantenibles.',
        contact: 'Contactarme',
        download: 'Descargar CV',
        },

        experience: {
            title: 'Experiencia Laboral',
            role: 'Desarrollador Junior (Pasantía)',
            company: 'White Monkey',
            period: 'Enero 2025 – Marzo 2025',
            description:
                'Participación activa en un proyecto de desarrollo de software, ' +
                'trabajando en frontend, backend y testing, utilizando tecnologías ' +
                'como Angular, .NET y PostgreSQL.',
        },

        skills: {
            title: 'Tecnologías',
            categories: {
            languages: 'Lenguajes',
            frameworks: 'Frameworks / Librerías',
            databases: 'Bases de Datos',
            frontend: 'Front-End',
            platforms: 'Plataformas / Entornos',
            versioning: 'Control de Versiones',
            },
            items: {
            languages: ['Java', 'C++', 'C#', 'JavaScript', 'Python', 'PHP', 'Kotlin'],
            frameworks: ['Angular', 'React', 'Vue', 'Django', 'CodeIgniter 4'],
            databases: ['PostgreSQL', 'MySQL'],
            frontend: ['HTML', 'CSS', 'Bootstrap', 'Tailwind CSS'],
            platforms: ['.NET'],
            versioning: ['GitHub'],
            },
        },

        education: {
            title: 'Formación Académica',
            info: 'Info',
            items: [
                {
                period: '2022 – 2025',
                degree: 'Tecnólogo en Informática',
                status: 'Finalizado',
                institution: 'Universidad Tecnológica del Uruguay',
                logoAlt: 'UTEC',
                logo: 'UTEC',
                },
                {
                period: '2021',
                degree: 'Testing',
                status: 'Finalizado',
                institution: 'Jóvenes a Programar · Plan Ceibal',
                logoAlt: 'JaP',
                logo: 'JAP'
                },
                {
                period: '2008 – 2016',
                degree: 'Inglés',
                status: 'Finalizado',
                institution: 'Dickens Institute · First Certificate in English',
                logoAlt: 'English',
                logo: 'CAMBRIDGE',
                },
            ],
        },

        projects: {
            title: 'Proyectos',
            github: 'GitHub',
            items: [
                {
                title: 'SPI – Sistema de Prevención de Incendios',
                description:
                    'Sistema integral para la detección temprana de incendios forestales en Uruguay, desarrollado en colaboración con la Dirección Nacional de Bomberos. Integra sensores terrestres y datos meteorológicos de INUMET, permitiendo el monitoreo en tiempo real mediante alertas, ubicaciones y gráficas dinámicas.',
                tech: ['React', 'Python', 'Django', 'PostgreSQL', 'Docker', 'Tailwind CSS'],
                image: 'SPI', // key, no ruta
                githubUrl: 'https://github.com/FedericoGardella/SPI_App',
                },
                {
                title: 'Truco Masters',
                description:
                    'Aplicación móvil desarrollada para llevar el marcador de partidas de Truco, permitiendo registrar de forma simple e intuitiva los puntos de cada equipo durante el juego. Diseñada como una herramienta práctica para partidas casuales, con foco en usabilidad y rapidez de interacción.',
                tech: ['Kotlin', 'Android Studio'],
                image: 'truco-masters', // key, no ruta
                githubUrl: 'https://github.com/Elicur/Truco-Masters',
                },
            ],
        },
    },
    en: {
        hero: {
        title: 'Hi,',
        name: 'I’m Elías Bentancur',
        role: 'IT Technologist',
        description: ', Full Stack Developer with knowledge of Testing / QA and Infrastructure, focused on building reliable and maintainable solutions.',
        contact: 'Contact Me',
        download: 'Download CV',
        },

        experience: {
            title: 'Work Experience',
            role: 'Junior Developer (Internship)',
            company: 'White Monkey',
            period: 'January 2025 - March 2025',
            description:
                'Active participation in a software development project, ' +
                'working across frontend, backend, and testing, using technologies ' +
                'such as Angular, .NET, and PostgreSQL.',
        },

        skills: {
            title: 'Technologies',
            categories: {
            languages: 'Languages',
            frameworks: 'Frameworks / Libraries',
            databases: 'Databases',
            frontend: 'Front-End',
            platforms: 'Platforms / Environments',
            versioning: 'Version Control',
            },
            items: {
            languages: ['Java', 'C++', 'C#', 'JavaScript', 'Python', 'PHP', 'Kotlin'],
            frameworks: ['Angular', 'React', 'Vue', 'Django', 'CodeIgniter 4'],
            databases: ['PostgreSQL', 'MySQL'],
            frontend: ['HTML', 'CSS', 'Bootstrap', 'Tailwind CSS'],
            platforms: ['.NET'],
            versioning: ['GitHub'],
            },
        },

        education: {
            title: 'Education',
            info: 'Info',
            items: [
                {
                period: '2022 – 2025',
                degree: 'IT Technologist (Degree in Information Technology)',
                status: 'Completed',
                institution: 'Universidad Tecnológica del Uruguay',
                logoAlt: 'UTEC',
                logo: 'UTEC',
                },
                {
                period: '2021',
                degree: 'Testing',
                status: 'Completed',
                institution: 'Jóvenes a Programar · Plan Ceibal',
                logoAlt: 'JAP',
                logo: 'JAP'
                },
                {
                period: '2008 – 2016',
                degree: 'English',
                status: 'Completed',
                institution: 'Dickens Institute · First Certificate in English',
                logoAlt: 'English',
                logo: 'CAMBRIDGE'
                },
            ],
        },

        projects: {
            title: 'Proyectos',
            github: 'GitHub',
            items: [
                {
                title: 'SPI – Fire Prevention System',
                description:
                    'Integrated system for early detection of forest fires in Uruguay, developed in collaboration with the National Fire Department. It combines ground sensors and meteorological data from INUMET, enabling real-time monitoring through alerts, geolocated devices, and dynamic real-time charts.',
                tech: ['React', 'Python', 'Django', 'PostgreSQL', 'Docker', 'Tailwind CSS'],
                image: 'SPI', // key, no ruta
                githubUrl: 'https://github.com/FedericoGardella/SPI_App',
                },
                {
                title: 'Truco Masters',
                description:
                    'Mobile application designed to keep score during Truco card game matches, allowing users to easily and intuitively track each team’s points throughout game. Built as a practical tool for casual matches, with a strong focus on usability and fast interaction.',
                tech: ['Kotlin', 'Android Studio'],
                image: 'truco-masters', // key, no ruta
                githubUrl: 'https://github.com/Elicur/Truco-Masters',
                },
            ],
        },
    },


}

const i18n = createI18n({
    legacy: false,
    locale: 'es',
    fallbackLocale: 'en',
    messages,
})

export default i18n
