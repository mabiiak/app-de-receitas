import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import DetailCard from '../components/DetailCard/DetailCard';
import FavoriteButton from '../components/RecipesDetailsPage/FavoriteButton';
import Ingredients from '../components/RecipesDetailsPage/Ingredients';
import Recommendation from '../components/RecipesDetailsPage/Recommendation';
import ShareButton from '../components/RecipesDetailsPage/ShareButton';
import VideoFood from '../components/RecipesDetailsPage/VideoFood';
import StartFoodButton from '../components/StartRecipeButtons/StartFoodButton';
import { getFoodDetails } from '../services/index';

function RecipeFoodDetails(props) {
  // useParams do router
  const { match: { params: { id } } } = props;
  // state padrão da recipe a ser detalhada
  const [foodRecipeDetail, setFoodRecipeDetail] = useState({});
  const [drinkRecommendation, setDrinkRecommendation] = useState({});
  const [disableStartButton, setDisableStartButton] = useState(false);
  const [localStorageDone, setLocalStorageDone] = useState([]);

  useEffect(() => {
    setLocalStorageDone(JSON.parse(localStorage.getItem('doneRecipes')));
    getFoodDetails(id)
      .then((response) => setFoodRecipeDetail(response.meals[0]))
      .catch((error) => console.error(error));
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
      .then((response) => response.json())
      .then((response) => setDrinkRecommendation(response));
  }, []);

  const [ingredients, setIngredients] = useState([]);

  const listIngredients = () => {
    const totalIngredients = 20;
    const ingredientsUsed = [];
    // talvez ocorra um conflito entre esse index e o index nas props (??)
    for (let i = 1; i < totalIngredients; i += 1) {
      if (foodRecipeDetail[`strIngredient${i}`]) {
        const ingredientsUsedList = foodRecipeDetail[`strIngredient${i}`];
        // nem todas as opções tem info
        if (ingredientsUsedList !== '' && ingredientsUsedList !== null) {
          ingredientsUsed.push(ingredientsUsedList);
        }
      }
    }
    setIngredients(ingredientsUsed);
  };

  const [measures, setMeasures] = useState([]);

  const ingredientMeasures = () => {
    const totalMeasures = 20;
    const measuresUsed = [];
    for (let i = 1; i < totalMeasures; i += 1) {
      if (foodRecipeDetail.strMeasure1 !== '') {
        const measuresUsedList = foodRecipeDetail[`strMeasure${i}`];
        if (measuresUsedList !== '' && measuresUsedList !== null) {
          measuresUsed.push(measuresUsedList);
        }
      }
    }
    setMeasures(measuresUsed);
  };

  function checkIfRecipeIsDone() {
    if (localStorageDone !== null) {
      setDisableStartButton(localStorageDone.some((
        recipe,
      ) => recipe.id === foodRecipeDetail.idMeal));
    }
  }

  useEffect(() => {
    listIngredients();
    ingredientMeasures();
    checkIfRecipeIsDone();
  }, [foodRecipeDetail]);

  return (
    <div>
      <DetailCard
        src={ foodRecipeDetail.strMealThumb }
        alt={ foodRecipeDetail.strMeal }
        tagName={ foodRecipeDetail.strTags }
        title={ foodRecipeDetail.strMeal }
        category={ foodRecipeDetail.strCategory }
        instructions={ foodRecipeDetail.strInstructions }
      />
      <Ingredients ingredients={ ingredients } measures={ measures } />
      <VideoFood
        videoFoods={ foodRecipeDetail.strYoutube }
      />
      <ShareButton
        link={ `foods/${id}` }
        testId="share-btn"
      />
      <FavoriteButton buttonName="food" foodRecipeDetail={ foodRecipeDetail } id={ id } />
      <Recommendation
        recommendations={ drinkRecommendation }
        type="drinks"
      />
      { !disableStartButton
      && <StartFoodButton
        name="drink"
        id={ foodRecipeDetail.idMeal }
        ingredients={ ingredients }
      />}
    </div>
  );
}

RecipeFoodDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default RecipeFoodDetails;
