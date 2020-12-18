import axios from 'axios'
import {fetchRecipesAction} from '../../redux/actions'

const ENDPOINT_RECIPES = "https://api.spoonacular.com/recipes/complexSearch"
const apiKey = "9e44c6fbb9614109a4c78be48b554533"
const MAX_PER_PAGE = 30

export const fetchRecipes = async (dispatch,query) => {
  try {
    console.log('In recipes')
    const response = await axios.get(ENDPOINT_RECIPES, {
    params: {
      apiKey,
      number: MAX_PER_PAGE
    }
  })
  console.log('response = ', response.data.results)
    // ce que renvoie l'api change result
    dispatch(fetchRecipesAction(response.data.results))
  } catch (e) {
    console.log('error resquest recipe', e)
  }
  
}

