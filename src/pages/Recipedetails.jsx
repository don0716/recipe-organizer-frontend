import { Link } from "react-router-dom"
import Header from "../components/Header"
import { useParams } from "react-router-dom"
import useFetch from "../useFetch"


const RecipeDetails = () => {

    const recipeId = useParams()
    console.log("ID::" ,recipeId)

    const {data, loading, error} = useFetch(`https://recipe-organizer-backend-dusky.vercel.app/recipes/recipebyid/${recipeId.recipeid}`)

    const recipe = data?.recipeDetails
    console.log("REcipe: ,", recipe)
    

    return (
        <> 
        <Header />

           <div className="container">



            <div className="my-2">

                {loading && "Loading..."}


                {recipe ? (
                    <div>
                        <h2 className="my-2">{recipe?.name}</h2>
           <div className="card my-2">

                    <div className="row">
                        <div className="col-md-4">
                            <img style={{objectFit: "cover", height: "80vh", borderRadius: "5px"}}  className="img-fluid" src={recipe?.imageLink} alt={`${recipe?.name} Image`} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Cuisine: {recipe?.cuisine}</h5>
                                <p className="card-text"><strong>Ingredients:</strong><br />{recipe?.ingredients}</p>
                                <p className="card-text"></p>
                                <p className="card-text">
                                <strong>Instructions:</strong> <br></br>
                                <ol>
                                {recipe?.instructions.map(ins => (
                                        <li>
                                            {ins}
                                        </li>
                                    ))}
                                </ol>
                                </p>
                            </div>
                        </div>
                    </div>

                    </div>
                    </div>
                ) : error && "Error"}



            </div>

           
            
           



           
           
           </div>
        </>
    )
}

export default RecipeDetails 