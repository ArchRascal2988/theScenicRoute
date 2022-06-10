import React from 'react';
import { useMutation } from '@apollo/client';
import { UPVOTE, DOWNVOTE } from '../../utils/mutations';
import { Link } from 'react-router-dom';

const RouteItem = ({ userRoutes }) => {

  // const [createVote, { error }] = useMutation(UPVOTE);

  // const [createVote, { error }] = useMutation(DOWNVOTE);


  // const upVote = async (vote) => {

  //   try {
  //     await createVote({
  //       variables: { _id: id, vote: vote },
  //     });
  //   } catch (err) {
  //     console.error(error);
  //   }
  // }

  //   const downVote = async (vote) => {
  //     try {
  //       await createVote({
  //         variables: { _id: id, vote: vote },
  //       });
  //     } catch (err) {
  //       console.error(error);
  //     }
  //   }


  return (
    // will route to single route page
  <li>
    <Link className="btn" to={'/'}>
      <h2>ex title</h2>
      <button className="btn btn-info" >👍</button>
      <button className="btn btn-info" >👎</button>
      </Link>
  </li>
  )
};

export default RouteItem;