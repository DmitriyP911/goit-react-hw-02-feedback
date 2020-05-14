import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ( { changeFeedback } ) => {
    return (
        <div className="buttons">
            <button type="button" name="good" onClick={changeFeedback}>Good</button>
            <button type="button" name="neutral" onClick={changeFeedback}>Neutral</button>
            <button type="button" name="bad" onClick={changeFeedback}>Bad</button>
        </div>
    )
}

FeedbackOptions.propTypes = {
    changeFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;