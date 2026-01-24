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
    },


}

const i18n = createI18n({
  legacy: false,
  locale: 'es',
  fallbackLocale: 'en',
  messages,
})

export default i18n
