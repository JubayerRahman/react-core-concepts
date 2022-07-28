import logo from './myVactorLogo-removebg-preview.png';
import './App.css';
import { useState } from 'react';

function App() {
  const hero = [
    {name:'Super-Man', age:'500', status:'Alive'},
    {name:'Iron-Man', age:'40', status:'Dead'},
    {name:'Bat-Man', age:'50', status:'Alive'},
    {name:'Aqua-Man', age:'150', status:'Alive'}
  ]
  const productName =[
    {name:'Zombie Junayed', price:'$10', type:'Rotten'},
    {name:'Jubayer Rahman', price:'$10000', type:'Fresh'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        

        <h1>Hi, I am Jubayer Rahman</h1>
        {/* <ul>
          {
            hero.map(hero=><li> Name: {hero.name}  Age:{hero.age} Status:{hero.status} </li>)
          }
        </ul> */}
        <Counter></Counter>
        {
          hero.map(hero=> <Heros hero={hero}></Heros>)
        }
        <Product product={productName[0]}></Product>
        <Product product={productName[1]}></Product>
        {/* <Product name={productName[1].name} price={productName[1].price} type={productName[1].type}></Product> */}
        {/* <Pro product={productName[0]}></Pro> */}
        {/* <Jaam name="Sagol Khan" age="30"></Jaam>
        <Jaam name="Pagol Khan" age="36"></Jaam>
        <Jaam name="Goru Mia" age="70"></Jaam>
        <Jaam name="Gavvi Bani" age="21"></Jaam>
         */}
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0)
  const newIncrese= ()=> {
    const newCount = count +1;
    setCount(newCount);
  }
  const newDecrease= ()=> {
    const newCount = count -1;
    setCount(newCount);
  }
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={newIncrese} style={{marginRight:'20px', fontSize:'30px'}}>Increase</button>

      <button onClick={newDecrease} style={{fontSize:'30px'}}>Decrease</button>
    </div>
  )
}

function Heros(props){
  const heroStyle={
    backgroundColor:'skyblue',
    margin: '15px',
    padding:'15px',
    border:'2px solid green',
    borderRadius:'15px'
  }
    return(
      <div style={heroStyle}>
        <h2>HeroName:&nbsp;{props.hero.name} </h2>
        <h2>HeroAge:&nbsp;{props.hero.age} </h2>
        <h2>HeroStatus:&nbsp; <span id='status'>{props.hero.status}</span> </h2>
      </div>
    )
}

function Product(props){

  const productStyle={
    backgroundColor:'grey',
    borderRadius:'10px',
    color:'pink',
    margin:'20px',
    padding:'20px',
    border:'1px solid white'
  }

  console.log(props)
  return(
    <div style={productStyle}>
      <h3>Name:&nbsp;{props.product.name}</h3>
      <h5>Price:&nbsp;{props.product.price}</h5>
      <h5>Type:&nbsp;{props.product.type}</h5>
      <button style={{fontSize:'30px', borderRadius:'10px'}}>Buy now</button>
    </div>
  )
}

// function  Jaam(props){
//   const personStyle={
//     border:'3px solid red',
//     margin:'10px',
//     borderRadius:'20px'
//   }
//   return(
//     <div style={personStyle}>
//       <h1>Name:{props.product.name}</h1>
//       <h1>age:{props.age}</h1>
//       <p>batpar Beda</p>
//     </div>
//   )
// }

export default App;
