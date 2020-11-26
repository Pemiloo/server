export function uploadFile(file){

  console.log(file);

  const formData = new FormData();
  
  formData.append('file', file);
  formData.append('upload_preset', 'ml_default');

  const options = {method:'POST', body:formData};
  
  return options;

}