import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Grid>
      <Typography variant="body2" style={{ color: 'white' }} align='left'>
        <b> hoanghohohaha©</b>
        <Link color="inherit" href="/">
          <b>  FoodRecipe</b>
          <b>{new Date().getFullYear()}</b>
        </Link>
      </Typography>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: 'black',
  },
  footercard: {
    color: 'white',
    padding: theme.spacing(3),
    display: 'flex',
    flexFlow: 'column',
  },
  footerlink: {
    textDecoration: 'none',
    paddingTop: '5px',
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
    fontWeight: 'bold',
    color: '#FAFAFA',
  }
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Grid container justify='space-evenly'>
          <Grid item xs={3} className={classes.footercard}>
            <Typography variant='h6'><b>Healthy Meal</b></Typography>
            <a className={classes.footerlink} href="/about">About us</a>
            <a className={classes.footerlink} href="/about#contact">Contact</a>
            <a className={classes.footerlink} href="/about#team">Our team</a>
          </Grid>
          <Grid item xs={3} className={classes.footercard}>
            <Typography variant='h6'><b>Follow Us</b></Typography>
            <a className={classes.footerlink} href="https://www.facebook.com/kipiiler">Facebook</a>
            <a className={classes.footerlink} href="https://www.instagram.com/itsbucc_/">Instargram</a>
            <a className={classes.footerlink} href="https://twitter.com/">Twitter</a>
          </Grid>
          <Grid item xs={3} className={classes.footercard}>
            <Typography variant='h6'><b>Contact Us</b></Typography>
            <p><b>Address:</b><br></br>71 Nguyễn Chí Thanh</p>
            <p><b>Phone:</b><br></br>0358842658</p>
            <p><b>Email:</b><br></br>hoanghohohaha@gmail.com</p>
          </Grid>
        </Grid>
        <Copyright style={{ color: 'white' }} />
      </footer>
    </div>
  );
}