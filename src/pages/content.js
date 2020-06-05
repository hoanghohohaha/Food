import React from "react";
import Food from '../data/Food.json';
import { Button, Grid, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  RandomImg: {
    borderRadius: '100%',
    width: theme.spacing(50),
    height: theme.spacing(50),
    marginTop: theme.spacing(5)
  },
  steps: {
    width: '70%',
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
    fontFamily: `'Courier New', Courier, monospace`,
    width: '70%',
    margin: 'auto'
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
  },
  homebtn: {
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

const Category = ({ match }) => {
  const classes = useStyle();
  const data = Food.find(category => {
    return parseInt(match.params.id) === category.id;
  });
  console.log(data);
  console.log(match.params)

  var cuisine = []
  var todo = []
  var allingre = []

  data.cuisine.map((e, index) => {
    console.log(e);
    cuisine = [...cuisine, <Grid item xs={2} key={index}><Button href={`/#/cuisine/` + e} className={classes.btn}><Link>{e}</Link></Button></Grid>];
  })

  data.ingredients.map((e, index) => {
    console.log(e);
    allingre = [...allingre, <Typography style={{ textAlign: 'center', listStyle: 'none', fontFamily: `'Courier New', Courier, monospace`, fontSize: 'large' }} id={index}>{e}</Typography>]
  })

  data.intruction.map((e, index) => {
    console.log(e);
    todo = [...todo, <Typography style={{ fontFamily: `'Courier New', Courier, monospace`, fontSize: 'large' }} align='left' key={index}>{e}</Typography>];
  })

  return (
    <>
      {match.isExact && (
        <>
          <img className={classes.RandomImg} alt='' src={data.img}></img>
          <h1>{data.title}</h1>
          <Grid>
            <Typography className={classes.description}>{data.description}</Typography>
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
              <Link href={data.link} style={{ color: 'red' }} >Tutorial</Link>
            </Grid>
          </div>
          <Typography className={classes.description}>CUISINE</Typography>
          <Grid container justify='center'>
            {cuisine}
          </Grid>
          <Grid>
            <Button href='/#/' className={classes.homebtn}>Home</Button>
          </Grid>
        </>
      )}
    </>
  );
};

export default Category