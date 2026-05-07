import { useState } from 'react'
import './index.css'
import AddTransaction from './components/AddTransaction.tsx'
import TransactionList from './components/TransactionList.tsx'
import ExpenseCategory from './components/ExpenseCategory.tsx'
import type { Transaction } from './types.ts'
import transactions from './data/script.ts'
import { AppContext } from './components/AppContext.tsx'
import Breif from './components/Breif.tsx'

function App() {

  const [transactionsList, setTransactionsList] = useState<Transaction[]>(transactions);

  return (
    <div>
      <AppContext.Provider value={{ transactionsList, setTransactionsList }}>
        <h1 className='text-center mt-10 font-bold'>Personal Budget Tracker</h1>
        <div className="flex justify-center">
          <AddTransaction />
        </div>
        <div className="flex ml-5">
          <Breif />
        </div>
        <div className="flex justify-center">
          <TransactionList />
        </div>
        <div className="flex justify-center">
          <ExpenseCategory />
        </div>
      </AppContext.Provider>
    </div>
  )
}

export default App
