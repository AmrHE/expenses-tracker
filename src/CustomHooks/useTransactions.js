import { useContext } from 'react';
import { ExpenseTrackerContext } from '../context/context';
import { incomeCategories, expenseCategories, resetCategories } from '../constants/categories';

const useTransactions = (title) => {
  resetCategories();

  const { transactions } = useContext(ExpenseTrackerContext);
  const TransactionsPerType = transactions.filter((t) => t.type === title);
  const total = TransactionsPerType.reduce((acc, cur) => acc += cur.amount);
  const categories = title === 'Income' ? incomeCategories : expenseCategories;

  console.log({TransactionsPerType, total, categories});

  TransactionsPerType.forEach((t) => {
    const category = categories.find((c) => c.type === t.category)
  })


};

export default useTransactions;