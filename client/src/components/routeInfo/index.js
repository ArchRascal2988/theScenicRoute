import React from "react";


function RouteInfo({description, difficultyLevel, notes, tags, title, userId, votes}) {
  return (
    <section>
      <div>
        <h2 className = "routeName">{title}</h2>
        <p>{votes}</p>
        <p>upArr</p>
        <p>downArr</p>
      </div>
      <div>
        <p>{description}</p>
        <ul>
          <li>Difficulty: {difficultyLevel}</li>
          <li>Created By: User (Need to do query using user ID)</li>
          <li>Tags: {tags}</li>
        </ul>
      </div>
    </section>
 )};

 export default RouteInfo; 