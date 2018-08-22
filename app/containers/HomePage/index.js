import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm, reset } from 'redux-form/immutable';

import { loadMessages } from 'containers/App/actions';
import injectSaga from 'utils/injectSaga';
import StyledButton from 'components/Button/StyledButton';
import '../../css/grid.css';
import saga from './saga';
import { createPost } from './actions';
import messages from './messages';
import Form from './Form';
import TextArea from './TextArea';

class HomePage extends React.PureComponent {
  onSubmit(values) {
    this.props.onSubmitForm(values);
  }

  renderField(field) {
    return (
      <div>
        <Helmet>
          <title>Home Page</title>
          <meta name="homepage" content="homepage" />
        </Helmet>
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
              className="form-control"
              type="text"
              {...field.input}
              placeholder={field.label}
            />
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field label="Your Message" name="body" component={this.renderField} />
        <StyledButton type="submit">Submit</StyledButton>
      </Form>
    );
  }
}

HomePage.propTypes = {
  handleSubmit: PropTypes.func,
  reset: PropTypes.func,
  onSubmitForm: PropTypes.func,
  fetchMessages: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: message => dispatch(createPost(message)),
    fetchMessages: () => dispatch(loadMessages()),
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withSaga,
  withConnect,
  reduxForm({
    form: 'messageForm',
    onSubmitSuccess: (result, dispatch, props) => {
      dispatch(reset(props.form));
    },
  }),
)(HomePage);
