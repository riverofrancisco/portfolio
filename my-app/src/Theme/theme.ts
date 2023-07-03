import * as React from 'react';
import { amber, deepOrange, grey } from '@mui/material/colors';
import { PaletteMode } from '@mui/material';

export enum Colours {
  Celeste = '#75AADB',
  Blanco = '#FFFFFF',
  Amarillo = '#FFD500',
  GrisOscuro = '#333333',
  GrisMedio = '#7E7E7E',
  GrisClaro = '#CFCFCF',
  BlancoGrisaceo = '#F2F2F2',
  Negro = '#000000',
  BoxLight = '#FFA000', // Color de la Box en tema claro
  BoxDark = '#E91E63',
}


export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {main: Colours.Celeste},
          secondary: {main: Colours.Amarillo},
          divider: Colours.Amarillo,
          text: {
            primary: Colours.GrisOscuro,
            secondary: Colours.Celeste,
          },
          background: {
            default: Colours.BlancoGrisaceo,
                     
          },
          box: {
            main: Colours.BoxLight,
          },
        }
      : {
          // palette values for dark mode
          primary: {main: Colours.Celeste},
          secondary: {main: Colours.Blanco},
          divider: Colours.GrisMedio,
          background: {
            default: Colours.GrisOscuro,
            paper: Colours.Negro,
          },
          box: {
            main: Colours.BoxDark,
          },

          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
});
