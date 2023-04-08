import { MagnifyingGlass } from "phosphor-react";
import { Container } from "./styles";

export function SearchBar() {
  return (
    <Container>
      <MagnifyingGlass size={24} weight="bold"/>
      <input type="text" placeholder="Pesquisar" />
      </Container>
  );
}