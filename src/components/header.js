import React, { useState } from 'react';
import { Button, AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import InputBase from '@material-ui/core/InputBase';

import FastfoodIcon from '@material-ui/icons/Fastfood';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
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
    transition: 'all .3s ease',
    '&:hover': {
      fontSize: 'larger',
      textDecoration: 'underline'
    },
  },
  itemcontainer: {
    marginLeft: '3vw',
  },
  dropdownbox: {
    background: 'black',
    fontFamily: `'Courier New', Courier, monospace`,
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
              id="simple-menu"
              anchorEl={anchorEl}
              transitionDuration={500}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} className={classes.dropdownbox}>FRENCH</MenuItem>
              <MenuItem onClick={handleClose} className={classes.dropdownbox}>VIETNAM</MenuItem>
              <MenuItem onClick={handleClose} className={classes.dropdownbox}>CHINESE</MenuItem>
              <MenuItem onClick={handleClose} className={classes.dropdownbox}>ITALY</MenuItem>
              <MenuItem onClick={handleClose} className={classes.dropdownbox}>KOREAN</MenuItem>
              <MenuItem onClick={handleClose} className={classes.dropdownbox}>JAPAN</MenuItem>
            </Menu>

            <FastfoodIcon />
            <Typography className={classes.itemcontainer}><Link to='/' className={classes.itemtext}>FOODRECIPE</Link></Typography>
            <Button className={classes.itemcontainer}><Link to='/' className={classes.itemtext} >HOME</Link></Button>
            <Button className={classes.itemcontainer}><Link to='/about' className={classes.itemtext}>ABOUT</Link></Button>
            <Button className={classes.itemcontainer}><Link to='/random' className={classes.itemtext}>RANDOM</Link></Button>
            <Button className={classes.itemcontainer} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}><Typography className={classes.itemtext}>CUISINE</Typography></Button>
            <div style={{ right: '0px', position: 'absolute', }}>
              <InputBase style={{
                background: 'white'
              }}
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
              <IconButton>
                <SearchIcon style={{ color: 'white' }} />
              </IconButton>
            </div>
          </Toolbar>


        </AppBar>
      </Paper>
    </>
  )
}