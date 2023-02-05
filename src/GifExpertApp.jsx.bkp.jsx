import React from 'react';
import { useState } from 'react';
import { Addcategory } from './components/AddCategory';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);
  const onAddCategory = (newCategory) => {
    //categories.push(newCategory);
    console.log(newCategory);
    //setCategories([newCategory, ...categories]);
    //setCategories((cat) => ['valorant', ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <Addcategory
        setCategories={setCategories}
        //onNewCategory={(event) => onAddCategory(event)}
      />

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
