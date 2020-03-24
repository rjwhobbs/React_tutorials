import React from 'react';

interface ProductListProps {
  productArray: any;
}

export default class ProductList extends React.Component<ProductListProps, {}>{
  constructor(props: any) {
    super(props)
  }

  render() {
    let elements = this.props.productArray.map((item: any, index: any) => {
      return <li key={item.id}>Product: {item.product} | Price: ${item.price}</li>
    });
    return (
      <ol>{elements}</ol>
    )
  }
}