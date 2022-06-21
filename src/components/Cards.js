import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import image1 from './images/g-1.jpg';
import image2 from './images/g-2.jpg';
import image3 from './images/g-3.jpg';
import image4 from './images/g-4.jpg';
import image5 from './images/g-5.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1> Check out these Epic Destinations! </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem 
                    src={image1}
                    text='Explore the hidden waterfall deep in the Amazon Jungle'
                    label='Adventure'
                    path='/services'
                />
                <CardItem 
                    src={image2}
                    text='Travel through the Island of Bali in a private Cruise'
                    label='Luxury'
                    path='/services'
                />
            </ul>
            <ul className='cards__items'>
                <CardItem 
                    src={image3}
                    text='Explore the hidden waterfall deep in the Amazon Jungle'
                    label='Adventure'
                    path='/services'
                />
                <CardItem 
                    src={image4}
                    text='Travel through the Island of Bali in a private Cruise'
                    label='Luxury'
                    path='/services'
                />
                <CardItem 
                    src={image5}
                    text='Travel through the Island of Bali in a private Cruise'
                    label='Luxury'
                    path='/services'
                />
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;