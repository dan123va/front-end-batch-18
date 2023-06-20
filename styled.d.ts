import {} from 'styled-components'; // Importa los tipos de styled-components

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
    };
  }
}
