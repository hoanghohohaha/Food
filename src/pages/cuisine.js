import React from "react";
import Food from '../data/Food.json';
import { Grid, Typography } from '@material-ui/core';
import ResultCard from '../components/card'


const Cuisine = ({ match }) => {
  const data = Food.filter((category) => {
    if (category.cuisine.includes(match.params.cuisineId.toUpperCase()))
      return category;
  });
  console.log(data);
  console.log(match.params.cuisineId);


  return (
    <>
      {match.isExact && (
        <>
          <Grid>
            <Typography>{match.params.cuisineId.toUpperCase()}</Typography>
          </Grid>
          <Grid container justify='space-evenly'>
            {data.map(e =>
              <Grid item xs={3} key={e.id}>{ResultCard(e)}</Grid>
            )}
          </Grid>
        </>
      )}
    </>
  );
};

export default Cuisine