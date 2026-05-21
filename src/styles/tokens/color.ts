type ColorValue = string;

export type ColorMode = 'light' | 'dark';

// TODO: Primitive color values can change when Figma tokens are updated. Prefer semantic color tokens in product components.
export const colorPrimitive = {
  neutral: {
    '0': '#FFFFFF',
    '50': '#F7F9FB',
    '100': '#EEF2F6',
    '200': '#E0E6EC',
    '300': '#C9D2DC',
    '400': '#AAB7C4',
    '500': '#798898',
    '600': '#586879',
    '700': '#3B4B5C',
    '800': '#232E3B',
    '850': '#192432',
    '900': '#111A27',
    '950': '#0A121D',
    '900-a56': 'rgba(16, 24, 40, 0.56)',
    'black-a64': 'rgba(0, 0, 0, 0.64)',
    '900-a08': 'rgba(16, 24, 40, 0.08)',
    '400-a24': 'rgba(144, 155, 174, 0.24)',
    '0-a8': 'rgba(255, 255, 255, 0.08)',
    '0-a20': 'rgba(255, 255, 255, 0.2)',
    '0-a32': 'rgba(255, 255, 255, 0.32)',
  },
  red: {
    '50': '#FEF3F2',
    '400': '#FF6B61',
    '500': '#F04438',
  },
  brand: {
    cyan: {
      '50': '#EBFDFF',
      '100': '#C7F1FD',
      '200': '#95E2FA',
      '300': '#5BD0F6',
      '400': '#2EB5E8',
      '500': '#009BDB',
      '600': '#0087C0',
      '700': '#026F99',
      '800': '#0C5B7D',
      '900': '#134263',
      '950': '#02243B',
      '400-a12': 'rgba(46, 181, 232, 0.12)',
      '400-a20': 'rgba(46, 181, 232, 0.2)',
      '500-a10': 'rgba(0, 155, 219, 0.1)',
      '500-a24': 'rgba(0, 155, 219, 0.24)',
    },
    mint: {
      'mint-weak': 'rgba(104, 209, 194, 0.16)',
    },
  },
  profile: {
    'team-a': '#C9532E',
    'team-b': '#CE8E38',
    'team-c': '#6C9D34',
    'team-d': '#408797',
    'team-e': '#3F6EBC',
    'Visual Impairment': '#BC4F70',
    Guide: '#5F61C6',
  },
} as const;

export const primitiveColorTokenMap = {
  'primitive.neutral.0': '#FFFFFF',
  'primitive.neutral.50': '#F7F9FB',
  'primitive.neutral.100': '#EEF2F6',
  'primitive.neutral.200': '#E0E6EC',
  'primitive.neutral.300': '#C9D2DC',
  'primitive.neutral.400': '#AAB7C4',
  'primitive.neutral.500': '#798898',
  'primitive.neutral.600': '#586879',
  'primitive.neutral.700': '#3B4B5C',
  'primitive.neutral.800': '#232E3B',
  'primitive.neutral.850': '#192432',
  'primitive.neutral.900': '#111A27',
  'primitive.neutral.950': '#0A121D',
  'primitive.neutral.900-a56': 'rgba(16, 24, 40, 0.56)',
  'primitive.neutral.black-a64': 'rgba(0, 0, 0, 0.64)',
  'primitive.neutral.900-a08': 'rgba(16, 24, 40, 0.08)',
  'primitive.neutral.400-a24': 'rgba(144, 155, 174, 0.24)',
  'primitive.neutral.0-a8': 'rgba(255, 255, 255, 0.08)',
  'primitive.neutral.0-a20': 'rgba(255, 255, 255, 0.2)',
  'primitive.neutral.0-a32': 'rgba(255, 255, 255, 0.32)',
  'primitive.red.50': '#FEF3F2',
  'primitive.red.400': '#FF6B61',
  'primitive.red.500': '#F04438',
  'primitive.brand.cyan.50': '#EBFDFF',
  'primitive.brand.cyan.100': '#C7F1FD',
  'primitive.brand.cyan.200': '#95E2FA',
  'primitive.brand.cyan.300': '#5BD0F6',
  'primitive.brand.cyan.400': '#2EB5E8',
  'primitive.brand.cyan.500': '#009BDB',
  'primitive.brand.cyan.600': '#0087C0',
  'primitive.brand.cyan.700': '#026F99',
  'primitive.brand.cyan.800': '#0C5B7D',
  'primitive.brand.cyan.900': '#134263',
  'primitive.brand.cyan.950': '#02243B',
  'primitive.brand.cyan.400-a12': 'rgba(46, 181, 232, 0.12)',
  'primitive.brand.cyan.400-a20': 'rgba(46, 181, 232, 0.2)',
  'primitive.brand.cyan.500-a10': 'rgba(0, 155, 219, 0.1)',
  'primitive.brand.cyan.500-a24': 'rgba(0, 155, 219, 0.24)',
  'primitive.brand.mint.mint-weak': 'rgba(104, 209, 194, 0.16)',
  'primitive.profile.team-a': '#C9532E',
  'primitive.profile.team-b': '#CE8E38',
  'primitive.profile.team-c': '#6C9D34',
  'primitive.profile.team-d': '#408797',
  'primitive.profile.team-e': '#3F6EBC',
  'primitive.profile.Visual Impairment': '#BC4F70',
  'primitive.profile.Guide': '#5F61C6',
} as const;

export type PrimitiveColorToken = keyof typeof primitiveColorTokenMap;

export const semanticColorAliases = {
  light: {
    bg: {
      default: 'primitive.neutral.0',
      subtle: 'primitive.neutral.100',
      surface: 'primitive.neutral.200',
      elevated: 'primitive.neutral.0',
      dim: 'primitive.neutral.black-a64',
      weak: 'primitive.neutral.400-a24',
      brand: 'primitive.brand.cyan.500',
      'brand-weak': 'primitive.brand.cyan.500-a10',
      'brand-weak2': 'primitive.brand.cyan.500-a24',
      inverse: 'primitive.neutral.800',
    },
    text: {
      primary: 'primitive.neutral.950',
      secondary: 'primitive.neutral.700',
      tertiary: 'primitive.neutral.500',
      quaternary: 'primitive.neutral.400',
      disabled: 'primitive.neutral.300',
      inverse: 'primitive.neutral.0',
      brand: 'primitive.brand.cyan.500',
      danger: 'primitive.red.500',
    },
    border: {
      default: 'primitive.neutral.400-a24',
      subtle: 'primitive.neutral.900-a08',
      focused: 'primitive.brand.cyan.500-a24',
      danger: 'primitive.red.500',
    },
    profile: {
      'team-a': 'primitive.profile.team-a',
      'team-b': 'primitive.profile.team-b',
      'team-c': 'primitive.profile.team-c',
      'team-d': 'primitive.profile.team-d',
      'team-e': 'primitive.profile.team-e',
    },
    icon: {
      primary: 'primitive.neutral.900',
      secondary: 'primitive.neutral.500',
      teritary: 'primitive.neutral.400',
    },
  },
  dark: {
    bg: {
      default: 'primitive.neutral.950',
      subtle: 'primitive.neutral.900',
      surface: 'primitive.neutral.850',
      elevated: 'primitive.neutral.950',
      dim: 'primitive.neutral.black-a64',
      weak: 'primitive.neutral.0-a32',
      brand: 'primitive.brand.cyan.400',
      'brand-weak': 'primitive.brand.cyan.400-a12',
      'brand-weak2': 'primitive.brand.cyan.400-a20',
      inverse: 'primitive.neutral.100',
    },
    text: {
      primary: 'primitive.neutral.50',
      secondary: 'primitive.neutral.300',
      tertiary: 'primitive.neutral.400',
      quaternary: 'primitive.neutral.500',
      disabled: 'primitive.neutral.400',
      inverse: 'primitive.neutral.950',
      brand: 'primitive.brand.cyan.400',
      danger: 'primitive.red.400',
    },
    border: {
      default: 'primitive.neutral.0-a20',
      subtle: 'primitive.neutral.0-a8',
      focused: 'primitive.brand.cyan.400-a20',
      danger: 'primitive.red.400',
    },
    profile: {
      'team-a': 'primitive.profile.team-a',
      'team-b': 'primitive.profile.team-b',
      'team-c': 'primitive.profile.team-c',
      'team-d': 'primitive.profile.team-d',
      'team-e': 'primitive.profile.team-e',
    },
    icon: {
      primary: 'primitive.neutral.100',
      secondary: 'primitive.neutral.500',
      teritary: 'primitive.neutral.600',
    },
  },
} as const;

export const semanticColorModes = {
  light: {
    bg: {
      default: '#FFFFFF',
      subtle: '#EEF2F6',
      surface: '#E0E6EC',
      elevated: '#FFFFFF',
      dim: 'rgba(0, 0, 0, 0.64)',
      weak: 'rgba(144, 155, 174, 0.24)',
      brand: '#009BDB',
      'brand-weak': 'rgba(0, 155, 219, 0.1)',
      'brand-weak2': 'rgba(0, 155, 219, 0.24)',
      inverse: '#232E3B',
    },
    text: {
      primary: '#0A121D',
      secondary: '#3B4B5C',
      tertiary: '#798898',
      quaternary: '#AAB7C4',
      disabled: '#C9D2DC',
      inverse: '#FFFFFF',
      brand: '#009BDB',
      danger: '#F04438',
    },
    border: {
      default: 'rgba(144, 155, 174, 0.24)',
      subtle: 'rgba(16, 24, 40, 0.08)',
      focused: 'rgba(0, 155, 219, 0.24)',
      danger: '#F04438',
    },
    profile: {
      'team-a': '#C9532E',
      'team-b': '#CE8E38',
      'team-c': '#6C9D34',
      'team-d': '#408797',
      'team-e': '#3F6EBC',
    },
    icon: {
      primary: '#111A27',
      secondary: '#798898',
      teritary: '#AAB7C4',
    },
  },
  dark: {
    bg: {
      default: '#0A121D',
      subtle: '#111A27',
      surface: '#192432',
      elevated: '#0A121D',
      dim: 'rgba(0, 0, 0, 0.64)',
      weak: 'rgba(255, 255, 255, 0.32)',
      brand: '#2EB5E8',
      'brand-weak': 'rgba(46, 181, 232, 0.12)',
      'brand-weak2': 'rgba(46, 181, 232, 0.2)',
      inverse: '#EEF2F6',
    },
    text: {
      primary: '#F7F9FB',
      secondary: '#C9D2DC',
      tertiary: '#AAB7C4',
      quaternary: '#798898',
      disabled: '#AAB7C4',
      inverse: '#0A121D',
      brand: '#2EB5E8',
      danger: '#FF6B61',
    },
    border: {
      default: 'rgba(255, 255, 255, 0.2)',
      subtle: 'rgba(255, 255, 255, 0.08)',
      focused: 'rgba(46, 181, 232, 0.2)',
      danger: '#FF6B61',
    },
    profile: {
      'team-a': '#C9532E',
      'team-b': '#CE8E38',
      'team-c': '#6C9D34',
      'team-d': '#408797',
      'team-e': '#3F6EBC',
    },
    icon: {
      primary: '#EEF2F6',
      secondary: '#798898',
      teritary: '#586879',
    },
  },
} as const;

export const color = {
  bg: {
    default: 'var(--color-bg-default)',
    subtle: 'var(--color-bg-subtle)',
    surface: 'var(--color-bg-surface)',
    elevated: 'var(--color-bg-elevated)',
    dim: 'var(--color-bg-dim)',
    weak: 'var(--color-bg-weak)',
    brand: 'var(--color-bg-brand)',
    'brand-weak': 'var(--color-bg-brand-weak)',
    'brand-weak2': 'var(--color-bg-brand-weak2)',
    inverse: 'var(--color-bg-inverse)',
  },
  text: {
    primary: 'var(--color-text-primary)',
    secondary: 'var(--color-text-secondary)',
    tertiary: 'var(--color-text-tertiary)',
    quaternary: 'var(--color-text-quaternary)',
    disabled: 'var(--color-text-disabled)',
    inverse: 'var(--color-text-inverse)',
    brand: 'var(--color-text-brand)',
    danger: 'var(--color-text-danger)',
  },
  border: {
    default: 'var(--color-border-default)',
    subtle: 'var(--color-border-subtle)',
    focused: 'var(--color-border-focused)',
    danger: 'var(--color-border-danger)',
  },
  profile: {
    'team-a': 'var(--color-profile-team-a)',
    'team-b': 'var(--color-profile-team-b)',
    'team-c': 'var(--color-profile-team-c)',
    'team-d': 'var(--color-profile-team-d)',
    'team-e': 'var(--color-profile-team-e)',
  },
  icon: {
    primary: 'var(--color-icon-primary)',
    secondary: 'var(--color-icon-secondary)',
    teritary: 'var(--color-icon-teritary)',
    tertiary: 'var(--color-icon-teritary)',
  },
} as const;

export const colorTokenMap = {
  'bg.default': 'var(--color-bg-default)',
  'bg.subtle': 'var(--color-bg-subtle)',
  'bg.surface': 'var(--color-bg-surface)',
  'bg.elevated': 'var(--color-bg-elevated)',
  'bg.dim': 'var(--color-bg-dim)',
  'bg.weak': 'var(--color-bg-weak)',
  'bg.brand': 'var(--color-bg-brand)',
  'bg.brand-weak': 'var(--color-bg-brand-weak)',
  'bg.brand-weak2': 'var(--color-bg-brand-weak2)',
  'bg.inverse': 'var(--color-bg-inverse)',
  'text.primary': 'var(--color-text-primary)',
  'text.secondary': 'var(--color-text-secondary)',
  'text.tertiary': 'var(--color-text-tertiary)',
  'text.quaternary': 'var(--color-text-quaternary)',
  'text.disabled': 'var(--color-text-disabled)',
  'text.inverse': 'var(--color-text-inverse)',
  'text.brand': 'var(--color-text-brand)',
  'text.danger': 'var(--color-text-danger)',
  'border.default': 'var(--color-border-default)',
  'border.subtle': 'var(--color-border-subtle)',
  'border.focused': 'var(--color-border-focused)',
  'border.danger': 'var(--color-border-danger)',
  'profile.team-a': 'var(--color-profile-team-a)',
  'profile.team-b': 'var(--color-profile-team-b)',
  'profile.team-c': 'var(--color-profile-team-c)',
  'profile.team-d': 'var(--color-profile-team-d)',
  'profile.team-e': 'var(--color-profile-team-e)',
  'icon.primary': 'var(--color-icon-primary)',
  'icon.secondary': 'var(--color-icon-secondary)',
  'icon.teritary': 'var(--color-icon-teritary)',
  'icon.tertiary': 'var(--color-icon-teritary)',
} as const;

export type ColorToken = keyof typeof colorTokenMap;

export const resolveColorToken = (token: ColorToken): ColorValue => colorTokenMap[token];

const flattenSemanticColors = (
  value: Record<string, unknown>,
  path: string[] = [],
): Array<[name: string, color: string]> => {
  return Object.entries(value).flatMap(([key, childValue]) => {
    const nextPath = [...path, key];

    if (typeof childValue === 'string') {
      return [[nextPath.join('-'), childValue] as [string, string]];
    }

    return flattenSemanticColors(childValue as Record<string, unknown>, nextPath);
  });
};

const createColorModeCssVariables = (modeColors: Record<string, unknown>) => {
  return flattenSemanticColors(modeColors)
    .map(([name, value]) => `  --color-${name}: ${value};`)
    .join('\n');
};

export const colorModeCssVariables = {
  light: createColorModeCssVariables(semanticColorModes.light),
  dark: createColorModeCssVariables(semanticColorModes.dark),
} as const satisfies Record<ColorMode, string>;
