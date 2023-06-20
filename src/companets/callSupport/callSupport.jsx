import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import telegram from '../../assets/img/tg.svg'
import { Box } from '@mui/system';
const CallSupport = () => {
    return (
        <Box sx={{textDecoration: 'none'}} component='a' href="#">
            <Card sx={{ maxWidth: '200px', minHeight: '20px', maxHeight: '66px', borderRadius: '14px', background: '#27AE60', cursor: 'pointer' }}>
                <CardContent>
                    <Typography variant='h4' sx={{ fontSize: '14px' }} color="text.black">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <Box sx={{ width: '36px', height: '36px', }}> <img src={telegram} alt="Call to support" width={'100%'} height={'100%'} /></Box>
                            <Typography sx={{ color: '#fff', fontWeight: 'bold', lineHeight: '21px' }}>Call to support</Typography>
                        </Box>
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

export default CallSupport;