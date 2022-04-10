import {
  // FeedbackContainer,
  // FeedbackTitle,
  ButtonList,
  ButtonItem,
  FeedbackButton,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map(option => (
        <ButtonItem key={option}>
          <FeedbackButton type="button" onClick={onLeaveFeedback}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </FeedbackButton>
        </ButtonItem>
      ))}
    </ButtonList>
  );
};
