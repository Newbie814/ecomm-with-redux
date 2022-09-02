// import React from 'react';

// import { useContext } from 'react';

// import { CategoriesContext } from '../../contexts/categories.context';
// import CategoryPreview from '../../components/category-preview/category-preview.component';

// import './shop.styles.scss';

// const Shop = () => {
//   const { categoriesMap } = useContext(CategoriesContext);

//   return (
//     <div className='shop-container'>
//       {Object.keys(categoriesMap).map((title) => {
//         const products = categoriesMap[title];
//         return (
//           <CategoryPreview key={title} title={title} products={products} />
//         );
//       })}
//     </div>
//   );
// };

// export default Shop;

import { useContext } from 'react';

import CategoryPreview from '../../components/category-preview/category-preview.component';

import { CategoriesContext } from '../../contexts/categories.context';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((key) => {
        const products = categoriesMap[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      })}
    </>
  );
};

export default CategoriesPreview;
