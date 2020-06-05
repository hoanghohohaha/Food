import React from "react";
import Food from '../data/Food.json';
import { Grid, Typography } from '@material-ui/core';
import ResultCard from '../components/card';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  text: {
    fontSize: theme.spacing(5),
    margin: '3vh auto',
    fontWeight: 'bold',
    fontFamily: `'Courier New', Courier, monospace`,
  }
}))


const Cuisine = ({ match }) => {
  const data = Food.filter((category) => {
    if (category.cuisine.includes(match.params.cuisineId.toUpperCase()))
      return category;
  });
  console.log(data);
  console.log(match.params.cuisineId);
  const classes = useStyle()

  return (
    <>
      {match.isExact && (
        <>
          <Grid>
            <Typography className={classes.text}>{match.params.cuisineId.toUpperCase()}</Typography>
          </Grid>
          <Grid container justify='space-evenly'>
            {data.map(e =>
              <Grid item xs={3} key={e.id}><ResultCard props={e} /></Grid>
            )}
          </Grid>
        </>
      )}
    </>
  );
};

export default Cuisine