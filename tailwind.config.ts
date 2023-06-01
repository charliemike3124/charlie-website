const theme = {
    extend: {
        colors: {
            primary: '#66c5ad',
            'primary-text': '#374151',
            'secondary-text': 'white',
            'disabled-text': '#A0A0A0',
            'background-1': '#fafafa',
            'background-2': '#66c5ad',
            'background-3': '#005f8d',
            'accent-1': '#f8accc',
            'accent-2': '#c46655',
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
