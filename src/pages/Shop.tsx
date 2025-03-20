import Container from "@/components/Container";
import Products from "@/components/Products";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    setProducts(data.data);
  }, [data]);

  return (
    <div>
      <Container>
        <Products products={products} />
      </Container>
    </div>
  );
};

export default Shop;
