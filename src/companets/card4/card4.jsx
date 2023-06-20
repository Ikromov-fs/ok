import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './card4.css'
const Card4 = () => {
  return (
      <CardContent className='card'>
        <Typography variant='h4' sx={{ fontSize: '20px' }} color="text.black">
          Assigned Risks4
        </Typography>
        <Typography variant="body2" sx={{ position: 'absolute', top: '50%', left: '25%' }}>
          There are no risks assigned.
        </Typography>
      </CardContent>
  );
}

export default Card4;