import { Http } from '../lib';

const httpA = new Http('http://34.101.95.115/v1/anggota');
const httpR = new Http('http://34.101.95.115/v1/room');

export async function createRoom(emailAdmin = "", name = "", desc = "", member = new Array(), pass = null){
  const ob = (pass === null) ? {emailAdmin,nama:name,deskripsi:desc} : {emailAdmin,nama:name,deskripsi:desc,password : pass};
  const resR = await httpR.post('/insert', obj); //membuat room
  if(resR.roomCode != undefined || resR.roomCode != null && resR.message === undefined){
    member.map(item => item.codeRoom = resR.roomCode);
    const resA = await httpA.post('/insertAll',member); //memasukan anggota sesuai dengan room yang telah dibuat    
    return (resA.res === true || resA.message === undefined) ? true : false;
  }else return false;   
}

