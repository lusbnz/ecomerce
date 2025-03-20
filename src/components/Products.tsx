import Container from "./Container";
import ProductsCard from "./ProductsCard";
import { ProductsType } from "types";
interface Props {
  products: ProductsType[];
}

const Products = ({ products }: Props) => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          shopping everyday
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
          quos fugit inventore, cumque quae corporis ratione tenetur eos
          voluptates neque magnam soluta aperiam omnis perspiciatis reiciendis
          asperiores repudiandae assumenda quidem.
        </p>
      </div>
      {/* =================== Products Start here ================= */}
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10">
        {products.map((item: ProductsType) => (
          <ProductsCard key={item._id} product={item} />
        ))}
      </Container>
      {/* =================== Products End here =================== */}
    </div>
  );
};

export default Products;
