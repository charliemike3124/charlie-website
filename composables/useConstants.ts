export function useConstants() {
    const { t } = useI18n();
    const websiteLinks = [
        {
            name: t("navBar.home"),
            elementId: "",
        },
        {
            name: t("navBar.services"),
            elementId: "services",
        },
        {
            name: t("navBar.solutions"),
            elementId: "solutions",
        },
        {
            name: t("navBar.aboutMe"),
            elementId: "aboutMe",
        },
    ];

    const contactLinks = [
        {
            name: "Linkedin",
            text: t("footer.linkedin"),
            icon: "linkedin",
            link: "https://www.linkedin.com/in/cvillalobosgtz/?locale=en_US",
        },
        {
            name: "Github",
            text: t("footer.github"),
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
