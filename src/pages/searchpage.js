import React, { useState } from 'react';
import Food from '../data/Food.json';

import { Grid } from '@material-ui/core';
import ResultCard from '../components/card';

// import { makeStyles } from '@material-ui/core/styles';

// const useStyle = makeStyles((theme) => ({

// }))

export default function Searchresult() {
  // const classes = useStyle();
  const [searchInput, updateInput] = useState('');
  const items = Food.filter((data) => {
    if (searchInput == null)
      return data
    if (data.title.toUpperCase().includes(searchInput.toUpperCase()))
      return data
  })
  return (
    <>
      <div id='search'>searchpage</div>
      <form>
        <input value={searchInput} onChange={e => updateInput(e.target.value)}></input>
      </form>
      <Grid container justify='space-evenly'>
        {items.map(e =>
          <Grid item xs={3} key={e.id}>{ResultCard(e)}</Grid>
        )}
      </Grid>
    </>
  )
}