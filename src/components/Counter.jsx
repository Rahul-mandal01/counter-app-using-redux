import React from 'react'
import {useDispatch,useSelector } from 'react-redux';
import { increment, decrement } from '../redux/slices/CounterSlice';

const Counter = () => {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

  return (
    <div className='bg-[#E6E6FA] h-screen w-screen p-10' >
      
      <div className='flex justify-center font-bold text-4xl uppercase'
      >Counter App </div>
       <div
          className='flex justify-center items-center h-full w-full' 
       >

        <div className='bg-[#f0900a] flex p-[20px] '>
          <button
              onClick={() => dispatch(decrement())}
              className='mr-[20px] text-2xl text-green-900 font-bold border-r-2 pr-5 border-black'
            >
              Decrement
            </button>

            <div
            className='text-2xl text-green-900 font-bold ' 
          >{count}
          </div>

          <button
                  onClick={() => dispatch(increment())}
                  className='text-2xl text-green-900 font-bold ml-[20px] border-l-2 pl-5 border-black' 
            >
              Increment
          </button>


        </div>


       </div>
    </div>
  )
}

export default Counter;
