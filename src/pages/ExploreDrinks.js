import React from 'react';
import MenuInferior from '../components/MenuInferior/MenuInferior';
import Header from '../components/Header/Header';
import ExploreButton from '../components/ExploreButtons/ExploreButton';

function ExploreDrinks() {
  return (
    <div>
      <Header />
      <div className=" d-flex flex-row justify-content-center">
        <ExploreButton data-testid="explore-by-ingredient" buttonName="Ingredient" />
        <ExploreButton buttonName="Nationality" />
        <ExploreButton buttonName="Surprise" />
      </div>
      <MenuInferior />
    </div>
  );
}

export default ExploreDrinks;
