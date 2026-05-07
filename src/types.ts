export type Transaction = {
    id: number,
    amount: number,
    date: string,
    type: 'expense' | 'income',
    category: string,
    description: string
}