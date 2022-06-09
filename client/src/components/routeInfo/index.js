import React from "react";

import { QUERY_USER } from "../../utils/queries";
import { UPVOTE, DOWNVOTE } from '../../utils/mutations';

import{ useQuery, useMutation } from '@apollo/client';


function RouteInfo({info}) {
  const {description, title, difficultyLevel, userId, tags, votes}= info;
  console.log(description);

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
    <section>
      <div>
        <h2 className = "routeName">{title}</h2>
        <p>{votes}</p>
      </div>
      <div>
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