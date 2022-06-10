import React, { createContext, useContext, useState } from 'react';

export const RouteContext = React.createContext();
export const useRouteContext= ()=> useContext(RouteContext);
export const RouteProvider = ({children}) => {
  const [currentRoute, setCurrentRoute] = useState({
    'userId': 0,
    'geometry': [[0.0,0.0],[0.0,0.0]],
    'description': '',
    'title': '',
    'tags': ''
  });

  const addGeometry= () =>{

  }
  
  const addProperties= () =>{

  }

  const clearRoute= ()=> setCurrentRoute({
    'userId': 0,
    'geometry': [[0.0,0.0],[0.0,0.0]],
    'description': '',
    'title': '',
    'tags': ''
  });

  return (
    <RouteContext.Provider
      value={{ currentRoute, addProperties, addGeometry, clearRoute }}
    >
      {children}
    </RouteContext.Provider>
  );
};

export default RouteProvider;