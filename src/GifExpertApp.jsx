import React from 'react';
import { useState } from 'react';
import { Addcategory, GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);
  const onAddCategory = (newCategory) => {
    //categories.push(newCategory);
    console.log(newCategory);
    let catLowCase = categories.map((element) => element.toLowerCase());
    if (catLowCase.includes(newCategory.toLowerCase())) {
      return;
    }
    setCategories([newCategory, ...categories]);
    //setCategories((cat) => ['valorant', ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <Addcategory
        //setCategories={setCategories}
        onNewCategory={(event) => onAddCategory(event)}
      />
      {/* listado de los gifs */}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
