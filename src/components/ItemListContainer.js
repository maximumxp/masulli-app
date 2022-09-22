import './ItemListContainer.css';
import Container from 'react-bootstrap/Container';

const ItemListContainer = ({ greeting }) => {
  return (
    <Container>
      <h1 class="homeText">Nuevos Ingresos</h1>
      <h3 class="homeText" className="greeting">{greeting}</h3>
    </Container>
  );
}
 
export default ItemListContainer;