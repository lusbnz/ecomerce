import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import Banner from "./components/Banner";
import Products from "./components/Products";

function App() {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    setProducts(data.data);
  }, [data]);

  return (
    <div>
      <Banner />
      <Products products={products} />
    </div>
  );
}

export default App;
