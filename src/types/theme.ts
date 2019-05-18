/**
 * Тема
 */
export interface ITheme {
  palette: {
    primary: Palette;
    light: Palette;
  };
}

type Palette = {
  main: string;
  contrast: string;
};

export type WithTheme<T> = ITheme & T;
