import { Http } from '../lib';

const http = new Http('http://34.101.95.115/v1/admin');

export async function signupAdmin(email = "", password = "", comit = [], photo = "", title = ""){
  const res = await http.post('/signup', {email, password, namaPanitia : comit, linkPhoto : photo, title});  
  return res.success;
}

export async function signinAdmin(email = "", password = ""){
  const res = await http.post('/signin', {email, password});  
  return res.success;
}