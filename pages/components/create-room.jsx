import st from '../../styles/components/create-room.module.css';

import {uploadFileXl, StatePatch, Action} from '../../lib';
import React, { useContext, useRef,useState } from 'react';
import {createRoom} from '../../api';
import { useRouter } from 'next/router';

const {CREATEROOM} = Action;

const CreateRoom = ({email}) => {  

  const router = useRouter();

  const Cont = useContext(StatePatch);
  
  const Disp = Cont.dispatch;

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [pass, setPass] = useState("");

  //const [formData, setFormData] = useState(null);

  const atClose = () => {
    Disp({tipe:CREATEROOM});
  }

  const atSave = async () => {        
    if(name != "" && desc != "" && pass != ""){
      const res = await createRoom(email, name, desc, pass);      
      if(res) {        
        alert("Berhasil");
        // const op = uploadFileXl(formData, res);
        // fetch('http://34.101.95.115/v1/anggota/upload', op)
        // .then(res => res.json())
        // .then(res => {
        //   console.log(res)
        //   alert("Selesai Upload");        
        // })
        // .catch(err => console.log(err));
        atClose();
        router.push(`/page/${email}/dashboard`);
      }
    }
  }  

  return(
    <>
      <div className={st.container}>
        <div className={st.card}>
          <div className={st.cardHeader}>
            <div className={st.titleRoom}>
              Create Room
            </div>
            <img onClick={atClose} src="/icon/Vector.svg" height="40px" />
          </div>
          
          <div className={st.cardBody}>
            <div className={st.containerField}>
              <label className={st.controlLabel}>Name Room</label>
              <p><input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" name="nameRoom" id="nameRoom" className={st.input} required={true} autoComplete="off" placeholder="Enter your room name" /></p>
            </div>
            <div className={st.containerField}>
              <label className={st.controlLabel}>Room Password</label>
              <p><input value={pass} onChange={(e)=>{setPass(e.target.value)}} type="password" name="roomPassword" id="roomPassword" className={st.input} autoComplete="off" placeholder="Enter your room password" /></p>
            </div>
            <div className={st.containerField}>
              <label className={st.controlLabel}>Room Description</label>
              <p><textarea value={desc} onChange={(e)=>{setDesc(e.target.value)}} name="roomDescription" id="roomDescription" className={st.textarea} rows="5" placeholder="Enter your room description"></textarea></p>
            </div>
            {/* <div className={st.containerField}>
              <label className={st.controlLabel}>Participant</label>
              <p>Upload participant extension format <b>.csv</b></p>
              <input onChange={(e)=>{setFormData(e.target.files[0])}} type="file" name="participant" id="participant" ></input>
            </div> */}

            <div className={st.containerField}>
              <p><input onClick={atSave} type="button" name="btnNext" id="btnNext" className={st.btnNext} value="Next" /></p>
            </div>              
          </div>

        </div>
      </div>
    </>
  )
}

export default CreateRoom;