import React from 'react';
import PropTypes from 'prop-types';

const Notofication = ( { notice } ) => (
    <div>
        <h2>{notice}</h2>
    </div>
)

Notification.propTypes = {
    notice: PropTypes.string.isRequired
}

export default Notofication;