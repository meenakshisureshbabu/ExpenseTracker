import React, { useEffect, useState } from 'react'
import '../DisplayIncome/displayincome.css'
import * as incomeAPI from '../../utilities/income-api'


function DisplayIncome({user,setUser,incomedatadisplay,delflag,setDelflag}) {

  const handleDelete = async (incid) => {
    try{
      const deleteincome = await incomeAPI.deleteIncome(incid)
      setDelflag(true);
    }
    catch(e){

    }

  }


  return (
    <div className='display-main-div'>
      {
        incomedatadisplay.map((data) => {
         return(
          <div className='income-data-display-div' key={data._id}>
            <div className='whole-data-div'>
            <div className='data-div'>{data.category}</div>
            <div className='data-div'>{data.title}</div>
            <div className='data-div'>{data.amount}</div>
            <div className='data-div'>{data.incdate}</div>
            <div className='data-delet-div' onClick={()=>handleDelete(data._id)}>🗑️</div>
            </div>
          </div>
         )
        }) 
      }
    </div>
  )
}

export default DisplayIncome