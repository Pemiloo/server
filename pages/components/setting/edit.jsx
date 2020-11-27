import React, { useEffect, useState } from 'react';
import st from '../../../styles/components/setting/edit.module.css';

import { getAdmin, updateAdmin } from '../../../api';
import useSWR, { mutate } from 'swr';

const EditProfile = ({email}) => {

  const {data} = useSWR(`/api/profile/${email}`, ()=>{ return getAdmin(email) });  

  const [newOrg, setNewOrg] = useState("");
  const [newCom, setNewCom] = useState([]);

  const changeNewCom = (id=0, value="") => {
    const tm = newCom;
    tm[id] = value;
    setNewCom(tm);
  }

  const newComPlus = () => {
    setNewCom([...newCom, ""]);
  }

  const atSave = async () => {
    if(newOrg != "" && newCom != ""){
      const res = await updateAdmin(email, newCom, data.linkPhoto, newOrg);
      (res) ? alert("Berhasil") : alert("Gagal");
      mutate(`/api/profile/${email}`);
    }
  }

  useEffect(()=>{
    if(data != undefined){
      setNewOrg(data.title);
      setNewCom(data.namaPanitia);
    }
  },[data]);

  if(data != undefined){
    return(
      <>
        <div className={st.containerForm}>
          <center> 
            <div className={st.candidateImg}>
              <img className={st.imgThumb} src={data.linkPhoto} alt="Candidate Photo"/>
              <img className={st.imgCam} src="/icon/VectorCamera.svg" height="25px" />
            </div>
          </center>
  
          <div className={st.wrap}>
            <label>Your Organization</label>
            <input onChange={(e)=>{setNewOrg(e.target.value)}} value={newOrg} type="text" name="organization" id="organization" placeholder="Your organization" className={st.input} />
  
            <div className={st.committe}>
              <label>Your Committe</label>
              {
                newCom.map((e,i)=>{
                  return(
                    <input onChange={(el)=>{changeNewCom(i,el.target.value)}} value={e} key={i} type="text" name="committe" placeholder="Your committe" className={st.input} />
                  )
                })
              }
            </div>
              
            <div className={st.containerIcon}>
              <img src="/icon/VectorPlus.svg" height="25px" onClick={newComPlus} />
            </div>
  
            <button onClick={atSave} name="save" id="save" className={st.btn} >Save</button>
          </div>
        </div>  
      </>
    );
  }
  else{
    return null;
  }
}

export default EditProfile;