import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { loadMessages, messagesLoaded } from 'containers/App/actions';
import { createPost } from './actions.js';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';

import messages from './messages';
import Form from './Form';
import Input from './Input';
import TextArea from './TextArea';
import Label from './Label';
import StyledButton from '../../components/Button/StyledButton';
import '../../css/grid.css';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchMessages();
  }

  handleChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmitForm(this.state.message);
    this.setState({ message: '' });
  }

  render() {
    return (
      <div className="row">
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <Form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col span-3-of-3">
              <h2>
                <FormattedMessage {...messages.textAreaMessage} />
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col span-3-of-3">
              <TextArea
                type="text"
                name="firstname"
                placeholder="Your message"
                onChange={this.handleChange}
                value={this.state.message}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col span-1-of-3">
              <StyledButton type="submit">Post it!</StyledButton>
            </div>
          </div>
        </Form>
      </div>
    );
  }
}

HomePage.propTypes = {
  onSubmitForm: PropTypes.func,
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmitForm: message => dispatch(createPost(message)),
    fetchMessages: () => dispatch(loadMessages()),
  };
};

const withConnect = connect(
  null,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
