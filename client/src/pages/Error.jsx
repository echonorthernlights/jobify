import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>{error.status} - {error.statusText}</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>{error.error.message}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Error;
