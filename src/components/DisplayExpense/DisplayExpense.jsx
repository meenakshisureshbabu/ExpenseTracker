import React from 'react'
import * as expenseAPI from '../../utilities/expense-api'

function DisplayExpense({user,setUser,expensedatadisplay,delflag,setDelflag}) {

    const handleDelete = async (incid) => {
        try{
          const deleteexpense = await expenseAPI.deleteExpense(incid)
          setDelflag(true);
        }
        catch(e){
    
        }
    
      }
  return (
    <div className='display-main-div'>
        {
        expensedatadisplay.map((data) => {
         return(
          <div className='expense-data-display-div' key={data._id}>
            <div className='whole-data-div'>
            <div className='data-div'>{data.category}</div>
            <div className='data-div'>{data.title}</div>
            <div className='data-div'>{data.amount}</div>
            <div className='data-div'>{data.expdate}</div>
            <div className='data-div'>{data.desc}</div>
            <div className='data-delet-div' onClick={()=>handleDelete(data._id)}>🗑️</div>
            </div>
          </div>
         )
        }) 
      }
    </div>
  )
}

export default DisplayExpense