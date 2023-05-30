const theme = {
    extend: {
        colors: {
            primary: '#688DC8',
            'primary-text': '#374151',
            'secondary-text': 'white',
            'disabled-text': '#A0A0A0',
            'background-1': '#fafafa',
            'background-2': '#001528',
            'background-3': '#0d3c68',
            'accent-1': '#8cc48c',
            'accent-2': '#fbc83a',
        },
    },
    screens: {
        xs: '420px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
    },
};

const cssRootVars = (() => {
    let css = ':root {\n';
    for (const colorKey in theme.extend.colors) {
        const colorValue = theme.extend.colors[colorKey];
        css += `  --${colorKey}: ${colorValue};\n`;
    }

    for (const screenKey in theme.screens) {
        const screenValue = theme.screens[screenKey];
        css += `  --${screenKey}: ${screenValue};\n`;
    }

    css += '}';

    return css;
})();

export default {
    theme,
    cssRootVars,
};
