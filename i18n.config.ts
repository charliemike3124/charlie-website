export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en: {
            welcome1: "Hi, I'm Charlie Villalobos 👋",
            welcome2: {
                A: "Looking to build an exceptional website? I'm a  ",
                B: 'Web Engineer',
                C: 'specialized in crafting seamless user experiences.',
            },
            welcome3: "Let's create something amazing together!",
            buttons: {
                contactMe: 'Contact Me',
            },
            navBar: {
                aboutMe: 'About Me',
                solutions: 'Solutions',
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
                aboutMe: 'Sobre mí',
                solutions: 'Soluciones',
                contact: 'Contacto',
            },
        },
    },
}));
