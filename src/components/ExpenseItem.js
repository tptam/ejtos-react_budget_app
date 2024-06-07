
import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { currency, dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const addButton = {
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        backgroundColor: "#4fac5c",
        color: "white",
        padding: "0",
        border: "none",
        outline: "none",
    };
    const addButtonInner = {
        fontSize: "250%",
        lineHeight: "20px",
        letterSpacing: "0",
        fontWeight: "900"
    };
    const minusButton = {
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        backgroundColor: "#af2318",
        color: "white",
        padding: "0",
        border: "none",
        outline: "none",
    };
    const minusButtonInner = {
        fontSize: "300%",
        lineHeight: "18px",
        letterSpacing: "0",
        fontWeight: "900"
    };

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button style={addButton} onClick={event=> increaseAllocation(props.name)}>
            <span style={addButtonInner}>+</span>
        </button></td>
        <td><button style={minusButton} onClick={event=> decreaseAllocation(props.name)}>
            <span style={minusButtonInner}>-</span>
        </button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;