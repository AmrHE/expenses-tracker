import React from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import useStyles from './style';


const Main = () => {
  const classes = useStyles(); 

  return (
    <Card className={classes.root}>
      <CardHeader title="Expenses Tracker" subheader="Powered by Speechly" />
      <CardContent>
        <Typography align="center" variant="h5">Total Balance $100</Typography>
        <Typography variant="subtitle1" style={{ LineHeight: '1.5em', marginTop: '20px' }}>
          {/* InfoCard... */}
          Try to say: Add income for $100 in category salary for Monday...
        </Typography>
        <Divider />
        {/* Form */}
      </CardContent>
      
      <CardContent className={classes.cardContent}>
        <Grid>
          
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Main
