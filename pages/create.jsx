import { useState } from "react";

const Create = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [media, setMedia] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(name,price,media,description)
  }

  return (
    <form className="container" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        name="price"
        placeholder="Price"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <div className="file-field input-field">
        <div className="btn #1565c0 blue darken-3">
          <span>File</span>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setMedia(e.target.files[0])}
          />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <img
        className="responsive-img"
        src={media ? URL.createObjectURL(media) : ""}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        className="materialize-textarea"
      ></textarea>
      <button
        className="btn waves-effect waves-light #1565c0 blue darken-3"
        type="submit"
      >
        Submit
        <i className="material-icons right">send</i>
      </button>
    </form>
  );
};

export default Create;
