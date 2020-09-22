import React from "react";

const BallRating = ({ rating }) => {
  const balls = [];

  for(let i=0; i <= 5; i++) {
  if (i <= rating) {
  balls.push(<i className="fas fa-tennis-ball text-warning"></i>);
  }
  } 

  return <>{balls}</>;
};
export default BallRating;