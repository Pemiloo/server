import { Http } from "../lib";

const http = new Http('http://34.101.95.115:3400');

export async function getLen(room = "", id = ""){
  const data = await http.post("/total", {codeRoom:room, idCandidate:id});
  return data.count;
}