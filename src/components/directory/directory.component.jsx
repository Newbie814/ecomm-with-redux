import React from 'react';

import DirectoryItem from '../directory-item/directory-item.component';
import { DirectoryContainer } from './directory.styles';

const categories = [
  {
    id: 1,
    title: 'Hats',
    imageUrl:
      'https://res.cloudinary.com/dylvkdabj/image/upload/v1656612823/website%20pics%20family/hats_n6lkr1.jpg',
    route: 'shop/hats',
  },
  {
    id: 2,
    title: 'Jackets',
    imageUrl:
      'https://res.cloudinary.com/dylvkdabj/image/upload/v1656612821/website%20pics%20family/jackets_dk923p.jpg',
    route: 'shop/jackets',
  },
  {
    id: 3,
    title: 'Sneakers',
    imageUrl:
      'https://res.cloudinary.com/dylvkdabj/image/upload/v1656612819/website%20pics%20family/sneakers_vepe05.jpg',
    route: 'shop/sneakers',
  },
  {
    id: 4,
    title: "Women's",
    imageUrl:
      'https://res.cloudinary.com/dylvkdabj/image/upload/v1656612822/website%20pics%20family/women_z97kf7.jpg',
    route: 'shop/womens',
  },
  {
    id: 5,
    title: "Men's",
    imageUrl:
      'https://res.cloudinary.com/dylvkdabj/image/upload/v1656612823/website%20pics%20family/mens_afi2x6.jpg',
    route: 'shop/mens',
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
