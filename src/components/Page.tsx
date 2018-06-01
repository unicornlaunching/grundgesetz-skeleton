import styled, { css } from 'utils/styled';

interface PageProps {
  docsPage?: boolean;
}

const Page = styled<PageProps, 'main'>('main')`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  position: relative;
  ${props =>
    props.docsPage
      ? css`
          padding: 0;
        `
      : css`
          padding: ${props.theme.dimensions.containerPadding}rem;
          padding-bottom: 3rem;
        `};
`;

export default Page;