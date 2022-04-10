import {
  StatisticsList,
  StatisticsItem,
  StatisticsText,
  StatisticsNumber,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsList>
      <StatisticsItem>
        <StatisticsText>Good</StatisticsText>
        <StatisticsNumber>{good}</StatisticsNumber>
      </StatisticsItem>
      <StatisticsItem>
        <StatisticsText>Neutral</StatisticsText>
        <StatisticsNumber>{neutral}</StatisticsNumber>
      </StatisticsItem>
      <StatisticsItem>
        <StatisticsText>Bad</StatisticsText>
        <StatisticsNumber>{bad}</StatisticsNumber>
      </StatisticsItem>
      <StatisticsItem>
        <StatisticsText>Total</StatisticsText>
        <StatisticsNumber>{total}</StatisticsNumber>
      </StatisticsItem>
      <StatisticsItem>
        <StatisticsText>PositiveFeedback</StatisticsText>
        <StatisticsNumber>{positivePercentage}%</StatisticsNumber>
      </StatisticsItem>
    </StatisticsList>
  );
};
