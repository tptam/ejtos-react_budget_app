import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, remaining, currency, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        // Value validation
        const maxBudget = 20000;
        const totalExpenses = budget - remaining;
        if (newBudget > maxBudget) {
            alert("The budget is limited to £" + maxBudget);
            setNewBudget(maxBudget);
            return;
        } else if (newBudget < totalExpenses) {
            alert("The budget cannot be lower than the spending: £" + totalExpenses);
            setNewBudget(totalExpenses);
            return;
        } else {
            dispatch({
                type: 'SET_BUDGET',
                payload: parseInt(newBudget),
            });
        }

    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;
