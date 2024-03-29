import * as usersAPI from './users-api';


export async function signUp(userData){
    const token = await usersAPI.signUp(userData);
    localStorage.setItem('token',token);
    return getUser()
}

export async function signIn(credentials){
    const token = await usersAPI.signIn(credentials);
    localStorage.setItem('token',token)
    return getUser()
}

export async function resetPwd(resetdata){
    const token = await usersAPI.resetPwd(resetdata);
    return getUser()
}



export function logout(){
    localStorage.removeItem('token');
}

export function getUser() {
    const token = getToken();
    // If there's a token, return the user in the payload, otherwise return null
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
    }


export function getToken(){
    const token = localStorage.getItem('token');
    if (!token) return null;
    // Obtain the payload of the token
    const payload = JSON.parse(atob(token.split('.')[1]));
    // A JWT's exp is expressed in seconds, not milliseconds, so convert
    if (payload.exp < Date.now() / 1000) {
      // Token has expired - remove it from localStorage
      localStorage.removeItem('token');
      return null;
    }
    return token;
}

export function checkToken(){
    //alert(usersAPI.checkToken().then(dateStr => new Date(dateStr)))
    return usersAPI.checkToken()
    //checkToken returns a string, but let's
    //make it a Date object for more flexibility
    .then(dateStr => new Date(dateStr));


  }
