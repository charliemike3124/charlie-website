export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en: {
            ctaHeading: 'Looking to build an exceptional website?',
            ctaSubheading:
                "Hi! I'm Charlie Villalobos 👋. A freelance Web Developer that can help you create an amazing product.",
            buttons: {
                solutions: 'View solutions',
                contact: 'Contact',
            },
            navBar: {
                services: 'Services',
                solutions: 'Solutions',
                aboutMe: 'About Me',
                contact: 'Contact',
            },
            solutions: {
                all: 'All',
                webApps: 'Web-Apps',
                ecommerce: 'E-Commerce',
                blogs: 'Blogs',
            },
        },
        es: {
            welcome1: 'Hola, soy Charlie Villalobos 👋',
            welcome2: {
                A: '¿Buscas crear un sitio web excepcional? Soy un ',
                B: 'Ingeniero Web',
                C: 'especializado en forjar las mejores experiencias de usuario.',
            },
            welcome3: '¡Creemos algo increíble!',
            buttons: {
                contactMe: 'Contáctame',
            },
            navBar: {
                solutions: 'Solutions',
                consulting: 'Consultoría',
                contact: 'Contacto',
            },
        },
    },
}));
