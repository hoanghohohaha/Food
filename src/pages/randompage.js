import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Randommeal from '../components/randommeal';
import Food from '../data/Food.json'
import { Button, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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

export default function Random() {
  var k = Math.floor(Math.random() * Food.length);
  var detail = Food[k];
  const classes = useStyles()
  return (
    <>
      <div id='random' style={{ margin: '5vh 15vh' }}>
        <Randommeal props={detail} />
        <Grid>
          <Button className={classes.btn} onClick={() => { window.location.reload(); }}>Again</Button>
        </Grid>
        <Grid>
          <Button href='/' className={classes.btn}>Home</Button>
        </Grid>
      </div>
    </>
  )
}