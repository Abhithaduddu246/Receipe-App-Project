import axios from "axios";
import { useState, useEffect } from "react";
import CustomList from "../list/customlist";
import "./receipe.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ReceipeComponent = () => {
  const [receipeList, setReceipeList] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchReceipes = async () => {
      try {
        const { status, data } = await axios.get("https://dummyjson.com/recipes");
        if (status === 200) {
          setReceipeList(data.recipes);
          setLoader(false);
        }
      } catch (err) {
        setError(true);
        setLoader(false);
      }
    };
    fetchReceipes();
  }, []);

  return (
    <div className="container mt-4">
      {loader ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      ) : error ? (
        <h4>Failed to fetch recipes. Please try again later.</h4>
      ) : (
        <>
          <center>
            <h1 style={{ fontFamily: "cursive", color: "#AF47D2" }}>
              Get Your Recipe Detail Here
            </h1>
          </center>
          <div className="d-flex flex-wrap justify-content-around">
            {receipeList.map((eachReceipe, index) => {
              const { name, image, ingredients, instructions } = eachReceipe;
              return (
                <div key={index} className="card recipe-card mb-4">
                  <img
                    src={image}
                    className="card-img-top"
                    alt={name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6>Ingredients:</h6>
                    <CustomList list={ingredients} />
                    <h6>Instructions:</h6>
                    <CustomList list={instructions} />
                    <center><button className="btn btn-primary mt-3">Add to Cart</button></center>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default ReceipeComponent;
