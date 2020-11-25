import { Http } from '../lib'

const http = new Http('http://34.101.95.115/v1/candidate');

export async function getListCandidate(room = ""){
  return await http.post('/getAllCandidate', {room__id:room});
}

export async function addCandidate(room = "", name = "", photo = "", visi = "", misi = new Array(), position = "", kelas = ""){
  const res = await http.post('/Candidate', {codeRoom:room, candidateName:name, linkPhoto:photo, visi, mission:misi, position, classroom:kelas});
  return (res.status === 'ok') ? true : false;
}
