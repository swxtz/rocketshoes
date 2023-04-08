import { Container, Logo, NavBar, Bag } from "./styles";

import LogoImg from "../../assets/logo.svg";
import BagImg from "../../assets/icon-bag.svg";

import { SearchBar } from "../SearchBar/SearchBar";

export function Header() {
  return (
    <Container>
      <Logo>
        <img src={LogoImg} />
      </Logo>

      <NavBar>
        <a href="#">Homen</a>
        <a href="#">Mulher</a>
        <a href="#">Criança</a>
        <a href="#">Customizar</a>
      </NavBar>

      <div>
        <SearchBar />
      </div>

      <Bag>
        <img src={BagImg} />
      </Bag>
    </Container>
  );
}
