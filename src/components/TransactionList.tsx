import React, { useContext, useState } from 'react'
import { AppContext } from './AppContext';

function TransactionList() {
    // debugger;
    const { transactionsList, setTransactionsList } = useContext(AppContext);

    const [editState, setEditState] = useState<boolean>(false);

    function deleteTransaction(id: number): void {
        setTransactionsList(transactionsList.filter(item => (
            item.id != id
        )))
    }

    function edit(id): void {
        let newDescription = prompt('Write new description');

        setTransactionsList(transactionsList.map(item => {
            if (item.id === id) {
                item.description = newDescription;
            }
            return item;
        }))
    }
    return (
        <div className='w-full m-5'>
            <h2>Transactions</h2>
            {transactionsList.map(item => (
                <div className={`${item.type == 'income' ? 'bg-green-200' : 'bg-red-200'} p-3 flex justify-between`} >
                    <div>
                        <h3>{item.description}</h3>
                        <h4 className='text-sm'>{item.category} - {item.date}</h4>
                    </div>
                    <div className='flex justify-between items-center'>
                        <h3 className='mr-2'>{item.amount}₪</h3>
                        <button onClick={() => edit(item.id)} className={`${editState ? 'invisible' : 'visible'} mr-2 bg-blue-600 p-2 rounded-lg text-gray-500 font-bold`}>Edit</button>
                        <button onClick={() => deleteTransaction(item.id)} className='bg-red-600 p-2 rounded-lg text-gray-500 font-bold'>Delete</button>
                    </div>
                </div>
            ))
            }
        </div >
    )
}

export default TransactionList