import React from 'react';
import * as styledComponents from 'styled-components';

export interface Theme {
    colors: {
        primary: string;
        foreground: string;
    }
}

const {
    default: styled,
    ThemeProvider: BaseThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>;

const defaultTheme: Theme = {
    colors: {
      primary: '#0000FF',
      foreground: '#FFFFFF'
    }
};

const ThemeProvider = (props: { children: any; theme?: Theme }) => {
    const { children, theme = defaultTheme } = props;
    
    return <BaseThemeProvider theme={theme}>{children}</BaseThemeProvider>
};

export { styled, ThemeProvider };