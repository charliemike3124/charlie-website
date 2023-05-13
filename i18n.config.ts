export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en: {
            welcome1: "Hi, I'm Charlie Villalobos 👋",
            welcome2: {
                A: 'A versatile ',
                B: 'expert  and ',
                C: 'full-stack engineer ',
                D: 'crafting exceptional web experiences.',
            },
            welcome3: 'Contact me if you need any help!',
            buttons: {
                contactMe: 'Contact Me',
            },
            navBar: {
                aboutMe: 'About Me',
                solutions: 'Solutions',
                contact: 'Contact',
            },
        },
        es: {
            welcome1: 'Hola, soy Charlie Villalobos 👋',
            welcome2: {
                A: 'Un versatil experto en ',
                B: 'e ',
                C: 'ingeniero full-stack ',
                D: 'forjando experiencias web exceptionales.',
            },
            welcome3: '¡Contáctame si necesitas ayuda!',
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
