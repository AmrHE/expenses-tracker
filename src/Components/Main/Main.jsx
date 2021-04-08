import React from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import useStyles from './style';;


const Main = () => {
  const classes = useStyles(); 

  return (
    <Card className={classes.root}>
      <CardHeader title="Expenses Tracker" subheader="Powered by Speechly" />
      <CardContent>
        <Typography align="center" variant="h5">Total Balance $100</Typography>
      </CardContent>
    </Card>
  )
}

export default Main
