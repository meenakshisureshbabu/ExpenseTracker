import sendRequest from './send-request';
const BASE_URL = '/api/users';


export async function signUp(userData) {
    //console.log(userData)
    return sendRequest(`${BASE_URL}/register`,'POST',userData)
}

export async function signIn(credetials){
    return sendRequest(`${BASE_URL}/login`,'POST',credetials)
}

export async function resetPwd(resetdata){
    return sendRequest(`${BASE_URL}/resetpwd`,'POST',resetdata)
}

export async function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`);
  }