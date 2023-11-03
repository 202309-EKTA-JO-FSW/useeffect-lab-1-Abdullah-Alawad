import DogList from '../Components/DogList/DogList'
import Form from '../Components/Form/Form'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'
import {inputText} from '../Components/Form/Form'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
   const [items, setItems] = useState([]);
   const [number, setNumber] = useState(0);



   useEffect(() => {
    fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
    .then(res => res.json())
    .then((data) => setItems(data))
   }, [number])

   return (
    <div className="card">
      {/* When the button is clicked in the form, it should fetch the information. 
          How can we do that by utilizing useState?
          
      */}
      <Form setNumberOfDogs={setNumber}/>
      {/* This page should receive the images array */}
      <DogList dogsList={items.message}/>
    </div>
  );
}

