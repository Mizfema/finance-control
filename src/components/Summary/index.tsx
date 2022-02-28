

import { useContext } from "react"
import imgIncome from "../../assets/income.svg"
import imgOutcome from "../../assets/outcome.svg"
import imgTotal from "../../assets/total.svg"
import { TransactionContext } from "../../TransactionContext"
import { Container, Content } from "./style"


export function Summary() {

    const transactions = useContext(TransactionContext)
    console.log(transactions)
    

    return (
        <Container>
            <Content>
                <header>
                    <span>Entradas</span>
                    <img src={imgIncome} alt="Entradas" />
                </header>
                <strong>17.400,00MZN</strong>
            </Content>

            <Content>
                <header>
                    <span>Saidas</span>
                    <img src={imgOutcome} alt="Saidas" />
                </header>
                <strong>1.259,00MZN</strong>
            </Content>

            <Content className="total-amount">
                <header>
                    <span>Total</span>
                    <img src={imgTotal} alt="Total" />
                </header>
                <strong>16.141,00MZN</strong>
            </Content>
        </Container>
    )
}