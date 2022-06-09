import './App.css';
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import LogSign from './pages/LogSign';
import Home from './pages/Home';
import Dash from './pages/Dash';
import Create from './pages/Create';
import SRoute from './pages/SRoute';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

<<<<<<< HEAD





=======
import { setContext } from '@apollo/client/link/context';
>>>>>>> 873e3cfb6a0a0e77665b63fc717f7239e375248e

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
<<<<<<< HEAD
            <Route 
=======

           <Route 

>>>>>>> 873e3cfb6a0a0e77665b63fc717f7239e375248e
              path="/dashboard" 
              element={<Dash />} 
            />
            <Route 
              path="/create" 
              element={<Create />} 
            />
            <Route 
              path="/route/:routeId" 
              element={<SRoute />} 
            />
            <Route
            path= '/login'
            element={<LogSign type='login' />}
            />

          </Routes>
    </Router>
    </ApolloProvider>
  );
}

export default App;