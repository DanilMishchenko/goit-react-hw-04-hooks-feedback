import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StatisticsList,
  StatisticsItem,
  StatisticsText,
  StatisticsNumber,
} from './Statistics.styled';

export class Statistics extends Component {
  static propTypes = {
    // good: PropTypes.number,
    // negative: PropTypes.number,
    // bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
  };

  render() {
    const { options, total, positivePercentage } = this.props;
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
  }
}
