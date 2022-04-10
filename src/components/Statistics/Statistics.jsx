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
    good: PropTypes.number,
    negative: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
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
  }
}
