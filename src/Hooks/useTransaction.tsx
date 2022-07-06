import { createContext, useEffect, useState, ReactNode, useContext } from "react";
import { api } from "../services/api";


interface Transaction {
    id:number;
    title:string;
    type:string;
    amount:number;
    category:string;
    createdAt:string;
}

interface TransactionProviderProps {
    children: ReactNode
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}




export const TransactionContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export function TransactionProvider({children}: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('/transactions')
        .then(response => setTransactions(response.data.transactions) )
    },[]);


   async function createTransaction(transactionInput:TransactionInput) {
       
       const response = await api.post('/transactions', {
           ...transactionInput,
           createdAt: new Date(),
        });

          const {transaction} = response.data;

          setTransactions([
              ...transactions,
              transaction,
          ])
    }



    return (
        <TransactionContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionContext.Provider>
    );
}

export function useTransaction() {

    const context = useContext(TransactionContext)

    return context
}