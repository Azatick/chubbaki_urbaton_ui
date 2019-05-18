import { styled } from "src/styles";

export const Wrapper = styled.div`
  background: white;
  min-height: 100vh;
`;

interface ContentProps {
  headerHeight?: string | number;
}

export const Content = styled.div`
  min-height: 100%;
  height: 1px;
  ${({ headerHeight }: ContentProps) => `
    min-height: calc(100vh - ${headerHeight}px);
  `}
` as React.ComponentType<ContentProps>;
