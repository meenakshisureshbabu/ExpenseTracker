import React, { useEffect, useState } from 'react'
import AsideMenu from '../AsideMenu/AsideMenu'
import '../../components/Dashboard/dashboard.css'
import * as incomeAPI from '../../utilities/income-api'
import * as expenseAPI from '../../utilities/expense-api'
import ChartComponent from '../ChartComponent/ChartComponent'

function Dashboard({user,setUser}) {

    const [totalincomeval,setTotalincomeval] = useState();
    const [totalexpenseval,setTotalexpenseval] = useState();
    

    useEffect(function(){
        async function handleIncomedata() {
            const incomedata = await incomeAPI.getIncomedata();
            //console.log(incomedata)
            setTotalincomeval(calculateTotalAmt(incomedata));
        }
        async function handleExpensedata() {
            const expensedata = await expenseAPI.getExpensedata();
            //console.log(incomedata)
            setTotalexpenseval(calculateTotalAmt(expensedata));
          }
        handleExpensedata()
        handleIncomedata()
        

    },[])

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
        <div>Dashboard</div>
        <div>
            <h3>Total Expense : {totalexpenseval}</h3>
            <h3>Total Income : {totalincomeval}</h3>
            <h3>Remaining balance : {totalincomeval-totalexpenseval}</h3>
            <ChartComponent/>
        </div>
        </section>
    </div>
  )
}

export default Dashboard