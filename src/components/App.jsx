import { Statistics } from './Statistics/Statistis';
import { useState } from 'react';
import { FeedbackOpthions } from './Statistics/FeedbackOptions';
import { Notification } from './Statistics/Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleChange = event => {
    switch (event.target.name) {
      case 'good':
        setGood(prevstate => prevstate + 1);
        break;
      case 'neutral':
        setNeutral(prevstate => prevstate + 1);
        break;
      case 'bad':
        setBad(prevstate => prevstate + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return (good / countTotalFeedback()) * 100;
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
        padding: '10px',
      }}
    >
      <div
        style={{
          fontSize: '20px',
        }}
      >
        <Statistics chenge={handleChange} appState={["good", "neutral", "bad"]} />
      </div>
      {countTotalFeedback() ? (
        <div>
          <FeedbackOpthions
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </div>
      ) : (
        <div>
          <Notification message="There is no feedback" />
        </div>
      )}
    </div>
  );
};
