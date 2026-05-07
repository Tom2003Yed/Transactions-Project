import React, { useContext, useState } from 'react'
import { AppContext } from './AppContext'

function Breif() {
    const { transactionsList } = useContext(AppContext);

    // const [totalIncome, setTotalIncome] = useState<number>(0);
    // const [totalExpense, setTotalExpense] = useState<number>(0);
    // const [totalSave, setTotalSave] = useState<number>(0);
    // debugger;
    let totalIncome: number = 0;
    let totalExpense: number = 0;

    for (let i = 0; i < transactionsList.length; i++) {
        if (transactionsList[i].type == 'income') {
            totalIncome += transactionsList[i].amount;
        } else if (transactionsList[i].type == 'expense') {
            totalExpense += transactionsList[i].amount;
        }
    }

    let totalSave: number = totalIncome - totalExpense;

    return (
        <div className='flex'>
            <div className='font-bold mr-5 bg-green-200 p-2 rounded-lg'>Total Income: {totalIncome}</div>
            <div className='font-bold mr-5 bg-red-200 p-2 rounded-lg'>Total Expense: {totalExpense}</div>
            <div className='font-bold mr-5 bg-black p-2 rounded-lg'>Total Save: {totalSave}</div>
        </div>
    )
}
export default Breif