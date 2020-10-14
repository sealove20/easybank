import React from 'react';

import './styles.scss';

export default function RequestButtom({ buttonStyle }) {
  return <a className={`request-button ${buttonStyle}`} href="/">Request Invite</a>
}