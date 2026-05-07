import { createContext } from 'react';
import type { Transaction } from '../types/Transaction';

// הגדרת המבנה של ה-Context
interface AppContextType {
    transactionList: Transaction[];
    setTransactionList: React.Dispatch<React.SetStateAction<Transaction[]>>;
}

// הוספת הטיפוס בזמן היצירה
export const AppContext = createContext<AppContextType | undefined>(undefined);