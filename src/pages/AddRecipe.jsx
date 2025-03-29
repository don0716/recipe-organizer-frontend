import { useState } from "react"
import Header from "../components/Header"

const AddRecipe = () => {

    const [AddRecipeFormData, setAddRecipeFormData] = useState({
        name: "",
        cuisine: "",
        imageLink: "",
        ingredients: "",
        instructions: []
    })

    const recipeSubmitHandler = async (event) => {
        event.preventDefault()

        try{

            const res = await fetch(`https://recipe-organizer-backend-dusky.vercel.app/recipes`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"

                },
                body: JSON.stringify(AddRecipeFormData)
            })
            if(!res.ok){
                console.log(res)
                throw "Failed to Add Recipe"
            } else {
                const data = await res.json()
                console.log("Added Recipe: ", data)
            }

        }catch(error){
            console.log(error)
        }

    }

    const handleChange = (e) =>{
        const {name, value} = e.target
        
        setAddRecipeFormData(prevState => ({
            ...prevState,
            [name]: name === "instructions" ? value.split(",") : value

        }) )
        
    }


    return (

        <>
          <Header />
          <div className="container">
            <h1 className="py-2">Add Recipe</h1>

            <form onSubmit={recipeSubmitHandler}>
                <label className="form-label"  htmlFor="name">Name:</label>
                <input name="name" className="form-control" type="text" value={AddRecipeFormData.name} onChange={handleChange} />

                <label className="form-label" htmlFor="cuisine">Cuisine Type:</label>
                <input name="cuisine" className="form-control" type="text" value={AddRecipeFormData.cuisine} onChange={handleChange} />

                <label className="form-label" htmlFor="imageLink">Image Link:</label>
                <input name="imageLink" className="form-control" type="text" value={AddRecipeFormData.imageLink} onChange={handleChange} />

                <label className="form-label" htmlFor="ingredients">Ingredients:</label>
                <input name="ingredients" className="form-control" type="text" value={AddRecipeFormData.ingredients} onChange={handleChange} />

                <label className="form-label" htmlFor="instructions">Instructions:</label>
                <input placeholder="Add Instructions with ',' sign between each point" name="instructions" className="form-control" type="text" value={AddRecipeFormData.instructions} onChange={handleChange} />

                <button className="btn btn-primary mt-2" type="submit">Submit</button>


            </form>
        </div>
        </>
        
    )
}

export default AddRecipe