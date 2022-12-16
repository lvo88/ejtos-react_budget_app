import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    let [newBudget, setBudget] = useState(budget)

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £
                <input
                    type='number'
                    id='newBudget'
                    value={newBudget}
                    step={10}
                    onChange={event => setBudget(event.target.value)}>
                </input>
            </span>
        </div>
    );
};



export default Budget;
