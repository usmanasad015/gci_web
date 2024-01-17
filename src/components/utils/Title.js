import React from 'react';
import {Helmet} from "react-helmet";

function Title({ title }) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>GREEN CORPORATE INITIATIVE | {`${title}`}</title>
    </Helmet>
  );
}

export default Title;
