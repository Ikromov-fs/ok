import React from 'react'
import Card1 from '../../companets/card1/card1';
import Card2 from '../../companets/card2/card2';
import Card3 from '../../companets/card3/card3';
import Card4 from '../../companets/card4/card4';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
const Dashboard = () => {
  return (
    <Box>
      <Grid container rowSpacing={3} mt={2} columnSpacing={{ md: 3 }} >
        <Grid item xs={12} sm={12} md={6}>
          <Card1 />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Card2 />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Card3 />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Card4 />
        </Grid>
      </Grid>
    </Box >
  )
}

export default Dashboard;
