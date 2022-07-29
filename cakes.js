//   Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) 
// and returns the maximum number of cakes Pete can bake (integer). 
// For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200).
//  Ingredients that are not present in the objects, can be considered as 0.

function cakes(recipe, available) {

    var requiredIngredients = [];
    var recipeArray = [];
    
    for(var ingredient in recipe){
      requiredIngredients.push(ingredient); 
    }
    
    console.log("Required ingredients:", requiredIngredients)
   
    for(let i = 0; i < requiredIngredients.length; i++){
      if(!available.hasOwnProperty(requiredIngredients[i])){
              return 0; 
      }
    } 
    
    for(var ingredient in recipe){
    recipeArray.push(Math.floor(available[ingredient] / recipe[ingredient]));
    }
    return Math.min(...recipeArray)
  }