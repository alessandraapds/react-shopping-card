import ProductCart from "./ProductCart";

const ProductList = ({ products, cart }) => {
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCart key={product.sku} product={product} cart={cart} />
      ))}
    </div>
  );
};

export default ProductList;
