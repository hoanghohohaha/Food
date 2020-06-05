import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import Slideshow from '../components/slideshow';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  btntext: {
    fontFamily: `'Courier New', Courier, monospace`,
    fontSize: '3vh',
    transition: 'all .3s ease',
    marginBottom: '7vh',
    '&:hover': {
      fontSize: '6vh',
      textDecoration: 'underline',
      background: 'white',

    },
  },
  demotext: {
    fontFamily: `'Courier New', Courier, monospace`,
    marginTop: '7vh'
  }
}))
export default function Home() {

  const classes = useStyles();

  return (
    <div>
      <Slideshow />
      <hr></hr>
      <Grid>
        <Grid>
          <Typography className={classes.demotext}>
            Hôm nay bạn chưa biết nấu món gì<br></br>
            Hãy để chúng tôi chọn cho bạn
          </Typography>
        </Grid>
        <Grid>
          <Button href='/random ' className={classes.btntext}>Click here</Button>
        </Grid>
      </Grid>
      <hr style={{ marginBottom: '5vh' }}></hr>
    </div >
  )
}