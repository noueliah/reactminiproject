import React from 'react';
import ErrorPage from './ErrorPage';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import PropTypes from 'prop-types';

// This defines what component is rendered on each URL

function AppRouter({ routePath }) {
  // le paso por parámetro (prop) el objeto URL(path)
  let componentToRender;

  switch (routePath) {
    case '/login':
      componentToRender = LoginPage;
      break;
    case '/error':
      componentToRender = ErrorPage;
      break;
    case '/home':
    default:
      componentToRender = HomePage;
      break;
  }
  return <>{componentToRender()}</>;
}

AppRouter.propTypes = {
  routePath: PropTypes.string
};

export { AppRouter };
