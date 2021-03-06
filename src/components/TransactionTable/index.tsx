import { useContext } from "react";
import { useTransaction } from "../../Hooks/useTransaction";

import { Container } from "./style";




export function TransactionTable() {

   const {transactions} = useTransaction()
   

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    { transactions.map(transaction => (
                        <tr key={transaction.id}>
                        <td>{transaction.title} </td>
                        <td className={transaction.type}>
                            {new Intl.NumberFormat('pt-MZ', {
                                style: 'currency',
                                currency: 'MZN'
                            }).format(transaction.amount)}
                        </td>
                        <td>{transaction.category} </td>
                        <td>{new Intl.DateTimeFormat('pt-MZ').format(
                                new Date(transaction.createdAt)
                            )} 
                        </td>
                        </tr>
                                               
                    ))}
                    
                </tbody>
            </table>
        </Container>
    )
}