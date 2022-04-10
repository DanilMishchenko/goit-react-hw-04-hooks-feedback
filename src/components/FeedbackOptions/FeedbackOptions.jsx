import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ButtonList,
  ButtonItem,
  FeedbackButton,
} from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <ButtonList>
        {Object.keys(options).map(option => (
          <ButtonItem key={option}>
            <FeedbackButton type="button" onClick={onLeaveFeedback}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </FeedbackButton>
          </ButtonItem>
        ))}
      </ButtonList>
    );
  }
}
