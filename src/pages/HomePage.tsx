import { Icon, Text, type IconName } from "@/components";
import styled from "@emotion/styled";

import type { ColorToken } from "@/styles/tokens";

const ICON_SIZES = [24, 20, 16, 12] as const;

const ICON_EXAMPLES: ReadonlyArray<{ icon: IconName; color?: ColorToken }> = [
  { icon: "chevron-down-lined" },
  { icon: "chevron-left-lined" },
  { icon: "chevron-right-lined" },
  { icon: "chevron-up-lined" },
  { icon: "delete-lined", color: "text.danger" },
  { icon: "help-circle-filled", color: "bg.brand" },
  { icon: "home-filled" },
  { icon: "home-lined" },
  { icon: "list-filled" },
  { icon: "list-lined" },
  { icon: "search-lined" },
  { icon: "user-filled" },
  { icon: "user-lined" },
];

export const HomePage = () => {
  return (
    <Section>
      <Text font="display-l">안녕</Text>
      <Text font="heading-l-b">안녕</Text>
      <Text font="heading-m-b">안녕</Text>
      <Text font="heading-m-m">안녕</Text>
      <Text font="heading-m-r">안녕</Text>
      <Text font="heading-s-m">안녕</Text>
      <Text font="body-l-sb">안녕</Text>
      <Text font="body-m-sb">안녕</Text>
      <Text font="body-s-sb">안녕</Text>
      <Text font="body-s-r">안녕</Text>
      <Text font="detail-m-m">안녕</Text>
      <Text font="detail-m-r">안녕</Text>
      <Text font="detail-s-r">안녕</Text>
      <Heading>
        <Label>Foundation</Label>
        <Title>Router, API, MSW, and styling are ready to evolve.</Title>
        <Description>
          This workspace now boots with the v2 shell, confirmed API types,
          refresh-aware axios clients, and a minimal route layout that can
          absorb the new page architecture.
        </Description>
      </Heading>
      <IconShowcase>
        <Text as="h3" font="heading-s-m">
          Icons
        </Text>
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
      </IconShowcase>
      <Grid>
        <Card>
          <CardTitle>API types</CardTitle>
          <CardCopy>
            Auth, user, event, application, attendance, matching, and comment
            types are ready.
          </CardCopy>
        </Card>
        <Card>
          <CardTitle>Axios core</CardTitle>
          <CardCopy>
            Public and private clients share config and refresh expired tokens
            once.
          </CardCopy>
        </Card>
        <Card>
          <CardTitle>MSW hooks</CardTitle>
          <CardCopy>
            Mock handlers remain available behind `VITE_ENABLE_MSW=true` in
            development.
          </CardCopy>
        </Card>
        <Card>
          <CardTitle>Routing shell</CardTitle>
          <CardCopy>
            Only `/`, `/auth/*`, and `*` exist so the new IA can be designed
            cleanly.
          </CardCopy>
        </Card>
      </Grid>
    </Section>
  );
};

const Section = styled.section`
  display: grid;
  gap: 18px;
  padding: 28px;
  border-radius: 32px;
  background: ${({ theme }) => theme.color.bg.elevated};
  border: 1px solid ${({ theme }) => theme.color.border.subtle};
  box-shadow: 0 20px 60px ${({ theme }) => theme.color.bg.weak};
`;

const Heading = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Label = styled.span`
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.text.tertiary};
`;

const Title = styled.h2`
  margin: 0;
  font-size: clamp(2rem, 4vw, 3.4rem);
  line-height: 0.95;
  max-width: 12ch;
`;

const Description = styled.p`
  margin: 0;
  max-width: 58ch;
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: 1rem;
`;

const IconShowcase = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.bg.subtle};
  border: 1px solid ${({ theme }) => theme.color.border.subtle};
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 14px;
`;

const Card = styled.article`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  padding: 18px;
  border-radius: 22px;
  background: ${({ theme }) => theme.color.bg.subtle};
  border: 1px solid ${({ theme }) => theme.color.border.subtle};
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
`;

const CardCopy = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text.tertiary};
`;
