import React from 'react';
import { FormattedMessage } from 'react-intl';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

function Header() {
  return (
    <div>
      <NavBar>
        <HeaderLink to="/" primary="true">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/showMessages">
          <FormattedMessage {...messages.displayMsgs} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
