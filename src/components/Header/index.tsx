import { Container, Content } from "./style";
import imgLogo from "../../assets/logo.svg";
import { NewTransactionModal } from "../NewTransactionModal";


interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}:HeaderProps) {

   
    return (
        <Container>
            <Content>
                <img src={imgLogo} alt="" />
                <button onClick={onOpenNewTransactionModal}>
                    <h2>Nova Transacao</h2>
                </button>
            </Content>         
        </Container>
        
    )
}