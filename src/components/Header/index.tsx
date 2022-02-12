import { Container, Content } from "./style";
import imgLogo from "../../assets/logo.svg";

export function Header() {
    return (
        <Container>
            <Content>
                <img src={imgLogo} alt="" />
                <button>
                    <h2>Nova Transacao</h2>
                </button>
            </Content>
        </Container>
        
    )
}