import axios from 'axios';
import { useState, useEffect } from 'react';

function DiscountAPI() {
    const [discounts, setDiscounts] = useState([])
    const [callback, setCallback] = useState(false);
    useEffect(() => {
        const getDiscounts = async () => {
            const res = await axios.get(`https://api-kltn.herokuapp.com/discounts`);
            setDiscounts(res.data.allDiscounts)
            //setResult(res.data.result)
        }
        getDiscounts();
    }, [callback])
    return {
        discounts: [discounts, setDiscounts],
        callback: [callback, setCallback],
    }
}

export default DiscountAPI;