import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

import './styles.scss';

export default function BackToTopButton() {
  return <button className="back_to_top_button" onClick={() => scroll.scrollToTop()}>TOP</button>
}