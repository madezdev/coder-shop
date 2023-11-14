
import React from 'react';

import {initialData} from './database/products';

import { Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material';

export default function Page() {
  return (
    <main className="">
      <h1>Home</h1>
      
      <Grid container spacing={4}>
        {
          initialData.products.map((product) => (
            <Grid item xs={6} sm={6} md={3} key={product.slug}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`products/${product.images[0]}`}
                    alt={product.title}
                  />
                  <Typography variant="h6" component="h2"> {product.title}</Typography>
                </CardActionArea>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </main>
  );
}
