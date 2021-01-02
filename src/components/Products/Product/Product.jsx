import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons'
// import classes from '*.module.css';

import useStyles from './styles';

const Product = ( { product } ) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image} title={product.name} style={{height: 0, paddingTop: '56.25%'}} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant ="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant ="h5">
                        {product.price}
                    </Typography>
                </div>
                    <Typography variant ="body2" color="textSecondary">{product.description}</Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions}>
                <IconButton aria-label="Add to Cart">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
                 
        </Card>
    )
}

const styles = 
{

media: {
  height: 0,
  paddingTop: '56.25%', // 16:9,
  marginTop:'30'
}
  };

export default Product
