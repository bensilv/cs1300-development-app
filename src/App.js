import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container'
import FilteredList from "./FilteredList";

const productList = [
    {name: "Sony A7iii", image: 'a7iii.jpg', brand: 'Sony', type: 'Mirrorless', price: 2000},
    {name: "Sony RX 100", image: 'rx100.jpg', brand: 'Sony', type: 'Compact', price: 850},
    {name: "Nikon D5500", image: 'd5500.png', brand: 'Nikon', type: 'DSLR', price: 800},
    {name: "Canon EOS R", image: 'eosr.jpg', brand: 'Canon', type: 'Mirrorless', price: 1500},
    {name: "Canon EOS RP", image: 'eosrp.jpg', brand: 'Canon', type: 'Mirrorless', price: 900},
    {name: "Canon EOS 5D Mark IV", image: '5d.jpg', brand: 'Canon', type: 'DSLR', price: 2300}
]

function App() {

  return (
    <div className="App">
      <div>
          <div id="header"><h1>Camera Store</h1></div>
          <Container>
              <FilteredList list={productList} />
          </Container>
      </div>
    </div>
  );
}

export default App;
