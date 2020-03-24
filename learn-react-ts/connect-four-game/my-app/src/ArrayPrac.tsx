import React from 'react';
import ProductList from './lib/ProductList';

let array =[
  {id: 100, product:"Apple", price:3},
  {id: 101, product:"Banana", price:1},
  {id: 102, product:"Carrot", price:2},
  {id: 103, product:"Donuts", price:5},
  {id: 104, product:"Eggplant", price:4}
]

export default class ArrayPrac extends React.Component<{}, {}>{
  render() {
    return(
      <>
        <ProductList productArray={array}/>
      </>
    )
  }
} 