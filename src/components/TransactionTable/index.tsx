import { Container } from "./style";

export function TransactionTable() {
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
                    <tr>
                        <td>Desenvolvimento web</td>
                        <td className="deposit">12.500,00MZN</td>
                        <td>Informatica</td>
                        <td>14/02/2022</td>
                    </tr>
                    <tr>
                        <td>Aluguer</td>
                        <td className="withdraw">7.000,00MZN</td>
                        <td>Casa</td>
                        <td>14/02/2022</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento web</td>
                        <td className="deposit">12.500,00MZN</td>
                        <td>Informatica</td>
                        <td>14/02/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}