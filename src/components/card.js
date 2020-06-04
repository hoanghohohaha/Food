import React from 'react';
import { Card, Avatar, CardContent, Typography, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: '1vh auto',
  },
  card: {
    height: theme.spacing(60),
    margin: '3vh 0',
    padding: theme.spacing(3),
  },
  title: {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold',
    fontFamily: `'Courier New', Courier, monospace`,
    transition: 'all .3s ease',
    '&:hover': {
      fontSize: 'larger'
    },
  },
  des: {
    fontFamily: `'Courier New', Courier, monospace`,
    color: '#484645',
  }
}))

function ResultCard(data) {
  const classes = useStyle();
  return (
    <Paper>
      <Card className={classes.card}>
        <Avatar className={classes.avatar} src={data.img}></Avatar>
        <CardContent>
          <Typography>
            <Link className={classes.title} to={`/meal/` + data.id}>{data.title}</Link>
          </Typography>
          <Typography className={classes.des}>
            {data.description}
          </Typography>
        </CardContent>
      </Card>
    </Paper >
  )
}

export default ResultCard