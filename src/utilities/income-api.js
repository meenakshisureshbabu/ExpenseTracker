const BASE_URL = '/api/income';

export function addItemToIncome(incomeData) {
    console.log(incomeData.user._id)
    // Just send itemId for best security (no pricing)
    return sendRequest(`${BASE_URL}/addincome`, 'POST',incomeData);
}


