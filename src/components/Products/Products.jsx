import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';

const products = [
    { id: 1, name: 'Giày', description: 'Giày của Thành', price: '$5', image: 'https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'},
    { id: 2, name: 'Laptop', description: 'Laptop của Thành', price: '$7', image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'},
];

const Products = () => {
    const classes = useStyles();
    return (

    <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container justify="center" spacing={4}>
            {products.map((product)=>{
                return (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                )
            })
        }
        </Grid>
    </main>

    )
      
    
}

export default Products
