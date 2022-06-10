import React from "react";

import { QUERY_USER } from "../../utils/queries";
import { UPVOTE, DOWNVOTE } from '../../utils/mutations';
import {Icon} from '@iconify/react';


import{ useQuery, useMutation } from '@apollo/client';


function RouteInfo({info}) {
  const {description, title, difficultyLevel, userId, tags, votes}= info;
  console.log(userId);
  const {data, loading}=useQuery(QUERY_USER,{
    variables:{
      "userId": userId
    }});

    let username;
    if(!loading){
        console.log(data);
        username= data.user.username
    }

  return (
    <section className="routeInfoBox">
      <div className="topHeader">
        <h2 className = "routeName">{title}</h2>
        <div className="votes">
          <p>{votes}</p>
        <Icon icon="bx:upvote" width="35"className="upvote"/>
        <Icon icon="bx:downvote" width="35" className="downvote" />
      </div>
      </div>
      <div className="routeInformation">
        <p>{description}</p>
        <ul>
          <li>Difficulty: {difficultyLevel}</li>
          <li>Created By: {username}</li>
          <li>Tags: {tags}</li>
        </ul>
      </div>
    </section>
   )
}

 export default RouteInfo; 