import React from 'react';
import { Link } from 'react-router';

function FooterPortfolioHelper() {
  return (
    <div className="footer__portfolio clearfix">
      <Link
        to="aboutMe"
        className="footer__portfolio--link"
      >
        Прочитать подробную информацию Обо мне 
      </Link>
    </div>
  );
}

export default FooterPortfolioHelper;
