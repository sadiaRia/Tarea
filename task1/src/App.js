import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Form from './pages/Form'
import List from './pages/List'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <React.Fragment>
      <Header />
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={Form} />
            <Route path='/appointmentList' component={List} />
          </Switch>
        </div>
      </BrowserRouter>
      <Footer/>
    </React.Fragment>

  );
}

export default App;
