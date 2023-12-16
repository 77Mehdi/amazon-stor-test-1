
import Navigation from './navigation/Nav';
import Product from './prodect/Product';
import Recomended from './recomended/Recomended';
import Saidbar from './insaidbar/Saidbar';
import { useState ,useEffect } from 'react';
import Cards from './components/Card';
import axios from 'axios';


function Stoor() {
    const[selectcatigory,setselectcatigory] = useState(null)
    const[query,setquery] = useState("")
    const [data ,setData] = useState([])
     const api = "http://localhost:3001"



useEffect(()=>{
     axios.get(`${api}`).then(res=>{
                  setData(res.data)
      })

},[])







   
//////////// input filter ///////////////////////
    

    const handelInputChange =(e)=>{
             setquery(e.target.value)
    }

    const datafilter = data.filter(
        (product)=>product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() )!== -1
        )
// ###### radio filter

const handelRadio =(e)=>{
    setselectcatigory(e.target.value)
    
}

//##### button filter
const handelButton=(e)=>{
      setselectcatigory(e.target.value)
} 
// -----------

function filterdata(){
    
    let filterProdect = data
    // filterin inpot sherch
    if(query){
        filterProdect = datafilter
    }
    // filter selected
    if(selectcatigory){
        filterProdect =filterProdect.filter(
            ({ category, color, company, newPrice, title }) =>
            category === selectcatigory||
            color === selectcatigory ||
            company === selectcatigory ||
            newPrice === selectcatigory ||
            title === selectcatigory
        )
    };

    return filterProdect.map(
        ({ id,img, title, star, reviews, prevPrice, newPrice  }) => (
          <Cards
            key={id}
            img={img}
            title={title}
           // star={star}
            reviews={reviews}
            prevPrice={prevPrice}
            newPrice={newPrice}
          />
        )
      );
    }

  const resolt = filterdata();
  return (
   <>
   <Saidbar handelRadio={handelRadio}/>
    <Navigation  myquery={query} handelInputChange={handelInputChange}/>
    <Recomended  handelButton={handelButton}/>
    <Product resolt={resolt}/>
    
    
   </>
  );
}

export default Stoor;
