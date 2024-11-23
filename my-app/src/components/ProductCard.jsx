import "../style/productCard.css"
import Frame from "../assets/Frame 3.png"

export default function ProductCard() {
  return (
    
    <div className="product-card">
      <img src={Frame} alt="" className="img"/>
      <div className="description">
      <h2>San Francisco</h2>
      <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, repellendus sapiente esse eius dolore reiciendis consectetur.</p>
      <button className="btn">Details</button>
      </div>
    </div>
  )
}
