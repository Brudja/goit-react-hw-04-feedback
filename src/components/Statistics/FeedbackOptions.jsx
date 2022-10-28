import PropTypes from 'prop-types';

export const FeedbackOpthions = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <div style={{
          fontSize: '20px',
        }}>
          <p>Statistics</p>
          <ul style={{
          padding: '10px',
        }}>
            <li>Good {good}</li>
            <li>Neutral {neutral}</li>
            <li>Bad {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {positivePercentage}</li>
          </ul>
        </div>  
    );
  }

  FeedbackOpthions.propsTypes ={
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  }