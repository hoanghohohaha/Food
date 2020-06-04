import React from "react";
import { Grid, Card, Typography, Avatar, CardContent, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyle = makeStyles((theme) => ({
  badge: {
    width: theme.spacing(40),
    height: theme.spacing(40),
    margin: '5vh auto 5vh auto',
  },
  name: {
    color: 'white',
    fontSize: '50px',
  },
  container: {
    boxShadow: '0px 0px 12px 0px black',
    margin: '5vh auto 5vh auto',
    background: 'black',
    borderRadius: '30px',
  },
  icon: {
    color: 'white'
  },
  map: {
    width: '100%',
    height: '400px',
    frameborder: '0'
  },
  IMGbk: {
    backgroundImage: `url('https://miro.medium.com/max/5600/1*16t29ZDWaOQgBqBR7fmYPw@2x.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '400px'
  },
  hr: {
    margin: '7vh 0 7vh 0'
  }
}))

export default function About() {

  const classes = useStyle();

  return (
    <div>
      <hr className={classes.hr}></hr>
      <Grid>
        <Typography variant='h1'>ABOUT US</Typography>
      </Grid>
      <hr className={classes.hr}></hr>
      <Grid container justify='center'>
        <Grid item xs={8}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, minima repellat, quas expedita quo obcaecati corporis neque blanditiis aspernatur totam facilis maxime, architecto animi velit sapiente. Veniam ex ut corporis.
        </Grid>
      </Grid>
      <hr className={classes.hr}></hr>
      <Grid className={classes.IMGbk}>
      </Grid>
      <hr className={classes.hr}></hr>
      <Grid>
        <iframe className={classes.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1862.1190652347232!2d105.81244065825418!3d21.023155750170584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x39e02f427f6f3b62!2sMindX%20Technology!5e0!3m2!1sen!2s!4v1591022049191!5m2!1sen!2s"></iframe>
      </Grid>
      <Grid container justify='space-evenly'>
        <Grid item xs={4}>
          <Card className={classes.container}>
            <Avatar className={classes.badge} src='https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-9/88217565_945790379169116_5229330374613532672_n.jpg?_nc_cat=110&_nc_sid=174925&_nc_ohc=6R3OHpuqMHAAX-HlPfi&_nc_ht=scontent.fhan2-2.fna&oh=129ed1fb675519c1c9cecd06d223d5b9&oe=5EFB5616'></Avatar>
            <CardContent>
              <Typography className={classes.name}>Hoang Nguyen</Typography>
              <IconButton href='https://www.facebook.com/kipiiler' className={classes.icon}>
                <FacebookIcon />
              </IconButton>
              <IconButton href='https://www.instagram.com/itsbucc_/' className={classes.icon}>
                <InstagramIcon />
              </IconButton>
              <IconButton href='https://github.com/hoanghohohaha' className={classes.icon} >
                <GitHubIcon />
              </IconButton>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.container}>

            <Avatar className={classes.badge} src=''></Avatar>

            <CardContent>
              <Typography className={classes.name} >Son Nguyen</Typography>
              <IconButton href='https://www.facebook.com/luat.middle.su/' className={classes.icon}>
                <FacebookIcon />
              </IconButton>
              <IconButton href='https://www.instagram.com/laplapxoox/' className={classes.icon}>
                <InstagramIcon />
              </IconButton>
              <IconButton className={classes.icon} href='https://github.com/laplapxoox' >
                <GitHubIcon />
              </IconButton>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}
// width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"