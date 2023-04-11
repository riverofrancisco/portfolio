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
  Negro = '#000000'
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
            primary: Colours.Negro,
            secondary: Colours.Celeste,
          },
        }
      : {
          // palette values for dark mode
          primary: {main: Colours.Celeste},
          secondary: {main: Colours.Blanco},
          divider: Colours.GrisMedio,
          background: {
            default: Colours.Negro,
            paper: Colours.GrisOscuro,
          },

          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
});