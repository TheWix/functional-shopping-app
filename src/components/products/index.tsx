import "react-hot-loader";
import * as React from "react";
import { Product as Prod } from "../../entites";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import * as selectors from "../../selectors";
import actions from "../../actions";

const ProductList = styled.ul``;

const ProductWrapper = styled.li``;
const ProductName = styled.label``;
const ProductDescription = styled.p``;
const ProductPrice = styled.span``;
const AddToCart = styled.a``;

type ProductProps = {
  id: number;
  name: string;
  description: string;
  price: number;
  onAddToCart: () => void;
}

const Product: React.FunctionComponent<ProductProps> = ({
  id,
  name,
  description,
  price,
  onAddToCart
}) => (
  <ProductWrapper>
    <ProductName>{name}</ProductName>
    <ProductDescription>{description}</ProductDescription>
    <ProductPrice>{price}</ProductPrice>
    <AddToCart onClick={onAddToCart}>Add to Cart</AddToCart>
  </ProductWrapper>
);

const Products: React.FunctionComponent<{ products: Prod[], onAddToCart: (id: number) => () => void }> = ({
  products,
  onAddToCart
}) =>
  products.length > 0 ? (
    <ProductList>
      {products.map((p) => (
        <Product key={p.id} {...p} onAddToCart={onAddToCart(p.id)} />
      ))}
    </ProductList>
  ) : (
    <div>No products found!</div>
  );

export const ProductsContainer = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectors.getAllProducts);
  const onAddToCart = (id: number) => () => pipe(id, actions.addToCart, dispatch); 

  return <Products products={products} onAddToCart={onAddToCart} />;
};
