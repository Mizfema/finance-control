


import imgIncome from "../../assets/income.svg"
import imgOutcome from "../../assets/outcome.svg"
import imgTotal from "../../assets/total.svg"
import { useTransaction } from "../../Hooks/useTransaction"

import { Container, Content } from "./style"


export function Summary() {

    const {transactions} = useTransaction()
  
    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type==='deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdraw += transaction.amount;
            acc.total -= transaction.amount

        }

        return acc;
    }, {
        deposits:0,
        withdraw:0,
        total:0,
    })
    

    return (
        <Container>
            <Content>
                <header>
                    <span>Entradas</span>
                    <img src={imgIncome} alt="Entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-MZ', {
                                style: 'currency',
                                currency: 'MZN'
                    }).format(summary.deposits)}
                    
                </strong>
            </Content>

            <Content>
                <header>
                    <span>Saidas</span>
                    <img src={imgOutcome} alt="Saidas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-MZ', {
                                style: 'currency',
                                currency: 'MZN'
                    }).format(summary.withdraw)}
                   
                </strong>
            </Content>

            <Content className="total-amount">
                <header>
                    <span>Total</span>
                    <img src={imgTotal} alt="Total" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-MZ', {
                                style: 'currency',
                                currency: 'MZN'
                    }).format(summary.total)}
                    
                </strong>
            </Content>
        </Container>
    )
}