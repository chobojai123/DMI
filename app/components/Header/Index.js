import React from 'react';
import { FormattedMessage } from 'react-intl';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

class Header extends React.Component {
  render() {
    return (
      <div>
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/messages" primary="true">
            <FormattedMessage {...messages.displayMsgs} />
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
