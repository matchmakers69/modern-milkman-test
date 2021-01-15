import React, { Component, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import constants from './constants';
import { connect } from 'react-redux';
import { updateUI } from 'store/ui/actions';

class PageLoader extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidMount() {
    this._isMounted = true;
    this.updateUiComponents();
  }

  componentWillUnmount = () => {
    this._isMounted = false;
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  updateUiComponents() {
    const { ui, updateUI: renderUI } = this.props;

    if (this._isMounted) {
      if (ui) {
        renderUI({
          ...ui,
        });
      } else {
        renderUI({
          displayBanner: false,
        });
      }
    }
  }

  render() {
    const { ERROR_URL } = constants;
    const { hasError } = this.state;
    const { component, title } = this.props;

    if (hasError) {
      return (
        <div>
          <Redirect to={ERROR_URL} />
        </div>
      );
    }

    const LoadedComponent = component;
    return (
      <Suspense fallback={<div>Loading pages...</div>}>
        <Helmet title={title}>
          <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600;700&display=swap"
            rel="stylesheet"
          ></link>
        </Helmet>
        <LoadedComponent {...this.props} />
      </Suspense>
    );
  }
}

PageLoader.defaultProps = {
  title: 'Home Page',
  ui: {
    displayBanner: false,
  },
  updateUI: () => {},
};

PageLoader.propTypes = {
  title: PropTypes.string,
  component: PropTypes.instanceOf(Object).isRequired,
  ui: PropTypes.shape({
    displayBanner: PropTypes.bool,
  }),
  updateUI: PropTypes.func,
};
const mapDispatchToProps = dispatch => ({
  updateUI: objUI => dispatch(updateUI(objUI)),
});
export default withRouter(connect(null, mapDispatchToProps)(PageLoader));
