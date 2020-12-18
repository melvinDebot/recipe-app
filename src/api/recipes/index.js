import axios from 'axios'
import { useDispatch } from 'react-redux'
import {fetchRecipesAction} from '../../redux/actions'

const ENDPOINT_RECIPES = "https://api.spoonacular.com/recipes/complexSearch"
const apiKey = "9e44c6fbb9614109a4c78be48b554533"
const MAX_PER_PAGE = 30

export const fetchRecipes = async (query) => {
  try {
    const reponse = await axios.get(ENDPOINT_RECIPES, {
    params: {
      apiKey,
      number: MAX_PER_PAGE
    }
  })
  const dispatch = useDispatch()
    dispatch(fetchRecipesAction(reponse.data.results))
  } catch (e) {
    console.log('error resquest recipe', e)
  }
  
}

