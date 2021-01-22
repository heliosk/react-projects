import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { history } from './_helpers';

function App() {
  return (
    <div className="jumbotron">
      <div className="container">
        <div className="col-md-8 offset-md-2"></div>
      </div>
    </div>
  );
}

export default App;
