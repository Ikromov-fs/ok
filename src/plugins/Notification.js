import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notification = (text, type) => {
    return setTimeout(() => {
        toast(text.text, {
            type: type.type,
            position: "top-right",
            showIcon: true,
            timeout: 1500,
        });
    },);
}

export default Notification;