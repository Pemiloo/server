import { Http } from '../lib';

const httpA = new Http('https://pemilo.id/v1/anggota');
const httpR = new Http('https://pemilo.id/v1/room');

export async function createRoom(emailAdmin = "", name = "", desc = "", pass = ""){
  const obj = (pass === null) ? {emailAdmin,nama:name,deskripsi:desc} : {emailAdmin,nama:name,deskripsi:desc,password : pass};
  const resR = await httpR.post('/insert', obj); //membuat room
  if(resR.roomCode != undefined || resR.roomCode != null && resR.message === undefined){
    return resR.roomCode;
  }else return false;   
}

export async function getCountAnggota(room = ""){
  const res = await httpA.post('/countAnggota', {codeRoom:room});
  return res.count;
}

export async function getCountRoom(email = ""){
  const res =  await httpR.post('/countRoom', {emailAdmin: email});  
  return res.count;
}

export async function getCountRoomSta(email = "", sta = true){
  const res = await httpR.post('/countRoomSta', {emailAdmin: email, sta});
  return res.count;
}

export async function getListRoom(email = ""){      
  // console.log(`${email} GetListRoom`);
  const res = await httpR.post('/findAll', {param : {emailAdmin:email}});
  return res;
}

export async function updateRoom(room = "", update = new Object()){
  const res = await httpR.put('/update', {find:{codeRoom:room}, field:update});
  return (res.res === true) ? true : false;
}

export async function deleteRoom(room = ""){
  const res = await httpR.delete(`/delete`, {param:{codeRoom:room}});
  // console.log(res);
  return res;
}



