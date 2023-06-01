export default defineI18nConfig(() => ({
    legacy: false,
    locale: "en",
    messages: {
        en: {
            ctaHeading: {
                1: "¿Looking to build an ",
                2: "exceptional ",
                3: "website?",
            },
            ctaSubheading:
                "Hi 👋 I'm Charlie Villalobos, a freelance Web Developer dedicated to crafting exceptional digital solutions for your unique needs.",
            buttons: {
                solutions: "View solutions",
                contact: "Contact",
            },
            navBar: {
                services: "Services",
                solutions: "Solutions",
                aboutMe: "About Me",
                contact: "Contact",
            },
            solutions: {
                all: "All",
                webApps: "Web-Apps",
                ecommerce: "E-Commerce",
                blogs: "Blogs",
            },
            aboutMe: {
                name: "Hi 👋 my name is Carlos Villalobos.",
                intro: `I'm a seasoned Web Engineer with over 3 years of experience. 
                I specialize in creating top-quality websites and applications tailored to meet clients' unique requirements.`,
                role: "Current Role",
            },
        },
        es: {
            welcome1: "Hola, soy Charlie Villalobos 👋",
            welcome2: {
                A: "¿Buscas crear un sitio web excepcional? Soy un ",
                B: "Ingeniero Web",
                C: "especializado en forjar las mejores experiencias de usuario.",
            },
            welcome3: "¡Creemos algo increíble!",
            buttons: {
                contactMe: "Contáctame",
            },
            navBar: {
                solutions: "Solutions",
                consulting: "Consultoría",
                contact: "Contacto",
            },
        },
    },
}));
