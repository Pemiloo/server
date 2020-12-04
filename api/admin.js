import { Http } from '../lib';

const http = new Http('http://34.101.140.233/v1/admin');

export async function signupAdmin(email = "", password = "", comit = [], photo = "", title = ""){
  const res = await http.post('/signup', {email, password, namaPanitia : comit, linkPhoto : photo, title});  
  return res.success;
}

export async function signinAdmin(email = "", password = ""){
  const res = await http.post('/signin', {email, password});  
  return res.success;
}

export async function getAdmin(email = ""){
  const res = await http.post('/find', {email});
  return res.message[0];
}

export async function updateAdminPass(email = "", pass = ""){
  const res = await http.put('/update', {findEmail:email, password : pass});
  return res.success;
}

export async function updateAdmin(email = "",panitia = [], photo = "", title = ""){
  const res = await http.put('/update', {findEmail:email, namaPanitia : panitia, linkPhoto:photo, title});
  return res.success;
}