import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string,
            accent: string,
            dark: string,
            highlight: string,
            bright: string,
            grey: string,
            error: string,
            lightText: string,
            primaryTint: string,
            highEmphasis: string,
            lowEmphasis: string,
        }
    }
}