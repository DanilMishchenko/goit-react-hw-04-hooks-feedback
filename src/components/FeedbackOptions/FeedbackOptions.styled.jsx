import styled from '@emotion/styled';

export const ButtonList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const ButtonItem = styled.li`
  :not(:last-child) {
    margin-right: 20px;
  }
`;

export const FeedbackButton = styled.button`
  padding: 8px 24px;
  border: 0px;
  cursor: pointer;
  border-radius: 8px;
  background-color: blue;
  color: yellow;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :focus {
    font-weight: bold;
    background-color: yellow;
    color: blue;
    outline: 2px solid blue;
  }
`;
