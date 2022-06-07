import './App.css';
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LogSign from './pages/LogSign';
import Home from './pages/Home';
import Dash from './pages/Dash';
// import Create from './pages/Create';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import {setContext} from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
            <Route 
              path="/dashboard" 
              element={<Dash />} 
            />
            {/* <Route 
              path="/create" 
              element={<Create />} 
            /> */}
            <Route
            path= '/login'
            element={<LogSign type='login' />}
            />
            <Route
            path= '/signup'
            element={<LogSign type='signup' />}
            />
          </Routes>
    </Router>
    </ApolloProvider>
  );
}

export default App;
