import React, { useContext, useState } from 'react'
import { AppContext } from './AppContext';
import type { Transaction } from "../types"

function AddTransaction() {
    const { transactionsList, setTransactionsList } = useContext(AppContext);

    const [type, setType] = useState<'income' | 'expense'>('expense');
    const [category, setCategory] = useState<string>('');
    const [amount, setAmount] = useState<number>(0);
    const [description, setDescription] = useState<string>('');
    const [date, setDate] = useState<string>('');

    function addNewTransaction(): void {
        debugger;
        if (category != '' && amount > 0 && description && date != '') {
            setTransactionsList([...transactionsList, {
                id: Date.now(),
                amount: Number(amount),
                date: date,
                type: type,
                category: category,
                description: description
            }])
        } else {
            alert('One of more of the fields is not valid!')
        }
        setCategory('');
        setAmount(0);
        setDescription('')
        setDate('');
    }

    return (
        <div className='bg-black w-100 h-120 m-10 p-5'>
            <div className='mb-2'>
                <h2>Type</h2>
                <select value={type} onChange={(e) => setType(e.target.value)} className='border-2 border-gray-200 w-full p-1 mt-2 mb-2'>
                    <option value="expense">Expense</option>
                    <option value="income">Income</option>
                </select>
            </div>

            <div className='mb-2'>
                <h2>Category</h2>
                <input value={category} onChange={(e) => setCategory(e.target.value)} type="text" className='border-2 border-gray-200 w-full p-1 mt-2 mb-2' />
            </div>

            <div className='mb-2'>
                <h2>Amount</h2>
                <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" className='border-2 border-gray-200 w-full p-1 mt-2 mb-2' />
            </div>

            <div className='mb-2'>
                <h2>Description</h2>
                <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" className='border-2 border-gray-200 w-full p-1 mt-2 mb-2' />
            </div>

            <div className='mb-2'>
                <h2>Date</h2>
                <input value={date} onChange={(e) => setDate(e.target.value)} type="date" className='border-2 border-gray-200 w-full p-1 mt-2 mb-2' />
            </div>

            <button onClick={() => addNewTransaction()} className='bg-blue-600 p-2 rounded-lg text-gray-500 font-bold'>Add Transaction</button>
        </div>
    )
}

export default AddTransaction