import styled from '@emotion/styled';

export const SectionContainer = styled.div`
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 8px;
  border: 3px solid blue;
  border-radius: 20px;
  background-color: yellow;

  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const SectionTitle = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  color: blue;
`;
