import { useRouter } from "next/router";
import baseUrl from "../../helpers/baseUrl";
import { useRef, useEffect } from "react";
const Product = ({ product }) => {
  const modalRef = useRef(null);
  useEffect(() => {
      M.Modal.init(modalRef.current);
    },
    []);
  const router = useRouter();
  if (router.isFallback) {
    return <h3>loading...</h3>;
  }
  // <!-- Modal Structure -->

  const getModal = () => {
    return (
      <div id="modal1" className="modal" ref={modalRef}>
        <div className="modal-content">
          <h4>{product.name}</h4>
          <p>Are you sure you want to delete this </p>
        </div>
        <div className="modal-footer">
        <button
            className="btn waves-effect waves-light  #1565c0 blue darken-3"
          >
            Cancel
          </button>
          <button onClick={()=>deleteProduct()}
            className="btn waves-effect waves-light  #d50000 red accent-4"
          >
            Yes
          </button>
         
        </div>
      </div>
    );
  };
  const deleteProduct=async()=>{
   const res=await fetch(`${baseUrl}/api/product/${product._id}`,{
    method:"DELETE"
   })
  await res.json()
   router.push("/")

  }

  return (
    <div className="container center-align">
      <h3>{product.name}</h3>
      <img style={{ width: "30%" }} src={product.mediaUrl} />

      <h5>Rs{product.price}</h5>
      <input
        type="number"
        style={{
          width: "400px",
          margin: "10px",
          min: "1",
          placeholder: "Quantity",
        }}
      />

      <button className="btn waves-effect waves-light #1565c0 blue darken-3">
        add
        <i className="material-icons right">add</i>
      </button>

      <p children="left-align">{product.description}</p>

      <button
        data-target="modal1"
        className=" btn modal-trigger  waves-light #d50000 red accent-4
"
      >
        Delete
        <i className="material-icons left">delete</i>
      </button>
      {getModal()}
    </div>
  );
};

// export async function getServerSideProps({params:{id}}) {
//   const res= await fetch(`http://localhost:3000/api/product/${id}`)
//    const data= await res.json()
//     return {
//       props: {product:data}, // will be passed to the page component as props
//     }
//   }

export async function getStaticProps({ params: { id } }) {
  const res = await fetch(`${baseUrl}/api/product/${id}`);
  const data = await res.json();
  return {
    props: { product: data }, // will be passed to the page component as props
  };
}
export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "626be9a917e8f6925a4c509e" } }],
    fallback: true,
  };
}

export default Product;
