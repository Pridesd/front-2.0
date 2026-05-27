import '@emotion/react';

import type { AppTheme } from './theme';

declare module '@emotion/react' {
  export interface Theme {
    color: AppTheme['color'];
    colorPrimitive: AppTheme['colorPrimitive'];
    fontFamily: AppTheme['fontFamily'];
    fontWeight: AppTheme['fontWeight'];
    pxToRem: AppTheme['pxToRem'];
    radius: AppTheme['radius'];
    spacing: AppTheme['spacing'];
    typography: AppTheme['typography'];
    zIndex: AppTheme['zIndex'];
  }
}
