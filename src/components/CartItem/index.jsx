import React from 'react';
import { Trash2 } from 'feather-icons-react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useCart } from '../../context/CartProvider';

function CartItem({ item, loading }) {
  const { removeFromCart, addItem, removeItem } = useCart();

  return (
    <div className='bg-white p-4 rounded-lg flex'>
      {loading ? (
        <Skeleton className='h-36 w-60 object-cover rounded' />
      ) : (
        <img className='h-36 w-60 object-cover rounded' src={item.imageUrl} alt='' />
      )}

      <div className='flex flex-col w-full justify-between px-8'>
        <div className='flex justify-between'>
          <div className="flex flex-col">
            {loading ? (
              <>
                <Skeleton width={200} height={20} />
                <Skeleton width={150} height={15} />
              </>
            ) : (
              <>
                <h1 className='text-md text-slate-700 font-semibold'>{item.name}</h1>
                <p className='text-xs text-slate-600'>{item.description}</p>
              </>
            )}
          </div>

          <div className='flex justify-between items-center mt-5'>
            <div className='flex flex-col items-end'>
              {loading ? (
                <Skeleton width={100} height={20} />
              ) : (
                <>
                  <p className={item.priceWithDiscount ? 'line-through text-sm text-slate-600 font-medium' : 'text-lg text-slate-600 font-medium'}>
                    {item.price?.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    })}
                  </p>
                  {item.priceWithDiscount && (
                    <p className='text-green-500 text-lg font-medium'>
                      {item.priceWithDiscount?.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                      })}
                    </p>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        <div className='flex justify-end mt-4'>
          <div className='flex gap-2 items-center'>
            {loading ? (
              <Skeleton circle width={28} height={28} />
            ) : (
              <button onClick={() => removeFromCart(item.id)} className='border-2 border-red-600 rounded w-7 h-7'>
                <Trash2 className="relative left-1 w-4 h-4 text-red-600" />
              </button>
            )}
            {loading ? (
              <Skeleton circle width={28} height={28} />
            ) : (
              <>
                <button onClick={() => item.quantity > 0 && removeItem(item.id)} className='border-2 border-black rounded w-7 h-7'>
                  <p className='relative top-[-4px] text-black text-lg font-bold'>-</p>
                </button>
                <p>{item.quantity}</p>
                <button onClick={() => item.quantity < item.quantityAvaiable && addItem(item.id)} className='border-2 border-black rounded w-7 h-7'>
                  <p className='relative top-[-4px] text-black text-lg font-bold'>+</p>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
