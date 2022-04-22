import PropTypes from 'prop-types';
import {
  StatisticsList,
  StatisticsItem,
  StatisticsText,
  StatisticsNumber,
} from './Statistics.styled';

export const Statistics = ({ options, total, positivePercentage }) => {
  return (
    <StatisticsList>
      {Object.keys(options).map(option => (
        <StatisticsItem key={option}>
          <StatisticsText>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </StatisticsText>
          <StatisticsNumber>{options[option]}</StatisticsNumber>
        </StatisticsItem>
      ))}
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

Statistics.propTypes = {
  options: PropTypes.objectOf(PropTypes.number),
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
