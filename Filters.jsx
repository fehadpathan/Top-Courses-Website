import React from 'react';
import './Filters.css';

const Filters = (props) => {
    let filterdata=props.filterdata;
    // let category =props.category;
    let setCategory = props.setCategory;
 
    function clickfilterhandler(title){
      setCategory(title);
 
    }
   return (
     <>
       <div className="w-11/12 mx-auto py-4 flex justify-center space-x-4 gap-4">
         {
             filterdata.map((Data)=>(
                 <button  className='button'
                  key={Data.id}
                   onClick={() =>clickfilterhandler(Data.title)}>{Data.title}</button>
             ))
         }
       </div>
     
     </>
   )
 }
 
 export default Filters
