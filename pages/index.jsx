import Link from "next/link";
import baseUrl from "../helpers/baseUrl";

const Home = ({products}) => 
{
  console.log(products);

  const productList=products.map(product=>{
   
  return (
    <div className="card pcard" key={product._id}>
    <div className="card-image">
      <img src={product.mediaUrl}/>
      <span className="card-title black-text">{product.name}</span>
    </div>
    <div className="card-content">
      <p>Rs {product.price}</p>
    </div>
    <div className="card-action">
      <Link href={"/product/[id]"} as={`/product/${product._id}`}>
        <a>view product</a>
</Link>
    </div>
  </div>

  );
})
return <div className="rootcard">
  {productList}
</div>
}


export async function getStaticProps(){
  const res=await fetch (`${baseUrl}/api/products`)
 const data=await res.json()
 return {
   props:{
     products:data
   }
 }
}
export default Home;
