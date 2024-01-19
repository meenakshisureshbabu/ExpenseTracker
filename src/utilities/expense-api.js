import sendRequest from './send-request';
const BASE_URL = '/api/expense';


export function addItemToExpense(expenseData) {
    console.log(expenseData)
    // Just send itemId for best security (no pricing)
    return sendRequest(`${BASE_URL}/addexpense`, 'POST',expenseData);
}


export function getExpensedata(){
    return sendRequest(`${BASE_URL}/getexpensedata`)
}


export function getExpensedataformonth(month){
    return sendRequest(`${BASE_URL}/getdatedexpensedata/${month}`)
}


export function deleteExpense(expenseid){
    console.log("Inside expense-api delete function")
    return sendRequest(`${BASE_URL}/deleteexpense/${expenseid}`,'POST')
}

