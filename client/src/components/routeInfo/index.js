import React from "react";
import "./routeInfo.css"
import { Icon } from '@iconify/react';

function RouteInfo(props) {
  console.log(props.data);
  
  return (
    <section className="routeInfoBox">
      <div className="topHeader">
        <h2 className = "routeName">ex name</h2>
        <div className="votes">
        <Icon icon="bx:upvote" className="upvote"/>
        <Icon icon="bx:downvote" className="downvote" />
      </div>
      </div>
      <div>
        <ul>
          <li>Difficulty: Ez</li>
          <li>Length: Ez</li>
          <li>Created By: Ez</li>
          <li>Created On: Ez</li>
          <li>Tags: Ez</li>
        </ul>
        <h5>Reviews</h5>
      </div>
    </section>
   )
}

 export default RouteInfo; 