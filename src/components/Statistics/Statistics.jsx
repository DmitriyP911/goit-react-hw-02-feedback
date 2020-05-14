import React from 'react';
import PropTypes from 'prop-types';

const Statistic = ( { state, countPositiveFeedbackPercentage, countTotalFeedback } ) => {
    const { good, neutral, bad } = state;
    return (
        <ul className="list">
            <li className="listItem">Good: {good}</li>
            <li className="listItem">Neutral: {neutral}</li>
            <li className="listItem">Bad: {bad}</li>
            <li className="listItem">Total: {countTotalFeedback}</li>
            <li className="listItem">Percentage: {countPositiveFeedbackPercentage}%</li>
        </ul >
    )
}

Statistic.propTypes = {
    state: PropTypes.shape( {
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    } ),
    countTotalFeedback: PropTypes.number.isRequired,
    countPositiveFeedbackPercentage: PropTypes.number.isRequired
}

export default Statistic;