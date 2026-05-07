import type { Transaction } from "../types";

const transactions: Transaction[] = [
    {
        id: 1,
        amount: 500,
        date: '5.5.2026',
        type: 'expense',
        category: 'clothes',
        description: 'shirts'
    },
    {
        id: 2,
        amount: 200,
        date: '10.5.2026',
        type: 'expense',
        category: 'food',
        description: 'pizza'
    },
    {
        id: 3,
        amount: 100,
        date: '10.5.2026',
        type: 'expense',
        category: 'food',
        description: 'apple'
    }
]

export default transactions;