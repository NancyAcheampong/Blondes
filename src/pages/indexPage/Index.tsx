import ProductCard from "../../components/productCard/ProductCard";
import ProductCardContainer from "../../components/productCardContainer/ProductCardContainer";
import productsDummy from "../../lib/dummyData/productsDummy";
import type { CartItems } from "../../components/cartItem/CartItem";

type IndexProps = {
  onAddToCart: (item: CartItems) => void;
};

const Index = ({ onAddToCart }: IndexProps) => {
  return (
    <div>
      <ProductCardContainer>
        {productsDummy.map((product) => (
          <ProductCard
            key={product.id}
            inStock={product.inStock}
            image={product.image}
            productName={product.productName}
            price={product.price}
            handleAddToCart={() => {
              onAddToCart({product, quantity:1

              });
            }}
          />
        ))}
      </ProductCardContainer>
    </div>
  );
};

export default Index;
