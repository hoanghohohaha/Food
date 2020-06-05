import React, { useState } from 'react';
import { Button, AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import FastfoodIcon from '@material-ui/icons/Fastfood';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(() => ({
  grow: {
    flexGrow: 1,
    background: 'black',
    position: 'static',
  },
  itemtext: {
    textDecoration: 'none',
    color: 'white',
    fontFamily: `'Courier New', Courier, monospace`,
    fontWeight: 'bold',
    marginLeft: '3vw',
    transition: 'all .3s ease',
    '&:hover': {
      fontSize: 'larger',
      textDecoration: 'underline'
    },
  },
  dropdownbox: {
    background: 'black',
    fontFamily: `'Courier New', Courier, monospace`,
    transition: 'all .3s ease',
    '&:hover': {
      background: 'black',
    }
  },
  linktext: {
    color: 'white',
    transition: 'all .3s ease',
    '&:hover': {
      background: 'black',
      fontSize: 'larger'
    }
  }
}))

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles()
  return (
    <>
      <Paper>
        <AppBar className={classes.grow}>
          <Toolbar>
            <Menu
              style={{ left: '150px' }}
              id="simple-menu"
              anchorEl={anchorEl}
              transitionDuration={500}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem className={classes.dropdownbox}><Button href='/#/cuisine/french' className={classes.linktext}> FRENCH</Button></MenuItem>
              <MenuItem className={classes.dropdownbox}><Button href='/#/cuisine/vietnam' className={classes.linktext}> VIETNAM</Button></MenuItem>
              <MenuItem className={classes.dropdownbox}><Button href='/#/cuisine/chinese' className={classes.linktext}> CHINESE</Button></MenuItem>
              <MenuItem className={classes.dropdownbox}><Button href='/#/cuisine/italy' className={classes.linktext}> ITALY</Button></MenuItem>
              <MenuItem className={classes.dropdownbox}><Button href='/#/cuisine/korean' className={classes.linktext}> KOREAN</Button></MenuItem>
              <MenuItem className={classes.dropdownbox}><Button href='/#/cuisine/japan' className={classes.linktext}> JAPAN</Button></MenuItem>
            </Menu>

            <FastfoodIcon />
            <Typography className={classes.itemcontainer}><a href='/' className={classes.itemtext}>FOODRECIPE</a></Typography>
            <Button ><a href='/#/' className={classes.itemtext} >HOME</a></Button>
            <Button ><a href='/#/about' className={classes.itemtext}>ABOUT</a></Button>
            <Button ><a href='/#/random' className={classes.itemtext}>RANDOM</a></Button>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}><Typography className={classes.itemtext}>CUISINE</Typography></Button>
            <div style={{ right: '0px', position: 'absolute', }}>
              <IconButton href='/#/search'>
                <SearchIcon style={{ color: 'white' }} />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </Paper>
    </>
  )
}