import { route } from 'express/lib/application';
import React from 'react';
import RouteItem from '../routeInfo/index'

const RouteItem = ({ routes }) => {

  // const handleVote = async (techNum) => {
  //   try {
  //     const res = await createVote({ id, techNum });

  //     if (!res.ok) {
  //       throw new Error('Could not vote');
  //     }

  //     const matchup = await res.json();
  //     console.log(matchup);
  //     setMatchup(matchup);
  //   } catch (err) {
  //     console.error(err);
  //   }

  //   const handleVote = async (techNum) => {
  //     try {
  //       const res = await createVote({ id, techNum });
  
  //       if (!res.ok) {
  //         throw new Error('Could not vote');
  //       }
  
  //       const matchup = await res.json();
  //       console.log(matchup);
  //       setMatchup(matchup);
  //     } catch (err) {
  //       console.error(err);
  //     }



  return (
      <h2>{route.title}</h2>
      // <div>
      // <p onClick={}> ✏️</p>
      // <p onClick={}> 🗑️</p>
      // </div>

  )
};

export default RouteItem;