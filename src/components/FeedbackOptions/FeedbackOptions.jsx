import PropTypes from 'prop-types';
import {
  ButtonList,
  ButtonItem,
  FeedbackButton,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
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
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
