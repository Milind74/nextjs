import {useRouter} from 'next/router'
import baseUrl from '../../helpers/baseUrl'
const Product = ({product}) => {
    const router=useRouter()
    if(router.isFallback){
        return(
        <h3>loading...</h3>
        )
    }
  return (
    <div className='container center-align'>
       <h3>{product.name}</h3> 
       <img  style={{width:"30%"}} src={product.mediaUrl}/>
       
            <h5>Rs{product.price}</h5>
            <input type="number"
            style={{width:"400px",margin:"10px",
            min:"1",
            placeholder:"Quantity"}} />
            
  <button className="btn waves-effect waves-light">add
    <i className="material-icons right">add</i>
  </button>
            
  <button className="btn waves-effect waves-light #d50000 red accent-4
">Delete
    <i className="material-icons left">delete</i>
  </button>
        
            <p children="left-align"> 
            {product.description} 
</p>
    </div>
  )
}

// export async function getServerSideProps({params:{id}}) {
//   const res= await fetch(`http://localhost:3000/api/product/${id}`)
//    const data= await res.json()
//     return {
//       props: {product:data}, // will be passed to the page component as props
//     }
//   }


export async function getStaticProps({params:{id}}) {
  const res= await fetch(`${baseUrl}/api/product/${id}`)
   const data= await res.json()
    return {
      props: {product:data}, // will be passed to the page component as props
    }
  }
  export async function getStaticPaths() {
    return {
      paths: [
        { params: {id:"626be9a917e8f6925a4c509e"  } }
      ],
      fallback: true 
    };
  }



export default Product