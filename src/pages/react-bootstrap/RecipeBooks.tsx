import React, { useState } from "react";
import { Ingredient, Recipe } from "./recipe.types";
import { Button, Col, Container, Row } from "react-bootstrap";
import RecipeList from "./RecipeList";

const mockData = [
  {
    id: "1",
    name: "Item 1",
    imgUrl: "https://dummyimage.com/50x50/000/fff.png",
    description: "Description item 1",
    ingredients: [{ name: "Ingredient 1", amount: 3 }],
  },
  {
    id: "2",
    name: "Item 2",
    imgUrl: "https://dummyimage.com/50x50/000/fff.png",
    description: "Description item 2",
    ingredients: [{ name: "Ingredient 2", amount: 3 }],
  },
];

const RecipeBooks = () => {
  const [recipes, setRecipes] = useState(mockData as Recipe[]);
  const [shppingIngredients, setShppingIngredients] = useState(
    [] as Ingredient[]
  );
  const [showCreate, setShowCreate] = useState<boolean>(false);
  return (
    <Container>
      <Row>
        <Col md={6}>
          <Button onClick={() => setShowCreate(true)}>New recipe</Button>
          <RecipeList recipes={recipes}/>
        </Col>
        <Col>{showCreate ? <>Form</> : <h3>Please select a recipe</h3>}</Col>
      </Row>
    </Container>
  );
};

export default RecipeBooks;
