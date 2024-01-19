import React, { useEffect, useState } from "react";
import "../AddIncome/addincome.css";
import AsideMenu from "../AsideMenu/AsideMenu";
import * as incomeAPI from '../../utilities/income-api'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import DisplayIncome from "../DisplayIncome/DisplayIncome";

function AddIncome({ user, setUser }) {

    const [incomedata,setIncomedata] = useState({title:'',amount:'',incdate:'',category:'',desc:'',month:'',user:user._id})
    const [startDate, setStartDate] = useState(new Date());
    const [error,setError] = useState('');
    const [incomedatadisplay,setIncomedatadisplay] = useState([])
    const [status,setStatus] = useState();
    const [totalincome,setTotalincome] = useState(0);
    const [delflag,setDelflag] = useState();
    const handleChange = (e) => {
        setIncomedata({...incomedata,[e.target.name]:e.target.value})
        setError('')
    }

    const year = new Date().getFullYear();
    useEffect(function(){
      async function handleIncomedata() {
        const incomedata = await incomeAPI.getIncomedata();
        //console.log(incomedata)
        setIncomedatadisplay(incomedata)
        calculateTotalAmt(incomedata);
      }
      handleIncomedata()
      setDelflag(false)
      setStatus(false)
    },[status,delflag]);
    
    function calculateTotalAmt(incomedata){
      let sum = 0
      for(let data of incomedata){
        sum = sum + data.amount;

      }
      setTotalincome(sum);
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
            setStatus(true);
            setError('Income Added successfully')
        }
        catch{
            setError('Unable to add the income')
        }
    }

  return (
    <div className="addincome-div">
      <AsideMenu user={user} setUser={setUser} />
      <section>
        <div className="add-income-div">
          <div className="add-income-inner-div">
            <h2>INCOMES</h2>
          </div>

          <div className="add-income">
            <div className="addincomeform">
              
                <form onSubmit={handleAddIncome}>
                <div className="formdiv">
                  <div>
                    <input
                      type="text"
                      name="title"
                      placeholder="Income Title" value={incomedata.title} onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      name="amount"
                      placeholder="Income Amount" value={incomedata.amount} onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                 <DatePicker name="incdate" dateFormat="dd/MM/yyyy"  minDate={new Date(`01-01-${year}`)} maxDate={new Date(`12/31/${year}`)} selected={startDate} onChange={(date) => setStartDate(date)} /> 
                  </div>
                  <div className="select-div">
                    <select name="category" id="category" onChange={handleChange}>
                      <option value="💵Salary">Salary</option>
                      <option value="₿Bitcoin">BitCoin</option>
                      <option value="🚀Investment">Investment Return</option>
                      <option value="🏦Bank Transfer">Bank Transfer</option>
                      <option value="🎁Gift">Gift</option>
                      <option value="✨Other">Other</option>
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
                    <input className="addbutton" type="submit"   value="➕Add Income" />
                  </div>
                  </div>
                </form>
                <p className="error-message">&nbsp;{error}</p>
            </div>
            <div className="incomelist">
              <DisplayIncome incomedatadisplay={incomedatadisplay} setDelflag={setDelflag} delflag={delflag}/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddIncome;
