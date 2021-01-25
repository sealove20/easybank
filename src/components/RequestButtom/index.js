import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

function RequestButtom({ buttonStyle }) {
  return <a className={`request-button ${buttonStyle}`} href="/">Request Invite</a>
}

RequestButtom.defaultProps = {
  buttonStyle: '',
}

RequestButtom.propTypes = {
  buttonStyle: PropTypes.string,
}

export default RequestButtom;