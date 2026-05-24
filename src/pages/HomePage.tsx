import { useState } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Icon, IconButton, Text, type IconButtonShape, type IconName } from '@/components';
import {
  colorModeCssVariables,
  type ColorMode,
  type ColorToken,
  type TypographyToken,
} from '@/styles/tokens';

const ICON_SIZES = [24, 20, 16, 12] as const;

const TEXT_EXAMPLES: ReadonlyArray<{ font: TypographyToken; label: string; sample: string }> = [
  { font: 'display-l', label: 'display-l', sample: 'GuideRun' },
  { font: 'heading-l-b', label: 'heading-l-b', sample: 'Heading Large Bold' },
  { font: 'heading-l-sb', label: 'heading-l-sb', sample: 'Heading Large Semibold' },
  { font: 'heading-m-b', label: 'heading-m-b', sample: 'Heading Medium Bold' },
  { font: 'heading-m-sb', label: 'heading-m-sb', sample: 'Heading Medium Semibold' },
  { font: 'heading-m-m', label: 'heading-m-m', sample: 'Heading Medium Medium' },
  { font: 'heading-m-r', label: 'heading-m-r', sample: 'Heading Medium Regular' },
  { font: 'heading-s-sb', label: 'heading-s-sb', sample: 'Heading Small Semibold' },
  { font: 'heading-s-m', label: 'heading-s-m', sample: 'Heading Small Medium' },
  { font: 'body-l-b', label: 'body-l-b', sample: 'Body Large Bold' },
  { font: 'body-l-sb', label: 'body-l-sb', sample: 'Body Large Semibold' },
  { font: 'body-m-sb', label: 'body-m-sb', sample: 'Body Medium Semibold' },
  { font: 'body-m-m', label: 'body-m-m', sample: 'Body Medium Medium' },
  { font: 'body-s-sb', label: 'body-s-sb', sample: 'Body Small Semibold' },
  { font: 'body-s-m', label: 'body-s-m', sample: 'Body Small Medium' },
  { font: 'body-s-r', label: 'body-s-r', sample: 'Body Small Regular' },
  { font: 'detail-m-sb', label: 'detail-m-sb', sample: 'Detail Medium Semibold' },
  { font: 'detail-m-m', label: 'detail-m-m', sample: 'Detail Medium Medium' },
  { font: 'detail-m-r', label: 'detail-m-r', sample: 'Detail Medium Regular' },
  { font: 'detail-s-sb', label: 'detail-s-sb', sample: 'Detail Small Semibold' },
  { font: 'detail-s-r', label: 'detail-s-r', sample: 'Detail Small Regular' },
];

const ICON_EXAMPLES: ReadonlyArray<{ icon: IconName; color?: ColorToken }> = [
  { icon: 'chevron-down-lined' },
  { icon: 'chevron-left-lined' },
  { icon: 'chevron-right-lined' },
  { icon: 'chevron-up-lined' },
  { icon: 'delete-lined', color: 'text.danger' },
  { icon: 'help-circle-filled', color: 'bg.brand' },
  { icon: 'home-filled' },
  { icon: 'home-lined' },
  { icon: 'list-filled' },
  { icon: 'list-lined' },
  { icon: 'search-lined' },
  { icon: 'user-filled' },
  { icon: 'user-lined' },
];

const ICON_BUTTON_EXAMPLES: ReadonlyArray<{
  ariaLabel: string;
  background?: ColorToken;
  color?: ColorToken;
  disabled?: boolean;
  icon: IconName;
  iconSize?: number;
  label: string;
  shape?: IconButtonShape;
  size?: number;
}> = [
  {
    ariaLabel: '닫기',
    background: 'bg.elevated',
    icon: 'delete-lined',
    iconSize: 24,
    label: 'round / 48',
    shape: 'round',
    size: 48,
  },
  { ariaLabel: '뒤로가기', icon: 'chevron-left-lined', iconSize: 24, label: 'icon 24' },
  { ariaLabel: '닫기', icon: 'delete-lined', iconSize: 24, label: 'icon 24' },
  { ariaLabel: '프로필', icon: 'user-lined', iconSize: 24, label: 'icon 24' },
  { ariaLabel: '메뉴', icon: 'list-lined', iconSize: 24, label: 'icon 24' },
  {
    ariaLabel: '삭제',
    color: 'text.danger',
    disabled: true,
    icon: 'delete-lined',
    iconSize: 24,
    label: 'disabled',
  },
];

export const HomePage = () => {
  const [colorMode, setColorMode] = useState<ColorMode>('light');

  const handleToggleColorMode = () => {
    setColorMode((currentMode) => (currentMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <Page $colorMode={colorMode} data-color-mode={colorMode}>
      <Header>
        <HeaderCopy>
          <Text as="h1" font="heading-l-b">
            Components
          </Text>
          <Text color="text.secondary" font="body-s-r">
            Shared UI primitives currently available in the app.
          </Text>
        </HeaderCopy>
        <ThemeToggle type="button" onClick={handleToggleColorMode}>
          {colorMode === 'light' ? 'Dark mode' : 'Light mode'}
        </ThemeToggle>
      </Header>

      <ShowcaseSection>
        <SectionTitle>
          <Text as="h2" font="heading-s-m">
            Text
          </Text>
          <Text color="text.tertiary" font="detail-m-r">
            Typography tokens
          </Text>
        </SectionTitle>
        <TextList>
          {TEXT_EXAMPLES.map(({ font, label, sample }) => (
            <TextRow key={font}>
              <Text color="text.tertiary" font="detail-m-m">
                {label}
              </Text>
              <Text font={font}>{sample}</Text>
            </TextRow>
          ))}
        </TextList>
      </ShowcaseSection>

      <ShowcaseSection>
        <SectionTitle>
          <Text as="h2" font="heading-s-m">
            Icon
          </Text>
          <Text color="text.tertiary" font="detail-m-r">
            24 / 20 / 16 / 12
          </Text>
        </SectionTitle>
        <IconTable>
          <IconTableHeader>
            <Text color="text.tertiary" font="detail-m-m">
              Name
            </Text>
            {ICON_SIZES.map((size) => (
              <Text key={size} align="center" color="text.tertiary" font="detail-m-m">
                {size}px
              </Text>
            ))}
          </IconTableHeader>
          {ICON_EXAMPLES.map(({ color, icon }) => (
            <IconTableRow key={icon}>
              <Text color="text.secondary" font="detail-m-r">
                {icon}
              </Text>
              {ICON_SIZES.map((size) => (
                <IconCell key={`${icon}-${size}`}>
                  <Icon color={color} icon={icon} size={size} />
                </IconCell>
              ))}
            </IconTableRow>
          ))}
        </IconTable>
      </ShowcaseSection>

      <ShowcaseSection>
        <SectionTitle>
          <Text as="h2" font="heading-s-m">
            IconButton
          </Text>
          <Text color="text.tertiary" font="detail-m-r">
            Size, background, shape, disabled
          </Text>
        </SectionTitle>
        <IconButtonGrid>
          {ICON_BUTTON_EXAMPLES.map(
            ({ ariaLabel, background, color, disabled, icon, iconSize, label, shape, size }) => (
              <IconButtonSample key={label + icon}>
                <IconButton
                  aria-label={ariaLabel}
                  background={background}
                  color={color}
                  disabled={disabled}
                  icon={icon}
                  iconSize={iconSize}
                  shape={shape}
                  size={size}
                />
                <Text color="text.secondary" font="detail-m-r">
                  {label}
                </Text>
              </IconButtonSample>
            ),
          )}
        </IconButtonGrid>
      </ShowcaseSection>
    </Page>
  );
};

const getModeVariables = (mode: ColorMode) => css`
  ${colorModeCssVariables[mode]}
`;

const Page = styled.main<{ $colorMode: ColorMode }>`
  ${({ $colorMode }) => getModeVariables($colorMode)}
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing['3xl']};
  color: ${({ theme }) => theme.color.text.primary};
  background: ${({ theme }) => theme.color.bg.default};
`;

const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const HeaderCopy = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const ThemeToggle = styled.button`
  flex: 0 0 auto;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  border: 1px solid ${({ theme }) => theme.color.border.subtle};
  border-radius: ${({ theme }) => theme.radius.full};
  color: ${({ theme }) => theme.color.text.primary};
  background: ${({ theme }) => theme.color.bg.subtle};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.color.bg.surface};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.border.focused};
    outline-offset: ${({ theme }) => theme.spacing.xs};
  }
`;

const ShowcaseSection = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  border: 1px solid ${({ theme }) => theme.color.border.subtle};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.bg.subtle};
`;

const SectionTitle = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const TextList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const TextRow = styled.div`
  display: grid;
  grid-template-columns: minmax(${({ theme }) => theme.pxToRem(140)}, ${({ theme }) => theme.pxToRem(200)}) 1fr;
  align-items: baseline;
  gap: ${({ theme }) => theme.spacing.xl};
  min-height: ${({ theme }) => theme.pxToRem(32)};
`;

const IconTable = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
  overflow-x: auto;
`;

const IconTableHeader = styled.div`
  display: grid;
  grid-template-columns: minmax(${({ theme }) => theme.pxToRem(180)}, 1fr) repeat(4, ${({ theme }) => theme.pxToRem(48)});
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  min-width: ${({ theme }) => theme.pxToRem(420)};
`;

const IconTableRow = styled.div`
  display: grid;
  grid-template-columns: minmax(${({ theme }) => theme.pxToRem(180)}, 1fr) repeat(4, ${({ theme }) => theme.pxToRem(48)});
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  min-width: ${({ theme }) => theme.pxToRem(420)};
  min-height: ${({ theme }) => theme.pxToRem(40)};
`;

const IconCell = styled.div`
  display: grid;
  place-items: center;
  min-height: ${({ theme }) => theme.pxToRem(32)};
`;

const IconButtonGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const IconButtonSample = styled.div`
  display: inline-grid;
  justify-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;
