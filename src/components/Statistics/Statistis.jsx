import PropTypes from 'prop-types';


export const Statistics = ({chenge, appState}) => {
    return (
      <div style={{
        fontSize: '20px',
        padding: '10px',
      }}>
        <h1>Please leave feedback</h1>
        <ul>
        {appState.map(stat => (<li key={stat}>
            <button name={stat} onClick={chenge}>{stat.toUpperCase()}</button>
          </li>))}
        </ul>
      </div>
    );
  }

  Statistics.propTypes ={
    chenge: PropTypes.func.isRequired,
    appState: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }