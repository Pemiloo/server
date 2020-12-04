export function uploadFile(file){

  const formData = new FormData();
  
  formData.append('file', file);
  formData.append('upload_preset', 'ml_default');

  const options = {method:'POST', body:formData};
  
  return options;

}

export function uploadFileXl(file, room){
  const formData = new FormData();
  
  //Tunggu kabar indra
  formData.append('excel_file', file);
  formData.append('code_room', room);

  const options = {method:'POST', body:formData};
  
  return options;
}