import React from 'react';
import { useQuery } from '@apollo/client';
import RouteItem from '../routeItem/index'


import { QUERY_USER_ROUTES, QUERY_ROUTES } from "../../utils/queries";
import Auth from '../../utils/auth';





// Accept an array of routes as a prop
// Accept an array of routes as a prop
const RouteList = ({routes}) => {

  const userData= Auth.getUser();

  const {loading, data}= useQuery(QUERY_USER_ROUTES,{
    variables:{
      "userId": userData.data._id
    }})
  let honeymoonRoutes;
  if(!loading){
    honeymoonRoutes = data?.userRoutes || ['error']
    console.log(honeymoonRoutes);
  }

  // Create a list of rendered IssueItems by using the map method on `routes`

  if(loading){
    return(
      <div>
          <h1>loading...</h1>
      </div>
    )
  }

  const renderedList = honeymoonRoutes.map((route, index) => {
    return (
          <RouteItem key={index} route={route} />
          )
  });

  // Return our array of RouteItems wrapped inside a parent div
  return (
      <section className='userRoutes'>
      
        <div className="ui relaxed divided list">
          <ul>
          {renderedList}
          </ul>
        </div>
        <a href='/create' className='createBtn'>Create a new route +</a>
      </section>
  )
};

export default RouteList;  