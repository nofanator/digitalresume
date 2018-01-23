export const themes = {
    LIGHT: 'LIGHT',
    NEUTRAL: 'NEUTRAL',
    DARK: 'DARK'
}

const lightTheme = {
    BACKGROUND: '#f1ede4',    
    TEXT: '#525951'
}

const neutralTheme = {
    BACKGROUND: '#d5d4d2',
    TEXT: '#2d2523'
}

const darkTheme = {
    BACKGROUND: '#302825',
    TEXT: '#e7e8e2'
}

export function getTheme(name) {
    switch (name) {
        case themes.LIGHT:
            return lightTheme
        case themes.DARK:
            return darkTheme
        case themes.NEUTRAL:
            return neutralTheme
        default:
            return lightTheme
    }
}