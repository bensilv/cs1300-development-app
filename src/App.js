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
    {name: "Canon EOS 5D Mark IV", image: '5d.jpg', brand: 'Canon', type: 'DSLR', price: 2300},
    {name: "Canon EOS 70D", image: '70d.jpg', brand: 'Canon', type: 'DSLR', price: 1200},
    {name: "Nikon COOLPIX B600", image: 'b6.jpg', brand: 'Nikon', type: 'Compact', price: 330},
    {name: "Sony a6400", image: 'a64.jpg', brand: 'Sony', type: 'Mirrorless', price: 860},
    {name: "Nikon Z 50", image: 'z50.jpg', brand: 'Nikon', type: 'Mirrorless', price: 1100},
    {name: "Canon PowerShot G7 X", image: 'g7x.jpg', brand: 'Canon', type: 'Compact', price: 500},
    {name: "Sony A7Siii", image: 'a7siii.jpg', brand: 'Sony', type: 'Mirrorless', price: 3500}
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
