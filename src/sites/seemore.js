
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./SeeMore.css"; // Custom CSS file

const SeeMore = () => {
    const { RecipiId } = useParams();
    const [recipedetails, setRecipedetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const { data } = await axios.get(`https://dummyjson.com/recipes/${RecipiId}`);
                setRecipedetails(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
    }, [RecipiId]);

    if (loading) {
        return <div className="loading">Please wait, data is loading...</div>;
    }

    if (error) {
        return <div className="error">Failed to fetch recipe details. Please try again later. <p>{error}</p></div>;
    }

    if (!recipedetails) {
        return <div className="error">No recipe details found.</div>;
    }

    return (
        <>
           <center><h2 style={{fontFamily:"cursive",color:"#AF47D2"}}>Get Your Recipe Details Here</h2></center>
            <div className="container">
                <div className="recipe-card">
                    <div className="card-body">
                        <h2 className="card-title">{recipedetails.name}</h2>
                        <div className="image-container">
                            <img
                                src={recipedetails.image}
                                alt={recipedetails.name}
                                className="recipe-image"
                            />
                        </div>
                        <div className="card-content">
                            <div className="section">
                                <h5>Ingredients</h5>
                                <ul className="list ingredients-list">
                                    {recipedetails.ingredients?.map((ingredient, index) => (
                                        <li key={index} className="list-item">
                                            {ingredient}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="section">
                                <h5>Instructions</h5>
                                <ul className="list instructions-list">
                                    {recipedetails.instructions?.map((instruction, index) => (
                                        <li key={index} className="list-item">
                                            {instruction}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                           <center> <button>Add To Cart</button></center>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SeeMore;
