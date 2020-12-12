import { Http } from "../lib";

const http = new Http('https://pemilo.id/v1/vote');

export async function getLen(room = "", id = ""){
  const data = await http.post("/total", {codeRoom:room, idCandidate:id});
  return data.count;
}