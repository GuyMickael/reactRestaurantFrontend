import React from 'react';
import IDishes from '../../../../types/dishes.type';
import { BsInfoCircle } from 'react-icons/bs';
import { IconButton, Tooltip } from '@mui/material';
import MoreInfoPopup from '../MoreInfoPopup/MoreinfoPopup';
import {CiWheat} from 'react-icons/ci'

interface Props {
  dish: IDishes;
}

const ArticleClickAndCollect: React.FC<Props> = ({dish}) => {
  
  const [isOpened, setIsOpened] = React.useState(false);

  const closePopup = () => {
    setIsOpened(false);
  }

  return (
    <div className='relative max-sm:w-full flex dark:bg-slate-600 border-2 border-gray-500 dark:border-slate-300 rounded-md'>
      <MoreInfoPopup dish={dish} isOpened={isOpened} close={closePopup}/>
      <div className='w-1/3'>
      <img src={dish.image} alt={dish.name} className='w-full h-full p-0.5 object-cover rounded-md' />
      </div>
      <div className="relative w-2/3  h-40">
        <p className='absolute left-4 top-1 font-bold'>
          {dish.name}
        </p>
        <p className='absolute right-5 top-1 font-extralight text-green-600'>
          {dish.isVegetarian && 
          <>
            <span className="sr-only">Veggie Product</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0H24V24H0z"/><path d="M21 3v2c0 9.627-5.373 14-12 14H5.243C5.08 19.912 5 20.907 5 22H3c0-1.363.116-2.6.346-3.732C3.116 16.974 3 15.218 3 13 3 7.477 7.477 3 13 3c2 0 4 1 8 0zm-8 2c-4.418 0-8 3.582-8 8 0 .362.003.711.01 1.046 1.254-1.978 3.091-3.541 5.494-4.914l.992 1.736C8.641 12.5 6.747 14.354 5.776 17H9c6.015 0 9.871-3.973 9.997-11.612-1.372.133-2.647.048-4.22-.188C13.627 5.027 13.401 5 13 5z" fill="rgba(33,198,105,1)"/></svg>
          </>
          }
        </p>
        <p className='absolute right-5 top-1 font-extralight text-green-600'>
          {dish.isVegan && 
          <>
            <span className="sr-only">Vegan Product</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0H24V24H0z"/><path d="M21 3v2c0 9.627-5.373 14-12 14H7.098c.212-3.012 1.15-4.835 3.598-7.001 1.204-1.065 1.102-1.68.509-1.327-4.084 2.43-6.112 5.714-6.202 10.958L5 22H3c0-1.363.116-2.6.346-3.732C3.116 16.974 3 15.218 3 13 3 7.477 7.477 3 13 3c2 0 4 1 8 0z" fill="rgba(33,198,105,1)"/></svg>
          </>
          }
        </p>
        <p className='absolute right-0 top-0.5 text-amber-300'>
          {dish.isVegan && 
          <>
            <span className="sr-only">Gluten Free Product</span>
            <CiWheat size={28} />
          </>
          }
        </p>
        <p className='absolute top-10'>
          {dish.description}
        </p>
        <p className='absolute right-3 bottom-3 hover:text-blue-800 dark:hover:text-grey-900 transition ease-linear'>
          {dish.price} €
        </p>
        <div className='absolute left-1 bottom-1'>
          <Tooltip placement="top" title="Plus d'informations">
            <IconButton className='p-0' onClick={() => setIsOpened(true)}>
              <BsInfoCircle className='dark:text-slate-50 hover:text-blue-800 dark:hover:text-grey-900 transition ease-linear' />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default ArticleClickAndCollect;