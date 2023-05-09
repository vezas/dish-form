import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      darkBlue: string;
      blue: string;
      lightBlue: string;
      darkGray: string;
      gray: string;
      lightGray: string;
      white: string;
      red: string;
      background: string;
    };
    font: {
      family: string;
      weight400: string;
      weight500: string;
      weight700: string;
    };
    layout: {
      gapLittle: string;
      gapSmall: string;
      gapMedium: string;
      gapBig: string;
      radius: string;
      radiusCard: string;
    };
  }
}
