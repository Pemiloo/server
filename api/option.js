import { Http } from '../lib';

const http = new Http('https://pemilo.id/v1/option');

export const getOption = async (tipe = "") => {
  const res = await http.post('/get', {type:tipe});
  return res.message[0].name;
}