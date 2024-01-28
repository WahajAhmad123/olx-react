
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MyNav from './Components/MyNav';
import {Outlet} from 'react-router-dom';
import  Cards  from './Components/Cards';
import MyFooter from './Components/MyFooter';
import Categories from './Components/Categories';
// import axios from 'axios';
import { useEffect,useState } from 'react';
import { Dataa } from './Components/Dataa';
import {Link } from 'react-router-dom';
import ProductDetails from './Components/ProductDetails';






function Home() {
  const [data , setdata]=useState();
  
  useEffect(()=>{
  //   axios.get('dummyjson.com/products')
  // .then(function (response) {
  //   setdata(response);
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log(error);
  // })
  // .finally(function () {
  //   // always executed
  // });

  setdata(Dataa.products);
  console.log(Dataa)
  
  // console.log(NewData)

  })
  return (
    <div className="App">
      
      <div> 
          {/* {JSON.stringify(data)} */}
      </div>
      <Categories/>
      <div className='mycrd'>
      {data?.map((e)=>{
        
        
        return(
          
          <Link to={`product/${e.id}`}>
            <Cards title={e.title} thumbnail={e.thumbnail} description={e.description}/>
            </Link>
              
              
              
              )
            })}

      </div>
      
      
      
      
      
    
    </div>
  );
}

export default Home;
