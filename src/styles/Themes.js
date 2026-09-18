// Synchronized with DESIGN.md tokens
export const dark = {
  // Legacy mappings for backward compatibility
  body: '#141414',
  text: '#f8f8f8',
  bodyRgba: '20, 20, 20',
  textRgba: '248, 248, 248',
  grey: '#a3a3a3',

  // DESIGN.md direct tokens
  background: '#141414',
  surface: '#1f1f1f',
  surfaceHover: '#2a2a2a',
  textPrimary: '#f8f8f8',
  textSecondary: '#a3a3a3',
  textMuted: '#737373',
  border: '#333333',
  borderLight: 'rgba(255, 255, 255, 0.15)',
  accent: '#d4b185',
  overlay: 'rgba(20, 20, 20, 0.75)',

  // Typography scale
  fontxs: '0.75rem',
  fontsm: '0.875rem',
  fontmd: '1rem',
  fontlg: '1.25rem',
  fontxl: '2rem',
  fontxxl: '3rem',
  fontxxxl: '5rem',
  fontBig: '10rem',

  // Spacing & Layout
  navHeight: '5rem',
};

export const light = {
  ...dark,
  body: '#f8f8f8',
  text: '#141414',
  bodyRgba: '248, 248, 248',
  textRgba: '20, 20, 20',
  background: '#f8f8f8',
  surface: '#ffffff',
  surfaceHover: '#ececec',
  textPrimary: '#141414',
  textSecondary: '#555555',
  textMuted: '#888888',
  border: '#e0e0e0',
  borderLight: 'rgba(0, 0, 0, 0.1)',
  overlay: 'rgba(248, 248, 248, 0.8)',
};
