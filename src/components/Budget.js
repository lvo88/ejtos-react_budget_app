import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {budget, dispatch} = useContext(AppContext);
    const [newBudget, setBudget] = useState(budget);

    const handleIncrease = (event) => {
        setBudget(event.target.value);
        dispatch({
            type:'SET_BUDGET',
            payload: event.target.value,
        });
        if (event.target.value > 20000) {
            alert("Budget cannot exceed 20000");
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £
                <input
                    type='number'
                    id='newBudget'
                    value={newBudget}
                    step={10}
                    onChange={handleIncrease}
                    >
                </input>
            </span>
        </div>
    );
};

export default Budget;
