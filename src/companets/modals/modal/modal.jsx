import React, { useContext } from 'react';
import { Context } from '../../../Context/Context';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send'
import { TextField } from '@mui/material';
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
    borderRadius: '10px',
    required: true,
};

const ModalEmail = () => {
    const { modal, setModal, setModal2 } = useContext(Context)
    const handleClose = () => setModal(false);
    const handleEmail = (e) => {
        e.preventDefault()
        setModal(false)
        setTimeout(() => {
            setModal2(true)
        }, 200);
    }
    return (
        <div>
            <Modal
                keepMounted
                open={modal}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style} >
                    <Typography id="keep-mounted-modal-title" variant="h5" component="h2">
                        Enter your email
                    </Typography>
                    <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                        <Box component="form" onSubmit={handleEmail} required >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                type='email'
                                autoFocus
                            />
                            <Button type='submit' sx={{ mt: 2 }} variant="contained" endIcon={<SendIcon />}>
                                Send
                            </Button>
                        </Box>
                    </Typography>
                    {/* <Button onClick={handleBtn} sx={{ mt: 2 }} variant="contained" endIcon={<SendIcon />}>
                        Send
                    </Button> */}
                </Box>
            </Modal>
        </div>
    )
}

export default ModalEmail;