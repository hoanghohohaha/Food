import React, { useState } from 'react';
import Food from '../data/Food.json';

import { Grid, Card, Avatar, CardContent, Typography, Paper, Switch } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './home';

function ResultCard(data) {
  return (
    <Paper>
      <Card>
        <Avatar src={data.img}></Avatar>
        <CardContent>
          <Typography>
            <Router>
              <Link to={`/search/` + data.id}>{data.title}</Link>
              <Route path='/search/:dataId'>
                <Home />
              </Route>
            </Router>

          </Typography>
          <Typography>
            {data.description}
          </Typography>
        </CardContent>
      </Card>
    </Paper>

  )
}

export default function Searchresult() {
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
      <Grid container>
        {items.map(e =>
          <Grid item xs={4} key={e.id}>{ResultCard(e)}</Grid>
        )}
      </Grid>
      <Router>

        {
          items.map(e =>
            <Route path='/search/:id' >
            </Route>
          )
        }

      </Router>
    </>
  )
}