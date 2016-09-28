import React from 'react';

function Contacts() {
  return (
    <div className="contacts">
      <div className="contacts__content">
        <h2>Контакты</h2>
        <div className="social">
          <a className="social__vk" href="https://vk.com/serdimoa/"><img src="/images/vk-social-network-logo.svg" alt="https://vk.com/serdimoa/" height={50} /></a>
          <a className="social__gh" href="https://github.com/serdimoa/"><img src="/images/github.svg" height={50} alt="https://github.com/serdimoa/" /></a>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
