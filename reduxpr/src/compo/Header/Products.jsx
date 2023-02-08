import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Products.scss';
const Products = () => {
    const [products,setProducts]=useState([]);
    const [loading,setLoading]= useState(false);
    useEffect(()=>{
        getProduct();
    })
    const getProduct=async()=>{
        try{
            const data=await axios.get('https://fakestoreapi.com/products').then((res)=>{
                console.log(res.data);
                setProducts(res.data);
                setLoading(true);
            }).catch((err)=>{
                console.log(err.message);
            });

        }catch(e){
            console.log(e);
        }
    }
  return (
    <div className='main'>
        {
            loading?(products.map((e)=>(
                <article key={e.id}>
                    <img src={e.image} alt={e.title} />
                    <p><b>category:</b>{e.category}</p>
                    <p><b>description:</b>{e.description}</p>
                </article>
            ))):<h1>Loading.....</h1>
        }
    </div>
  )
}

export default Products