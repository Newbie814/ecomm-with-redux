import React from 'react';

// import { Link } from 'react-router-dom';

import ProductCard from '../product-card/product-card.component';
import {
  CategoryPreviewContainer,
  Preview,
  Title,
} from './category-preview.styles';

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>

      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;

// import ProductCard from '../product-card/product-card.component';

// import './category-preview.styles.scss';

// const CategoryPreview = ({ title, products }) => (
//   <div className='category-preview-container'>
//     <h2>
//       <span className='title'>{title.toUpperCase()}</span>
//     </h2>
//     <div className='preview'>
//       {products
//         .filter((_, idx) => idx < 4)
//         .map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//     </div>
//   </div>
// );

// export default CategoryPreview;
