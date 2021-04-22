import logo from './logo.svg';
import './App.css';

import Items from './components/Items'

function App() {
  return (
    <div className="App">
      <Items title="Áo phông nữ rib cổ tròn" price="199.000" sale_off="Giảm: 60%" imageUrl="https://canifa.s3.amazonaws.com/media/catalog/product/cache_generated/500x/6ts21s001-sy008-1-thumb-.jpg" />
      <Items title="Áo phông nữ kiểu vặn eo" price="299.000" sale_off="" imageUrl="https://marsshop.com.vn/thumb/558x620/1/upload/product/6tl20c003-sm325-1-1903.jpg"/>
      <Items title="Quần jean nam slim fit cotton usa" price="599.000" sale_off="" imageUrl="https://canifa.s3.amazonaws.com/media/catalog/product/cache_generated/500x/8bj20a007-sj584-1-thumb-.jpg"/>
      <Items title="Áo sơ mi nam" price="299.000" sale_off="Giảm: 40%" imageUrl="https://salt.tikicdn.com/cache/w444/ts/product/f5/11/3c/71eb0bf846600b58109616542eae84f1.jpg"/>
    </div>
  );
}

export default App;
