import { route } from 'express/lib/application';
import React from 'react';
import RouteItem from '../routeInfo/index'

const RouteItem = ({ routes }) => {

  return (
    <section>
      <h2>{route.title}</h2>
      <div>
      <p onClick={}> ✏️</p>
      <p onClick={}> 🗑️</p>
      </div>
    </section>
  )
};

export default RouteItem;