import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionTable";

export function Dashboard() {
    return (
        <div>
            <Summary/>
            <TransactionTable/>
        </div>
    )
}