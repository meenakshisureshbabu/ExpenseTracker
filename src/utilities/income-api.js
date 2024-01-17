import sendRequest from './send-request';
const BASE_URL = '/api/income';


export function addItemToIncome(incomeData) {
    console.log(incomeData)
    // Just send itemId for best security (no pricing)
    return sendRequest(`${BASE_URL}/addincome`, 'POST',incomeData);
}


