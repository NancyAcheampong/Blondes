import ProductCard from "../../components/productCard/ProductCard";
import ProductCardContainer from "../../components/productCardContainer/ProductCardContainer";
import productsDummy from "../../lib/dummyData/productsDummy";


const Index = () => {
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
                onAddToCart={() => console.log(`Added to cart`)}
            />
          ))
            

              }
      </ProductCardContainer>
        </div>
     );
}
 
export default Index;