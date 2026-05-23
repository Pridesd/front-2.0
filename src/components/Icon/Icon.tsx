import type { ReactElement, SVGProps } from 'react';

import styled from '@emotion/styled';

import { resolveColorToken, type ColorToken } from '@/styles/tokens';

import { iconRegistry, type IconName } from './iconRegistry';

const DEFAULT_ICON_SIZE = 20;
const DEFAULT_ICON_COLOR = 'icon.primary' satisfies ColorToken;

type IconStyleProps = {
  $color: ColorToken;
  $size: number;
};

export type IconProps = {
  icon: IconName;
  size?: number;
  color?: ColorToken;
} & Omit<SVGProps<SVGSVGElement>, 'children' | 'color' | 'height' | 'width'>;

export const Icon = ({
  'aria-hidden': ariaHidden,
  'aria-label': ariaLabel,
  color = DEFAULT_ICON_COLOR,
  icon,
  role,
  size = DEFAULT_ICON_SIZE,
  ...props
}: IconProps): ReactElement => {
  const SvgIcon = iconRegistry[icon];
  const isDecorative = !ariaLabel;

  return (
    <StyledIcon
      $color={color}
      $size={size}
      aria-hidden={isDecorative ? (ariaHidden ?? true) : ariaHidden}
      aria-label={ariaLabel}
      as={SvgIcon}
      height={size}
      role={isDecorative ? role : (role ?? 'img')}
      width={size}
      {...props}
    />
  );
};

const StyledIcon = styled.svg<IconStyleProps>(({ $color, $size }) => ({
  color: resolveColorToken($color),
  display: 'inline-block',
  flexShrink: 0,
  height: $size,
  verticalAlign: 'middle',
  width: $size,
}));
