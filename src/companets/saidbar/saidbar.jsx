import * as React from 'react';
import { Context } from '../../Context/Context';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { NavLink } from 'react-router-dom';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import InsertInvitationRoundedIcon from '@mui/icons-material/InsertInvitationRounded';
import DomainSharpIcon from '@mui/icons-material/DomainSharp';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import PersonalVideoSharpIcon from '@mui/icons-material/PersonalVideoSharp';
import './saidbar.css'
export default function Saidbar() {
    const { openSaidbar, setOpenSaidbar } = React.useContext(Context);
    return (
        <Box 
            sx={{ display: { xs: openSaidbar ? 'flex' : 'none', md: 'flex' },  zIndex: 'tooltip', width: 250, position: 'absolute', top: '80px', borderRadius: '14px', background: '#fff', marginLeft: '16px' }}
            role="presentation"
        >
            <List>
                {[
                    { name: 'Dashboard', to: '/', icon: <DashboardIcon /> },
                    { name: 'My clients', to: '/myClients', icon: <PeopleIcon /> },
                    { name: 'All service', to: '/allService', icon: <AssignmentIcon /> },
                    { name: 'My service', to: '/myService', icon: <InsertInvitationRoundedIcon /> },
                    { name: 'Money monitoring', to: '/moneyMonitoring', icon: <PersonalVideoSharpIcon /> },
                    { name: 'Support-center', to: '/supportCenter', icon: <DomainSharpIcon /> },
                    { name: 'Reports', to: '/reports', icon: <QuestionAnswerIcon /> },
                    { name: 'Profile', to: '/profile', icon: <PersonSharpIcon /> },
                    { name: 'Help', to: '/help', icon: <QuestionMarkOutlinedIcon /> },
                ].map((text, index) => (
                    <NavLink style={{ textDecoration: "none", }} key={index} to={text.to} onClick={() => setOpenSaidbar(prev => !prev)} >
                        <ListItemButton>
                            <ListItemIcon>
                                {
                                    text.icon
                                }
                            </ListItemIcon>
                            <Box variant="h3">{text.name}</Box>
                        </ListItemButton>
                    </NavLink>
                ))
                }
            </List >
            <Divider />
            <Box  sx={{ position: 'fixed', bottom: '20px', width: '250px', height: '80px', background: '#fff', borderRadius: '14px', }}>
                <ul style={{ listStyle: 'none', textAlign: 'center', marginRight: '15px' }}>
                    <li style={{ lineHeight: '24px', color: '#000', fontSize: '20px', fontWeight: '500' }}>Set-Of-Service</li>
                    <li style={{ lineHeight: '24px', color: '#000', fontSize: '16px', fontWeight: '500' }}>Business Profile</li>
                    <li style={{ lineHeight: '24px', color: '#333', fontSize: '14px', }}>version 1.0.01 </li>
                </ul>
            </Box>
        </Box >
    )
}