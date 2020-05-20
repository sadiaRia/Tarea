import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Form from './pages/Form'
import List from './pages/List'

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={List} />
            <Route path='/appointment' component={Form} />
          </Switch>
        </div>
      </BrowserRouter>
    </React.Fragment>

  );
}

export default App;
