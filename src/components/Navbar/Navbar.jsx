import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import { ShoppingCart} from '@material-ui/icons';


import logo from '../../assets/Pig.png';
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles()
    return (
        <>
            <AppBar positon="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="THANHPRO.ĐZ" height="25px" className={classes.image} />
                        THANHPRO.ĐZ

                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button} />
                        <IconButton aria-label="Show Cart items" color="inherit">
                        <Badge badgeContent={2} color="secondary">
                            <ShoppingCart />
                        </Badge>
                        </IconButton>
                            
                </Toolbar>
            </AppBar>
                
        </>
    )
}

export default Navbar
