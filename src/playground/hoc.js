import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>Detail : {props.info}</p>
  </div>
);

const requireAuthentication = (WrappedComponent) => {
  return (props) => {
    return (
      <div>
        {props.isAuthenticated ? (
          <p>authenticated</p>
        ) : (
          <p>You need to be authenticated</p>
        )}
        <WrappedComponent {...props} />
      </div>
    );
  };
};

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(
  <AuthInfo isAuthenticated={false} info='Information of bla bla' />,
  document.getElementById('app')
);
