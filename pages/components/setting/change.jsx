import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import st from '../../../styles/components/setting/change.module.css';

import { getAdmin, updateAdminPass } from '../../../api';
import useSWR, { mutate } from 'swr';

const ChangePass = ({email}) => {

  const {data} = useSWR(`/api/profile/${email}`, ()=>{ return getAdmin(email) });  

  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [conPass, setConPass] = useState("");

  const atSave = async () => {
    if(oldPass != newPass && newPass === conPass && newPass != "" && conPass != ""){      
      const res = await updateAdminPass(email, newPass);
      if(res){
        alert("Berhasil");      
        setNewPass("");
        setConPass("");
        mutate(`/api/profile/${email}`);        
      }else alert("Gagal");
    }
  }

  useEffect(()=>{
    if(data != undefined){
      setOldPass(data.password);
    }
  },[data]);

  if(data != undefined){
    return(
      <>
        <div className={st.containerForm}>
            <div className={st.wrap}>
              
              <label className={st.label}>Old Password</label>
              <input value={oldPass} type="text" name="old" id="old" placeholder="Enter your old password" className={st.input} readOnly/><p />
              
              <label className={st.label}>New Password</label>
              <input onChange={(e)=>{setNewPass(e.target.value)}} value={newPass} type="text" name="new" id="new" placeholder="Enter new password" className={st.input} /><p />

              <label className={st.label}>Confirm Password</label>
              <input onChange={(e)=>{setConPass(e.target.value)}} value={conPass} type="text" name="confirm" id="confirm" placeholder="Enter confirm password" className={st.input} />

              <Link href="#">
                <p className={st.forgot}>Forgot your password</p>
              </Link>                    

              <input onClick={atSave} type="submit" name="save" id="save" value="Save" className={st.btn} />

            </div>
        </div>  
      </>
    );
  }
  else{
    return nulll;
  }
}

export default ChangePass;