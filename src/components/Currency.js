import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const {dispatch} = useContext(AppContext);
    const [name, setName] = useState('');

    const handleCurrency = (event) => {
        setName(event.target.value);
        dispatch({
            type:'CHG_CURRENCY',
            payload: event.target.value,
        });
    }

    return (
        <div>
            <div className='row'>
            <div className="dropdown mb-3 ">
                <label className="p-3 mb-3 alert bg-success text-white" htmlFor="CurrencySelect01">Currency
                <select className="bt bg-success text-white" id="CurrencySelect01" onChange={handleCurrency}>
                    <option value="$" label="($ Dollar)">$ Dollar</option>
                    <option value="£" label="(£ Pound)" selected>£ Pound</option>
                    <option value="€" label="(€ Euro)">€ Euro</option>
                    <option value="₹" label="(₹ Ruppee)">₹ Ruppee</option>
                </select>
                </label>     
            </div>
            </div>

        </div>
    );
};

export default Currency;
