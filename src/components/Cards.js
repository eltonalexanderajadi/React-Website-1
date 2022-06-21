import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1> Check out these Epic Destinations! </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem 
                    src='images/g-1.jpg'
                    text='Explore the hidden waterfall deep in the Amazon Jungle'
                    label='Adventure'
                    path='/services'
                />
                <CardItem 
                    src='images/g-2.jpg'
                    text='Travel through the Island of Bali in a private Cruise'
                    label='Luxury'
                    path='/services'
                />
            </ul>
            <ul className='cards__items'>
                <CardItem 
                    src='images/g-3.jpg'
                    text='Explore the hidden waterfall deep in the Amazon Jungle'
                    label='Adventure'
                    path='/services'
                />
                <CardItem 
                    src='images/g-4.jpg'
                    text='Travel through the Island of Bali in a private Cruise'
                    label='Luxury'
                    path='/services'
                />
                <CardItem 
                    src='images/g-5.jpg'
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