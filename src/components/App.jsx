import React, { Component } from 'react';
import {
  Container,
  FeedbackContainer,
  FeedbackTitle,
  ButtonList,
  ButtonItem,
  FeedbackButton,
  StatisticsContainer,
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
  StatisticsText,
  StatisticsNumber,
} from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    const text = e.target.textContent.toLowerCase();
    this.setState(prevState => ({ [text]: prevState[text] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, state) => acc + state, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback()
      ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
      : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <FeedbackContainer>
          <FeedbackTitle>Please leave feedback</FeedbackTitle>
          <ButtonList>
            {Object.keys(this.state).map(option => (
              <ButtonItem key={option}>
                <FeedbackButton
                  type="button"
                  onClick={e => this.handleClick(e)}
                >
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </FeedbackButton>
              </ButtonItem>
            ))}
          </ButtonList>
        </FeedbackContainer>
        <StatisticsContainer>
          <StatisticsTitle>Statistics</StatisticsTitle>
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
              <StatisticsNumber>{this.countTotalFeedback()}</StatisticsNumber>
            </StatisticsItem>
            <StatisticsItem>
              <StatisticsText>PositiveFeedback</StatisticsText>
              <StatisticsNumber>
                {this.countPositiveFeedbackPercentage()}%
              </StatisticsNumber>
            </StatisticsItem>
          </StatisticsList>
        </StatisticsContainer>
      </Container>
    );
  }
}
