import React from 'react';
import { useMutation } from '@apollo/client';
import { UPVOTE, DOWNVOTE } from '../../utils/mutations';
import { Link } from 'react-router-dom';

const RouteItem = ({ userRoutes }) => {

  const upVote = async (vote) => {
    const [createVote, { error }] = useMutation(UPVOTE);
    try {
      await createVote({
        variables: { _id: id, vote: vote },
      });
    } catch (err) {
      console.error(error);
    }
  }

    const downVote = async (vote) => {
      const [createVote, { error }] = useMutation(DOWNVOTE);
      try {
        await createVote({
          variables: { _id: id, vote: vote },
        });
      } catch (err) {
        console.error(error);
      }
    }


  return (
    // will route to single route page
  <li>
    <Link className="btn" to={`/route/${route.id}`}>
      <h2>{userRoutes.title}</h2>
      <button className="btn btn-info" onClick={() => upVote(0)}>👍</button>
      <button className="btn btn-info" onClick={() => downVote(0)}>👎</button>
      </Link>
  </li>
  )
};

export default RouteItem;