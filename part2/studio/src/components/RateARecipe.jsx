import React from 'react';

const stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function GiveRating({ rating }) {
  return <h3>{stars[rating - 1]}</h3>;
}

function RateARecipe(props) {
  const isValid = props.rating > 0 && props.rating <= 5;

  return isValid ? <GiveRating rating={props.rating} /> : null;
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
