import React, { useEffect, useState } from 'react'
import AsideMenu from '../AsideMenu/AsideMenu'
import '../../components/Dashboard/dashboard.css'
import * as incomeAPI from '../../utilities/income-api'
import * as expenseAPI from '../../utilities/expense-api'
import ChartComponent from '../ChartComponent/ChartComponent'

function Dashboard({user,setUser}) {

    const [totalincomeval,setTotalincomeval] = useState(0);
    const [totalexpenseval,setTotalexpenseval] = useState(0);
    const [expensedata,setExpensedata] = useState();
    const [incomedata,setIncomedata] = useState();
    const [month,setMonth] = useState('');

   
   
    

    useEffect(() => {
        //console.log("BEFORE QUERYING::",month)
        async function handleIncomedata() {
            const incomedata = await incomeAPI.getIncomedataformonth(month);
            //console.log(incomedata)
            setTotalincomeval(calculateTotalAmt(incomedata));
            setIncomedata(incomedata);

        }
        async function handleExpensedata() {
            const expensedata = await expenseAPI.getExpensedataformonth(month);
            //console.log(incomedata)
            setTotalexpenseval(calculateTotalAmt(expensedata));
            setExpensedata(expensedata)
          }
        handleExpensedata()
        handleIncomedata()
        

    },[month])

    function calculateTotalAmt(alldata){
        let sum = 0
        for(let data of alldata){
          sum = sum + data.amount;
  
        }
        return sum;
      }


  return (
    <div className='main-dashboard-div'>
        <AsideMenu user={user} setUser={setUser}/>
        <section>
        
        <div>
            <h3>Total Expense : {totalexpenseval}</h3>
            <h3>Total Income : {totalincomeval}</h3>
            <h3>Remaining balance : {totalincomeval-totalexpenseval}</h3>
            <div className='selectmonth-div'>
            <select className='month-select' id="month" onChange={(e) => {setMonth(e.target.value)}}>
                <option value="">Select a Month</option>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>

            </select>
        </div>
            <ChartComponent expensedata={expensedata} incomedata={incomedata} totalincomeval={totalincomeval} totalexpenseval={totalexpenseval}/>
        </div>
        </section>
    </div>
  )
}

export default Dashboard