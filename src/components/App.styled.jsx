import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding: 96px;
  background-color: #eee8e8;
`;

export const FeedbackContainer = styled.div`
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

export const FeedbackTitle = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  color: blue;
`;

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

export const StatisticsContainer = styled.div`
  max-width: 200px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 8px;
  border: 3px solid blue;
  border-radius: 20px;
  background-color: yellow;
`;

export const StatisticsTitle = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  color: blue;
`;

export const StatisticsList = styled.ul`
  padding: 20px;
  border: 2px solid blue;
  border-radius: 8px;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatisticsText = styled.p`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: bold;
  color: blue;
`;

export const StatisticsNumber = styled.p`
  width: 60px;
  border: 0px;
  text-align: center;
  border-radius: 4px;
  background-color: blue;
  color: yellow;
`;
