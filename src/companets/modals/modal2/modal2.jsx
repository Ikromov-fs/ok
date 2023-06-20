import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Context } from '../../../Context/Context';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    border: 'none',
    borderRadius: '5px'
};

const ModalNewPassword = () => {
    const navigate = useNavigate()
    const handleClose = () => setModal2(false);
    const { modal2, setModal2 } = useContext(Context);
    const handleNewPassword = (e) => {
        e.preventDefault()
        setModal2(false)
        navigate('/dashboard')
    }
    return (
        <div>
            <Modal
                keepMounted
                open={modal2}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                        New password
                    </Typography>
                    <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                        <Box onSubmit={handleNewPassword} component="form" required>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="Confirmpassword"
                                label="Confirm Password"
                                type="password"
                                id="Confirmpassword"
                                autoComplete="current-password"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 3, py: 1 }}
                            >
                                submit
                            </Button>
                        </Box>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export default ModalNewPassword;