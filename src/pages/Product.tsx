import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/bazarSlice";
import toast from "react-hot-toast";
import { ProductsType, StoreState } from "types";
import QuantityButton from "@/components/QuantityButton";
import Container from "@/components/Container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Package, RefreshCcw, Star, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock product data
const dummyProduct = {
  id: 1,
  name: "Premium Wireless Headphones",
  price: 199.99,
  rating: 4.5,
  reviews: 128,
  description:
    "Experience crystal-clear audio with our premium wireless headphones. Featuring advanced noise-cancellation technology and a comfortable over-ear design, these headphones are perfect for music lovers and professionals alike.",
  features: [
    "Active Noise Cancellation",
    "30-hour battery life",
    "Bluetooth 5.0",
    "Touch controls",
    "Voice assistant compatible",
  ],
  specs: [
    { name: "Brand", value: "AudioPro" },
    { name: "Model", value: "AP-2000" },
    { name: "Color", value: "Midnight Black" },
    { name: "Weight", value: "250g" },
    { name: "Warranty", value: "2 years" },
  ],
  images: [
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600&text=Image+2",
    "/placeholder.svg?height=600&width=600&text=Image+3",
    "/placeholder.svg?height=600&width=600&text=Image+4",
  ],
};
const Product = () => {
  const [product, setProduct] = useState<ProductsType | null>(null);
  const { productData } = useSelector((state: StoreState) => state.bazar);
  const [existingProduct, setExistingProduct] = useState<ProductsType | null>(
    null
  );
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.item) {
      setProduct(location.state.item);
    }
  }, [location]);

  useEffect(() => {
    if (product?._id) {
      const matchedProduct = productData?.find(
        (item) => item._id === product._id
      );
      matchedProduct && setExistingProduct(matchedProduct);
    }
  }, [product, productData]);

  if (
    !product ||
    (typeof product === "object" && Object.keys(product).length === 0)
  ) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Container className="my-10 flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-2/5 relative group overflow-hidden rounded-lg">
          <img
            className="w-full h-[550px] object-cover rounded-lg group-hover:scale-110 duration-300"
            src={product?.image}
            alt="productImg"
          />
          <div className="absolute top-4 right-0">
            {product?.isNew && (
              <p className="bg-black text-white font-semibold font-titleFont px-8 py-1">
                Sale
              </p>
            )}
          </div>
        </div>
        <div className="w-full md:w-3/5 space-y-6">
          <h1 className="text-3xl font-bold">{product?.title}</h1>
          <div className="flex items-center space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">(60 reviews)</span>
          </div>
          <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
          <p className="text-muted-foreground">{product.description}</p>
          <div className="space-y-2">
            {dummyProduct.features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-4">
            {existingProduct ? (
              <QuantityButton existingProduct={existingProduct} />
            ) : (
              <Button
                size="lg"
                onClick={() => {
                  dispatch(addToCart({ ...product, quantity: 1 }));
                  toast.success(`${product?.title} is added`);
                }}
                className="bg-black text-white py-3 px-6 active:bg-gray-800"
              >
                add to cart
              </Button>
            )}
          </div>
          <p className="text-base text-gray-500">
            Category:{" "}
            <span className="font-medium capitalize">{product?.category}</span>
          </p>
        </div>
        {/* <div className="w-full md:w-3/5 flex flex-col justify-center gap-12">
          <div>
            <h2 className="text-4xl font-semibold">{product?.title}</h2>
            <div className="flex items-center gap-4 mt-3">
              <FormattedPrice
                amount={
                  existingProduct
                    ? Number(existingProduct?.oldPrice) *
                      existingProduct?.quantity!
                    : Number(product?.oldPrice)
                }
                className="line-through font-base text-gray-500"
              />
              <FormattedPrice
                amount={
                  existingProduct
                    ? Number(existingProduct?.price) *
                      existingProduct?.quantity!
                    : Number(product?.price)
                }
                className="text-2xl font-medium text-gray-900"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex text-base">
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
            </div>
            <p className="text-xs text-gray-500">(1 Customer review)</p>
          </div>
          <p className="text-base text-gray-500 -mt-3">
            {product?.description}
          </p>
          <div className="flex gap-4">
            {existingProduct ? (
              <QuantityButton existingProduct={existingProduct} />
            ) : (
              <button
                onClick={() => {
                  dispatch(addToCart({ ...product, quantity: 1 }));
                  toast.success(`${product?.title} is added`);
                }}
                className="bg-black text-white py-3 px-6 active:bg-gray-800"
              >
                add to cart
              </button>
            )}
          </div>
          <p className="text-base text-gray-500">
            Category:{" "}
            <span className="font-medium capitalize">{product?.category}</span>
          </p>
        </div> */}
      </Container>
      <Container className="mb-10">
        <div className="max-w-xl">
          {/* Product Tabs */}
          <Tabs defaultValue="specs" className="mt-12">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="specs">Specifications</TabsTrigger>
              <TabsTrigger value="delivery">Delivery Information</TabsTrigger>
            </TabsList>
            <TabsContent value="specs">
              <Card>
                <CardContent className="pt-6">
                  <dl className="divide-y">
                    {dummyProduct.specs.map((spec, index) => (
                      <div key={index} className="flex justify-between py-3">
                        <dt className="font-medium text-muted-foreground">
                          {spec.name}
                        </dt>
                        <dd>{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="delivery">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Truck className="w-5 h-5 text-primary" />
                      <span>Free shipping on orders over $100</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Package className="w-5 h-5 text-primary" />
                      <span>Estimated delivery: 3-5 business days</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RefreshCcw className="w-5 h-5 text-primary" />
                      <span>30-day return policy</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </Container>
    </div>
  );
};

export default Product;
