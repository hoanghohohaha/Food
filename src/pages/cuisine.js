import React from "react";
import Food from '../data/Food.json';
import { Grid, Typography, Button } from '@material-ui/core';
import ResultCard from '../components/card';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  text: {
    fontSize: theme.spacing(5),
    margin: '3vh auto',
    fontWeight: 'bold',
    fontFamily: `'Courier New', Courier, monospace`,
  },
  btn: {
    fontFamily: `'Courier New', Courier, monospace`,
    fontSize: '2vh',
    transition: 'all .3s ease',
    marginBottom: '7vh',
    '&:hover': {
      fontSize: '4vh',
      textDecoration: 'underline',
      background: 'white',

    },
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
          <Grid container spacing={4} justify='space-evenly'>
            {data.map(e =>
              <Grid item xs={4} key={e.id}><ResultCard props={e} /></Grid>
            )}
          </Grid>
          <Grid>
            <Button href='/' className={classes.btn}>Home</Button>
          </Grid>
        </>
      )}
    </>
  );
};

export default Cuisine