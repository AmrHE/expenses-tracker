import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{"amount":50,"category":"Phone","type":"Expense","date":"2021-04-21","id":"d63fe708-f67e-430e-8a79-074c47aa1214"},{"amount":160,"category":"Travel","type":"Expense","date":"2021-04-21","id":"6babbc03-91d7-4710-8216-d5f0e89ce375"},{"amount":175,"category":"Business","type":"Income","date":"2021-04-21","id":"9d28bd8a-6e45-4e37-925d-635a6e1c2607"},{"amount":100,"category":"Salary","type":"Income","date":"2021-04-21","id":"eefbcdc0-cf7f-451c-b4a9-c24303222c55"}];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState)
  
  //Action Creators
  const deleteTransaction = (id) => dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  const addTransaction = (transaction) => dispatch({ type: 'ADD_TRANSACTION', payload: transaction });

  const balance = transactions.reduce((acc, cur) => cur.type === 'Expense' ? acc - cur.amount : acc + cur.amount, 0)
  
  return (
    <ExpenseTrackerContext.Provider value={{ 
      deleteTransaction,
      addTransaction,
      transactions,
      balance
    }}>
      {children}
    </ExpenseTrackerContext.Provider>
  )
};