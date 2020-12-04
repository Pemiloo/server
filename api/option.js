import { Http } from '../lib';

const http = new Http('http://34.101.140.233/v1/option');

export const getOption = async (tipe = "") => {
  const res = await http.post('/get', {type:tipe});
  return res.message[0].name;
}