import React from 'react';
import RouteItem from '../routeInfo/index'

// Accept an array of routes as a prop
const RouteList = ({ routes }) => {
  // Create a list of rendered IssueItems by using the map method on `routes`
  const renderedList = routes.map((route) => {
    return <RouteItem key={route.id} route={route.title} />;
  });

  // Return our array of RouteItems wrapped inside a parent div
  return (
      <section className='userRoutes'>
        <div className="ui relaxed divided list">{renderedList}</div>;
      </section>
  )
};

export default RouteList;  