import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {budget, dispatch, expenses, currency} = useContext(AppContext);
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

        if (event.target.value < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
        }
    }

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);



    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input
                    type='number'
                    id='newBudget'
                    value={newBudget}
                    step={10}
                    max={20000}
                    onChange={handleIncrease}
                    >
                </input>
            </span>
        </div>
    );
};

export default Budget;
