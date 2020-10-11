import "react-hot-loader";
import * as React from "react";
import { Product as Prod } from "../../entites";
import styled from "styled-components";
import { useSelector } from "react-redux";
import * as selectors from "../../selectors";
import { RootState } from "../../state";

const ProductList = styled.ul``;

const ProductWrapper = styled.li``;
const ProductName = styled.label``;
const ProductDescription = styled.p``;
const ProductPrice = styled.span``;

const Product: React.FunctionComponent<Prod> = ({
  id,
  name,
  description,
  price,
}) => (
  <ProductWrapper key={id}>
    <ProductName>{name}</ProductName>
    <ProductDescription>{description}</ProductDescription>
    <ProductPrice>{price}</ProductPrice>
  </ProductWrapper>
);

const Products: React.FunctionComponent<{ products: Prod[] }> = ({
  products,
}) =>
  products.length > 0 ? (
    <ProductList>
      {products.map((p) => (
        <Product {...p} />
      ))}
    </ProductList>
  ) : (
    <div>No products found!</div>
  );

export const ProductsContainer = () => {
  const products = useSelector((s: RootState) => selectors.getAllProducts(s));

  return <Products products={products} />;
};
