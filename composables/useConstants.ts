export function useConstants() {
    const configStore = useConfigStore();
    const websiteLinks = [
        {
            name: configStore.msg.navBar.home,
            elementId: "",
        },
        {
            name: configStore.msg.navBar.services,
            elementId: "services",
        },
        {
            name: configStore.msg.navBar.solutions,
            elementId: "solutions",
        },
        {
            name: configStore.msg.navBar.aboutMe,
            elementId: "aboutMe",
        },
    ];

    const contactLinks = [
        {
            name: "Linkedin",
            text: configStore.msg.footer.linkedin,
            icon: "linkedin",
            link: "https://www.linkedin.com/in/cvillalobosgtz/?locale=en_US",
        },
        {
            name: "Github",
            text: configStore.msg.footer.github,
            icon: "github",
            link: "https://github.com/charliemike3124",
        },
        {
            name: "Email",
            text: "carlosvillalobos1047@gmail.com",
            icon: "email",
            link: "",
        },
        {
            name: "WhatsApp",
            text: "(+57) 317 4027001",
            icon: "whatsapp",
            link: "https://wa.me/573174027001",
        },
    ];

    return {
        websiteLinks,
        contactLinks,
    };
}
