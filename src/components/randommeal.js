import React from 'react'
import { Button, Grid, Typography, Link, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Food from '../data/Food.json'

const useStyles = makeStyles((theme) => ({
  RandomImg: {
    borderRadius: '100%',
    width: theme.spacing(50),
    height: theme.spacing(50),
    margin: 'auto'
  },
  steps: {
    width: '90%',
    padding: '30px',
    height: 'initial',
    background: 'rgb(0, 0, 0, .1)',
    display: 'flex',
    flexFlow: 'column nowrap',
    border: 'black 2vh solid',
    margin: 'auto',
    marginTop: '6vh',
  },
  description: {
    marginTop: '6vh',
    fontFamily: `'Courier New', Courier, monospace`
  },
  header: {
    fontSize: '250%',
    fontWeight: 'bold',
    fontFamily: `'Courier New', Courier, monospace`,
    margin: '5vh'
  },
  btn: {
    fontFamily: `'Courier New', Courier, monospace`,
    fontSize: '3vh',
    transition: 'all .3s ease',
    marginBottom: '7vh',
    '&:hover': {
      background: 'white',
    },
  }
}))

function Randommeal(props) {
  const classes = useStyles();

  var cuisine = []
  var todo = []
  var allingre = []

  var k = Math.floor(Math.random() * Food.length);
  var detail = Food[k];
  console.log(detail)
  console.log(props.props);

  props.props.cuisine.map((e, index) => {
    console.log(e);
    cuisine = [...cuisine, <Grid item xs={2} key={index}><Button href={`/cuisine/` + e + `#`} className={classes.btn}><Link>{e}</Link></Button></Grid>];
  })

  props.props.ingredients.map((e, index) => {
    console.log(e);
    allingre = [...allingre, <Typography style={{ textAlign: 'center', listStyle: 'none', fontFamily: `'Courier New', Courier, monospace`, fontSize: 'large' }} id={index}>{e}</Typography>]
  })

  props.props.intruction.map((e, index) => {
    console.log(e);
    todo = [...todo, <Typography style={{ fontFamily: `'Courier New', Courier, monospace`, fontSize: 'large' }} align='left' key={index}>{e}</Typography>];
  })


  return (
    <div id='random' props={props}>
      <Avatar className={classes.RandomImg} alt='' src={props.props.img}></Avatar>
      <Grid>
        <Typography className={classes.header}>{props.props.title}</Typography>
      </Grid>
      <Grid>
        <Typography className={classes.description}>{props.props.description}</Typography>
      </Grid>
      <Grid>
        <Typography variant='h4' className={classes.description}><b> Nguyên Liệu </b></Typography>
        <Grid>{allingre}</Grid>
      </Grid>
      <div className={classes.steps}>
        <Grid>
          {todo}
        </Grid>
        <Grid style={{ fontFamily: `'Courier New', Courier, monospace`, marginTop: '5vh' }}>
          <Link href={props.props.link} style={{ color: 'red' }} >Tutorial</Link>
        </Grid>
      </div>
      <Typography className={classes.description}>CUISINE</Typography>
      <Grid container justify='center'>
        {cuisine}
      </Grid>
    </div >
  )
}

export default Randommeal