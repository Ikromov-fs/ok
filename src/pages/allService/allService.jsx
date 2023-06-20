import React, { useState } from 'react'
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import ConnectingAirportsOutlinedIcon from '@mui/icons-material/ConnectingAirportsOutlined';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import MarkUnreadChatAltOutlinedIcon from '@mui/icons-material/MarkUnreadChatAltOutlined';
import visa from '../../assets/img/visa-end.svg'
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import './allService.css';
const Users = () => {
    const [data, setData] = useState([
        { text: "Shop xizmatlari", icon: <ShoppingCartCheckoutOutlinedIcon /> },
        { text: "Pul yuborish xizmatlari", icon: <PriceCheckIcon /> },
        { text: "To'lovlar", icon: <PaymentsOutlinedIcon /> },
        { text: "Avia bilet xizmatlari", icon: <ConnectingAirportsOutlinedIcon /> },
        { text: "Pochta xizmatlari", icon: <ForwardToInboxIcon /> },
        { text: "Paynet", icon: <PhonelinkRingIcon /> },
        { text: "Visa masalalarida yordam xizmatlari", icon: <img src={visa} alt="visa" width={26} /> },
        { text: "Ish topib berish xizmatlari", icon: <WorkHistoryOutlinedIcon /> },
        { text: "Uy-joy topib berish  xizmatlari", icon: <MapsHomeWorkOutlinedIcon /> },
        { text: "Eng oxirgi yangiliklar", icon: <MarkUnreadChatAltOutlinedIcon /> },
        { text: "Valuta kursi", icon: <CurrencyExchangeIcon /> },
    ])
    return (
        <div className='container__card'>
            {
                data.map(item => (
                    <div className='serviceCardHolder'>
                        <a href="#" className='serviceCard'>
                            <strong>{item.text}</strong>
                            <span className='icon'>{item.icon}</span>
                        </a>
                    </div>
                ))
            }
        </div>
    )
}

export default Users