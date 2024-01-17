import React, { useState } from "react";
import "../AddIncome/addincome.css";
import AsideMenu from "../AsideMenu/AsideMenu";
import * as incomeAPI from '../../utilities/income-api'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

function AddIncome({ user, setUser }) {

    const [incomedata,setIncomedata] = useState({title:'',amount:'',incdate:'',category:'',desc:'',month:''})
    const [startDate, setStartDate] = useState(new Date());
    const [error,setError] = useState('');
    const handleChange = (e) => {
        setIncomedata({...incomedata,[e.target.name]:e.target.value})
        setError('')
    }

    async function handleAddIncome(e) {
        e.preventDefault();
        try{
            const incdate = new Intl.DateTimeFormat('en-US',{year: 'numeric', month: '2-digit',day: '2-digit'}).format(startDate)
            const month = incdate.substring(0,2)
            incomedata.incdate = incdate;
            incomedata.month = month;
            incomedata.category=document.getElementById("category").value;
            //setIncomedata(...incomedata,['incdate'],startDate)
            console.log("BEFORE SUBMITTING...",incomedata)
            const success = await incomeAPI.addItemToIncome(incomedata)
            alert(success)
            setError('Income Added successfully')
        }
        catch{
            setError('Unable to add the expense')
        }
    }

  return (
    <div className="addincome-div">
      <AsideMenu user={user} setUser={setUser} />
      <section>
        <div className="add-income-div">
          <div className="add-income-inner-div">
            <h2>TOTAL INCOME:</h2>
          </div>

          <div className="add-income">
            <div className="addincomeform">
              
                <form>
                <div className="formdiv">
                  <div>
                    <input
                      type="text"
                      name="title"
                      placeholder="Expense Title" value={incomedata.title} onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="amount"
                      placeholder="Expense Amount" value={incomedata.amount} onChange={handleChange}
                    />
                  </div>
                  <div>
                 <DatePicker name="incdate" dateFormat="dd/MM/yyyy" selected={startDate} onChange={(date) => setStartDate(date)} /> 
                  </div>
                  <div className="select-div">
                    <select name="category" id="category" onChange={handleChange}>
                      <option value="salary">Salary</option>
                      <option value="bitcoin">BitCoin</option>
                      <option value="investment">Investment Return</option>
                      <option value="banktransfer">Bank Transfer</option>
                      <option value="gift">Gift</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <input className="desc-text"
                      type="textarea"
                      name="desc"
                      placeholder="Description" value={incomedata.desc} onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input className="addbutton" type="submit"  onClick={handleAddIncome} value="➕Add Income" />
                  </div>
                  </div>
                </form>
                <p className="error-message">&nbsp;{error}</p>
            </div>
            <div className="incomelist">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, aperiam. Iste optio sint, quidem saepe, ex esse
              voluptates assumenda mollitia impedit pariatur atque, enim
              perspiciatis recusandae vel error ipsum! Corrupti.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddIncome;
