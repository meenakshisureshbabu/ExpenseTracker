import sendRequest from './send-request';
const BASE_URL = '/api/income';


export function addItemToIncome(incomeData) {
    console.log(incomeData)
    // Just send itemId for best security (no pricing)
    return sendRequest(`${BASE_URL}/addincome`, 'POST',incomeData);
}


export function getIncomedata(){
    return sendRequest(`${BASE_URL}/getincomedata`)
}

export function getIncomedataformonth(month){
    return sendRequest(`${BASE_URL}/getdatedincomedata/${month}`)
}


export function deleteIncome(incomeid){
    console.log("Inside income-api delete function")
    return sendRequest(`${BASE_URL}/deleteincome/${incomeid}`,'POST')
}

