import React, { useContext, useState } from 'react'
import { AppContext } from './AppContext'
import type { Transaction } from '../types';

function ExpenseCategory() {
    // debugger;
    const { transactionsList } = useContext(AppContext);
    let expenses: Transaction[] = transactionsList.filter(item => item.type == 'expense')

    let categories: string[] = expenses.map(item => item.category)

    let distinctCategories: string[] = [...new Set(categories)];

    return (
        <div className='p-3 bg-black w-full m-5'>
            <h2>Expense by Category</h2>

            {distinctCategories.map(category => {
                let sum: number = expenses.reduce((sum, item) => {
                    if (item.category == category) {
                        sum += item.amount;
                    }
                    return sum;
                }, 0);
                return < div className='mt-2 flex justify-between' >
                    <h3 className='text-sm'>{category}</h3>
                    <h3 className='text-sm'>{sum}₪</h3>
                </div>
            })}
        </div >
    )
}

export default ExpenseCategory