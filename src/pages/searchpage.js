import React, { useState } from 'react';
import Food from '../data/Food.json';

import { Grid, Typography } from '@material-ui/core';
import ResultCard from '../components/card';

import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  searchbar: {
    width: theme.spacing(80),
    height: theme.spacing(8),
    fontSize: theme.spacing(5),
    textAlign: 'center',
    fontFamily: `'Courier New', Courier, monospace`,
  },
  searchcontainer: {
    height: '100px'
  },
  searchtext: {
    fontSize: theme.spacing(5),
    margin: '3vh auto',
    fontWeight: 'bold',
    fontFamily: `'Courier New', Courier, monospace`,
  }
}))

export default function Searchresult() {
  const classes = useStyle();
  const [searchInput, updateInput] = useState('');
  const items = Food.filter((data) => {
    if (searchInput == null)
      return data
    if (data.title.toUpperCase().includes(searchInput.toUpperCase()))
      return data
  })
  return (
    <>
      <Typography id='search' className={classes.searchtext}>FOODRECIPE</Typography>
      <Grid container className={classes.searchcontainer} justify='center' alignContent='center'>
        <form>
          <input placeholder='Find your appetite' className={classes.searchbar} value={searchInput} onChange={e => updateInput(e.target.value)}></input>
        </form>
      </Grid>
      <Grid container justify='space-evenly'>
        {items.map(e =>
          <Grid item xs={3} key={e.id}><ResultCard props={e} /></Grid>
        )}
      </Grid>
    </>
  )
}