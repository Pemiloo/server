import { Http } from '../lib'

const http = new Http('https://pemilo.id/v1/candidate');

export async function getListCandidate(room = ""){
  return await http.post('/getAllCandidate', {room__id:room});
}

export async function getCandidate(room = "", position = "Bagus"){
  return await http.post('/getAllCandidate', {room__id:room, position});
}

export async function getCandidateId(id=""){
  return await http.post('/getAllCandidate', {id});
}

export async function addCandidate(room = "", name = "", photo = "", visi = "", misi = new Array(), position = "", kelas = ""){
  const res = await http.post('/Candidate', {codeRoom:room, candidateName:name, linkPhoto:photo, visi, mission:misi, position, classroom:kelas});
  //console.log(res);
  return (res.status === 'ok') ? true : false;
}

export async function updateCandidate(id = "",room = "",name = "",photo = "", visi = "", misi = [], position = "", kelas = ""){
  const res = await http.put('/Candidate', {id, codeRoom:room, candidateName:name, linkPhoto:photo, visi, mission:misi, position, classroom:kelas});
  return (res.status === 'ok') ? true : false;
}

export async function deleteCandidate(id = ""){
  const res = await http.delete('/Candidate', {id});
  return (res.status === 'ok') ? true : false;
}