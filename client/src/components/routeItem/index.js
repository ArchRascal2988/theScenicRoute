import { route } from 'express/lib/application';
import React from 'react';
import RouteItem from '../routeInfo/index'

const RouteItem = ({ routes }) => {

  return (
      <h2>{route.title}</h2>
      <div>
      <p onClick={}> ✏️</p>
      <p onClick={}> 🗑️</p>
      </div>

  )
};

export default RouteItem;