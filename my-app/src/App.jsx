import ProductCard from "./components/ProductCard"
export default function App() {
  return (
    <div className="container">
      <h1>The Trips</h1>
      <div className="product-container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}
