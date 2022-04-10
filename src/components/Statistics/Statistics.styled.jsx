import styled from '@emotion/styled';

export const StatisticsList = styled.ul`
  padding: 20px;
  border: 2px solid blue;
  border-radius: 8px;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  :not(:last-child) {
    margin-bottom: 8px;
  }
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
