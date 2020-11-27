import axios from 'axios';

const RES = {data : new Object()}

export default function http(url = null){
  this.base = url;
  this.combineurl = function(url = new String()){if(this.base === null){return url;}else{return (`${this.base}${url}`);}};
  this.wreturn = function(res = RES){return res.data;}
}

http.prototype.get = async function(url = new String()){  
  const newurl = this.combineurl(url);
  const res = await axios.get(newurl);
  return this.wreturn(res);
}

http.prototype.post = async function(url = new String(), param = new Object()){  
  const newurl = this.combineurl(url);  
  const res = await axios.post(newurl, param);  
  return this.wreturn(res);    
}

http.prototype.put = async function(url = new String(), param = new Object()){
  const newurl = this.combineurl(url);
  const res = await axios.put(newurl, param);
  return this.wreturn(res);
}

http.prototype.delete = async function(url = new String(), param = new Object()){
  const newurl = this.combineurl(url);
  const res = await axios.delete(newurl, param);
  return this.wreturn(res);
}
