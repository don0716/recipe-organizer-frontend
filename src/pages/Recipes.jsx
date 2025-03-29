import Header from "../components/Header";
import useFetch from "../useFetch";
import { Link } from "react-router-dom";
import { useState } from "react";

function Recipes() {

    const [searchValue, setSearchValue] = useState("")
    const [successMessage, setSuccessMessage] = useState("")

    const {data, loading, error} = useFetch(`https://recipe-organizer-backend-dusky.vercel.app/recipes`)


    const handleDelete = async (recipeId) => {
        setSuccessMessage("")
        try{
            const res = await fetch(`https://recipe-organizer-backend-dusky.vercel.app/recipes/${recipeId}`, {
                method: "DELETE"
            })
            if(!res.ok){
                console.log(res)
                console.log("Failed to Delete")
                setSuccessMessage("Failed to Delete Recipe.")
                throw "Failed to Delete Recipe."
            }

                const data = await res.json()
                if(data) {
                    setSuccessMessage("Recipe Deleted Successfully")
                    window.location.reload()
                }
                
                
        }catch(error) {
            console.log("error", error)
        }
    }

    const filterByName = data?.filter((recipe) => recipe.name.toLowerCase() === searchValue.toLowerCase() )
    
    const filteredRecipes = filterByName?.length > 0 ? filterByName : data

  


  return (
    <>
     <Header />

     <div className="container">

        <div className="row my-2 py-2">
            <div className="col-md-6">
             <input onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="Search by recipe name..." className="form-control" />
            </div>
        </div>

        <div>
            <h1>All Recipies:</h1>
            <div className="">{successMessage}</div>

            <div>

                {loading && "Loading..."}
                
                <div className="row">
                {filteredRecipes ? filteredRecipes?.map(recipe => (
                    <div className="col-md-3 py-2" key={recipe._id}>

                        <div className="card ">
                            <img src={recipe.imageLink} alt={`${recipe.name} Image`} className="card-img-top img-fluid" style={{objectFit: "cover", height: "60vh"}}  />

                            <div className="card-body">
                                <h2 className="card-title">{recipe.name}</h2>
                                <p className="card-text"> <strong>Cuisine Type: </strong> {recipe.cuisine} </p>
                                <p className="card-text"> <strong>Ingredients: </strong> <Link to={`/recipedetails/${recipe._id}`} >See Recipe... </Link>  </p>
                                <p className="card-text"> <strong>Instructions: </strong> <Link to={`/recipedetails/${recipe._id}`} >See Recipe... </Link></p>
                                <button className="btn btn-danger" onClick={() => handleDelete(recipe._id)}>Delete</button>
                            </div>
                        </div>
                        
                    </div>
                )) : error && "Error"}
                </div>

            </div>


        </div>
        

     </div>
      
    </>
  );
}

export default Recipes;
