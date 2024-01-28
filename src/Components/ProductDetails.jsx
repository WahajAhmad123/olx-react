import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductDetails(title,description,thumbnail,price) {
  const id = useParams()
  const [data , setdata]=useState();
  
  useEffect(()=>{
    axios.get(`dummyjson.com/products/${id}`)
    .then(function (response) {
      setdata(response.products);
      console.log(response)
      
    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
  

  })
  // console.log(id);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src='https://cdn.dummyjson.com/product-images/2/thumbnail.jpg' class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://cdn.dummyjson.com/product-images/5/thumbnail.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://cdn.dummyjson.com/product-images/4/thumbnail.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h1>BEST PHONE EVER</h1>
            <p>This is a smart phone</p>
            <p>PRICE:1000$ </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails
