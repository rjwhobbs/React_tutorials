import React from 'react';

interface ProductListProps {
  productArray: {}[]; // Just tried this, and it works? Waaat?
}

function ListItem(props: any) {
  // key not needed here
  return <li>Product: {props.product} | Price: ${props.price}</li>
}

export default class ProductList extends React.Component<ProductListProps, {}>{
  constructor(props: any) {
    super(props)
  }

  render() {
    let elements = this.props.productArray.map((item: any, index: any) => {
      // Key needed here
      return (
        <ListItem key={item.id} 
                  product={item.product} 
                  price={item.price}></ListItem>
      )
    });
    return (
      <ol>{elements}</ol>
    )
  }
}