import React from 'react';
import { useQuery } from '@apollo/client';
import RouteItem from '../routeInfo/index'
import { QUERY_USER_ROUTES, QUERY_ROUTES } from "../../utils/queries";

// Accept an array of routes as a prop
const RouteList = () => {

  const { loading, data } = useQuery(QUERY_ROUTES);
  let honeymoonRoutes;
  if(loading){
    honeymoonRoutes = data?.routes || ['error']
    console.log(honeymoonRoutes);
  }

  // Create a list of rendered IssueItems by using the map method on `routes`
  const renderedList = honeymoonRoutes.map((route) => {
    return <ui>
          <RouteItem key={route.id} route={route.title} />;
          </ui> 
  });

  // Return our array of RouteItems wrapped inside a parent div
  return (
      <section className='userRoutes'>
        <ui>
        <div className="ui relaxed divided list">{renderedList}</div>
        </ui>
        <a href='/create' className='createBtn'>Create a new route +</a>
      </section>
  )
};

export default RouteList;   