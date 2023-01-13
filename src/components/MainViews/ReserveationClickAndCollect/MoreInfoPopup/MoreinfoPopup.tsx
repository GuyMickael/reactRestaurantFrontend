import { Dialog } from '@mui/material';
import React from 'react';
import IDishes from '../../../../types/dishes.type';
import GenericSerparator from '../../../GenericComponents/GenericSeparator';
import { ImSpoonKnife } from 'react-icons/im'
import { CgDanger } from 'react-icons/cg'
import {CiCircleInfo} from 'react-icons/ci'

interface Props {
  dish: IDishes,
  isOpened: boolean,
  close: () => void
}

const MoreInfoPopup: React.FC<Props> = ({dish, isOpened, close}) => {
  return (
    <Dialog open={isOpened} onClose={close} fullWidth>
      <div id="Popup" className='w-full h-96'>
        <div className='w-full h-1/2 bg-gray-300'>
          <img src={dish.image} alt={dish.name} className='w-full h-full object-cover' />
        </div>
        <div className='w-full h-1/2 flex flex-col relative p-1'>
          <h1 className='text-2xl font-bold'>{dish.name}</h1>
          <p className='text-sm absolute mt-2 right-2'>{dish.price} €</p>
          {dish.isVegetarian && <p className='text-sm text-green-600'>Végétarien</p>}
          {dish.isVegan && <p className='text-sm text-green-600'>Vegan</p>}
          {dish.isGlutenFree && <p className='text-sm text-amber-300'>Sans gluten</p>}
          <p className='text-sm mt-2'>{dish.description}</p>
          <p className="flex justify-center mt-2">
            Liste d'ingredients 
            <ImSpoonKnife className='mt-1'/> 
          </p>
          <ol>
            {dish.ingredients.map((ingredient) => {
              return (
                <li key={ingredient}>
                  <CiCircleInfo className='inline-block' />
                  {' '+ingredient}
                </li>
              );
            })}
          </ol>
          <p className="flex justify-center">
            Liste d'allergènes 
            <ImSpoonKnife className='mt-1'/> 
          </p>
          <ol>
            {dish.allergens.map((allergen) => {
              return (
                <li key={allergen}>
                  <CgDanger className='inline-block' />
                  {'    '+allergen}
                </li>
              );
            })}
          </ol>

        </div>
      </div>
    </Dialog>
  );
};

export default MoreInfoPopup;