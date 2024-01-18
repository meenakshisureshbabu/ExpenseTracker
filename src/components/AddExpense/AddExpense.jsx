import React from 'react'
import AsideMenu from '../AsideMenu/AsideMenu'
import { useState,useEffect } from 'react';
import * as expenseAPI from '../../utilities/expense-api'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import DisplayExpense from '../DisplayExpense/DisplayExpense';
import '../AddExpense/addexpense.css'

function AddExpense({user,setUser}) {

    const [expensedata,setExpensedata] = useState({title:'',amount:'',expdate:'',category:'',desc:'',month:'',user:user._id})
    const [startDate, setStartDate] = useState(new Date());
    const [error,setError] = useState('');
    const [expensedatadisplay,setExpensedatadisplay] = useState([])
    const [status,setStatus] = useState();
    const [totalexpense,setTotalexpense] = useState(0);
    const [delflag,setDelflag] = useState();
    const handleChange = (e) => {
        setExpensedata({...expensedata,[e.target.name]:e.target.value})
        setError('')
    }

    useEffect(function(){
      async function handleExpensedata() {
        const expensedata = await expenseAPI.getExpensedata();
        //console.log(incomedata)
        setExpensedatadisplay(expensedata)
        calculateTotalAmt(expensedata);
      }
      handleExpensedata()
      setDelflag(false)
      setStatus(false)
    },[status,delflag]);

    function calculateTotalAmt(expensedata){
        let sum = 0
        for(let data of expensedata){
          sum = sum + data.amount;
  
        }
        setTotalexpense(sum);
      }

      async function handleAddExpense(e) {
        e.preventDefault();
        try{
            const expdate = new Intl.DateTimeFormat('en-US',{year: 'numeric', month: '2-digit',day: '2-digit'}).format(startDate)
            const month = expdate.substring(0,2)
            expensedata.expdate = expdate;
            expensedata.month = month;
            expensedata.category=document.getElementById("category").value;
            //setIncomedata(...incomedata,['incdate'],startDate)
            console.log("BEFORE SUBMITTING...",expensedata)
            const success = await expenseAPI.addItemToExpense(expensedata)
            setStatus(true);
            setError('Expense Added successfully')

        }
        catch{
            setError('Unable to add the expense')
        }
    }



  return (
    <div className="addexpense-div">
        <AsideMenu user={user} setUser={setUser} />
        <section>
        <div className="add-expense-div">
          <div className="add-expense-inner-div">
            <h2>TOTAL EXPENSE : {totalexpense}</h2>
          </div>

          <div className="add-expense">
            <div className="addexpenseform">
              
                <form>
                <div className="formdiv">
                  <div>
                    <input
                      type="text"
                      name="title"
                      placeholder="Expense Title" value={expensedata.title} onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="amount"
                      placeholder="Expense Amount" value={expensedata.amount} onChange={handleChange}
                    />
                  </div>
                  <div>
                 <DatePicker name="expdate" dateFormat="dd/MM/yyyy" selected={startDate} onChange={(date) => setStartDate(date)} /> 
                  </div>
                  <div className="select-div">
                    <select name="category" id="category" onChange={handleChange}>
                      <option value="🏠Rent">Rent</option>
                      <option value="🧾Bills">Bills</option>
                      <option value="📑Insurance">Insurance</option>
                      <option value="🧺Grocery">Grocery</option>
                      <option value="🪙Miscellaneous">Miscellaneous</option>
                      <option value="🎁Gifts">Gifts</option>
                      <option value="🛠️Repairs">Housing Repairs</option>
                      <option value="🍽️Restaurant">Restaurant</option>
                      <option value="✨Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <input className="desc-text"
                      type="textarea"
                      name="desc"
                      placeholder="Description" value={expensedata.desc} onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input className="addbutton" type="submit"  onClick={handleAddExpense} value="➕Add Expense" />
                  </div>
                  </div>
                </form>
                <p className="error-message">&nbsp;{error}</p>
            </div>
            <div className="expenselist">
              <DisplayExpense expensedatadisplay={expensedatadisplay} setDelflag={setDelflag} delflag={delflag}/>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AddExpense