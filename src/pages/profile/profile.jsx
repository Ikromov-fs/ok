import React, {useState } from 'react'
import { Box, Avatar, Grid } from '@mui/material';
import { Paper } from '@mui/material'

const Profile = () => {
    const [img, setImg] = useState('');
    const handleImg = (e) => {
        setImg(window.URL.createObjectURL(e.target.files[0]))
    }
    return (
        <Grid sx={{ position: 'relative' }}>
            <Paper component={'form'} sx={{ width: 0, height: 0, }} >
                <label>
                    {
                        img ? <Box sx={{
                            width: '150px', height: '150px', position: 'absolute', left: '50%', transform: 'translateX(-50%)',

                        }}>
                            <img src={img} alt="Account img" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
                        </Box> : <Avatar sx={{ cursor: 'pointer', width: '150px', height: '150px', position: 'absolute', left: '50%', transform: 'translateX(-50%)', }} />
                    }
                    <input type="file" onChange={handleImg} style={{ display: 'none' }} />
                </label>
            </Paper>
        </Grid >
    )
}

export default Profile;
