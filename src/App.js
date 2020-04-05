import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Movies from './components/movies.jsx';
import MovieForm from './components/movieForm';
import Customers from './components/customers/customers.jsx';
import Rentals from './components/rentals/rentals.jsx';
import NotFound from './components/notFound/notFound.jsx';
import Navbar from './components/navbar.jsx';
import LoginForm from './components/loginForm.jsx';
import RegisterForm from './components/registerForm.jsx';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main role="main" className="container">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
