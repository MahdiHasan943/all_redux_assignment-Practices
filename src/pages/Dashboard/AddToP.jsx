import React, { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux'
import { AddProducts } from '../../redux/thunk/addProducts';
const AddToP = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [des, setDes] = useState('');
  const [rating, setRating] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      name,
      image,
      price,
      des,
      rating,
      date
    };

    // Dispatch the action directly
    dispatch(AddProducts(product));

    console.log(product);

    // Clear the input fields
    setName('');
    setImage('');
    setPrice('');
    setDes('');
    setRating('');
    setDate('');
  };

  // ... rest of your component code

  return (
    <div className='relative py-4 flex justify-center items-center px-4 sm:px-16'>
      <div className="">
        <h1 className='text-indigo-600 font-semibold text-[22px] '>Add Products</h1>
        <form onSubmit={handleSubmit} className='grid gap-4 capitalize grid-cols-2'>
          <div className="flex flex-col">
            <label className='text-indigo-600' htmlFor="name">Name</label>
            <input value={name}  onChange={(e) => setName(e.target.value)} className='py-2 px-8 rounded-md border border-black' type="text" id="name" />
          </div>
          <div className="flex flex-col">
            <label className='text-indigo-600' htmlFor="image">Image</label>
            <input value={image} onChange={(e) => setImage(e.target.value)} className='py-2 px-8 rounded-md border border-black' type="url" id="image" />
          </div>
          <div className="flex flex-col">
            <label className='text-indigo-600' htmlFor="price">Price</label>
            <input value={price} onChange={(e) => setPrice(e.target.value)} className='py-2 px-8 rounded-md border border-black' type="number" id="price" />
          </div>
          <div className="flex flex-col">
            <label className='text-indigo-600' htmlFor="des">Description</label>
            <input value={des} onChange={(e) => setDes(e.target.value)} className='py-2 px-8 rounded-md border border-black' type="text" id="des" />
          </div>
          <div className="flex flex-col">
            <label className='text-indigo-600' htmlFor="rating">Rating</label>
            <input value={rating} onChange={(e) => setRating(e.target.value)} required className='py-2 px-8 rounded-md border border-black' type="number" id="rating" />
          </div>
          <div className="flex flex-col">
            <label className='text-indigo-600' htmlFor="date">Date</label>
            <input value={date} onChange={(e) => setDate(e.target.value)} className='py-2 px-8 rounded-md border border-black' type="date" id="date" />
          </div>
          <div className="">
            <input className='py-2 px-8 bg-indigo-600 text-white rounded-md hover:bg-indigo-400 duration-300 delay-150 ease-linear' type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddToP;
