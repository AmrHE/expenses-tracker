import { useContext } from 'react';
import { ExpenseTrackerContext } from '../context/context';
import { incomeCategories, expenseCategories, resetCategories } from '../constants/categories';



// const transaction =  [
//   { id: 1, type: 'Income', amount: 50, category: 'Salary' },
//   { id: 1, type: 'Income', amount: 100, category: 'Salary' },
//   { id: 1, type: 'Income', amount: 250, category: 'Business' },
// ]

//  const categories = [
//    { type: 'Business',     amount: 0, color: incomeColors[0] },
//    { type: 'Investments',  amount: 0, color: incomeColors[1] },
//    { type: 'Salary',       amount: 0, color: incomeColors[6] },
//  ]


//parameter (title)=== (Income || Expense)
const useTransactions = (title) => {
  resetCategories();
  //call transactions from our context
  const { transactions } = useContext(ExpenseTrackerContext);
  //Filter transactions by type(Income || Expense)
  const TransactionsPerType = transactions.filter((t) => t.type === title);
  //Sum the amount of the transactions of a specific type
  const total = TransactionsPerType.reduce((acc, cur) => acc += cur.amount, 0);     

  //Call/Define the categories of a specific type
  const categories = title === 'Income' ? incomeCategories : expenseCategories;

  console.log({TransactionsPerType, total, categories});
  //Loop over transactions
  TransactionsPerType.forEach((t) => {
    //Match the transaction category with category type
    const category = categories.find((c) => c.type === t.category);

    //add (transaction amount ==> t.amount) to the (total category amount ==>categpry.amount) 
    if(category) category.amount += t.amount;
  });

  //filter the categories that only have amount > zero
  const filteredCategories = categories.filter((c) => c.amount > 0);

  //extract data as needed for chart.js
  const chartData = {
    datasets: [{
      data: filteredCategories.map((c) => c.amount),
      backgroundColor: filteredCategories.map((c) => c.color),
    }],
    labels: filteredCategories.map((c) => c.type),
  }

  return { total, chartData }
};

export default useTransactions;