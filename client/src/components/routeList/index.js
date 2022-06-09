import React from 'react';
import { useQuery } from '@apollo/client';
import RouteItem from '../routeInfo/index'
import { QUERY_ME, QUERY_ROUTES, QUERY_USER } from "../utils/queries";

// Accept an array of routes as a prop
const RouteList = ({ routes }) => {

  const { loading, data } = useQuery(QUERY_ROUTES);
  const honeymoonRoutes = data?.routes || ['error']
  console.log(honeymoonRoutes);

  
  // Create a list of rendered IssueItems by using the map method on `routes`
  // const renderedList = routes.map((route) => {

  //   return <RouteItem key={route.id} route={route.title} />;
  // });

  // Return our array of RouteItems wrapped inside a parent div
  return (
      <section className='userRoutes'>
        {/* <div className="ui relaxed divided list">{renderedList}</div> */}
        <a href='/create' className='createBtn'>Create a new route +</a>
      </section>
  )
};

export default RouteList;  