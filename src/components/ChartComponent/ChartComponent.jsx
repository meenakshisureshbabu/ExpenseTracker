import React from "react";
import { Chart } from "react-google-charts";
import '../ChartComponent/chartcomponent.css'



function ChartComponent({ expensedata,incomedata,totalincomeval,totalexpenseval }) {
  console.log(expensedata);
  let expenseArray = [["Expense","Amount"]]
  if (expensedata) {
    console.log(expensedata.length);
    for (let i = 0; i < expensedata.length; i++) {
        let tempArray = [];
        tempArray.push(expensedata[i].title);
        tempArray.push(expensedata[i].amount);
        expenseArray.push(tempArray)
    }
  }

  let incomeArray = [["Income","Amount"]]
  if (incomedata) {
    console.log(incomedata.length);
    for (let i = 0; i < incomedata.length; i++) {
        let tempArray = [];
        tempArray.push(incomedata[i].title);
        tempArray.push(incomedata[i].amount);
        incomeArray.push(tempArray)
    }
  }

  let incomeexpenseArray = [["Income","Expense"]]
  if(totalexpenseval>0 && totalincomeval>0){
    let tempArray = [];
    tempArray.push("Expense")
    tempArray.push(totalexpenseval)
    incomeexpenseArray.push(tempArray)
    tempArray = [];
    tempArray.push("Income")
    tempArray.push(totalincomeval)
    incomeexpenseArray.push(tempArray)
  }

  const incexpoptions = {
    title: "Income Vs Expense",
    
  };
  const expoptions = {
    title: "Expenses",
   
  };
  const incoptions = {
    title: "Income",
    
  };
  //console.log("DADADADADADADA"+newdataarray)

  return (
    <div className="charts">
    <div className="income-expense-chart"> {totalexpenseval>0 && totalincomeval>0 && <Chart
        chartType="PieChart"
        data={incomeexpenseArray}
        options={incexpoptions}
        width={"100%"}
        height={"400px"}
        
      />}
      
    </div>
    <div className="expense-chart"> {expensedata && <Chart
        chartType="PieChart"
        data={expenseArray}
        options={expoptions}
        width={"100%"}
        height={"400px"}
        
      />}
      
    </div>
    <div className="income-chart"> {incomedata && <Chart
        chartType="PieChart"
        data={incomeArray}
        options={incoptions}
        width={"100%"}
        height={"400px"}
        
      />}
      
    </div>
    </div>
  );
}

export default ChartComponent;
