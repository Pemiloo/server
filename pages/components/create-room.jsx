import React, { useRef,useState } from 'react';
import st from '../../styles/components/create-room.module.css';

import { uploadFileXl } from '../../lib';
import { createRoom } from '../../api';

const CreateRoom = ({email}) => {

  const fileRef= useRef(null);

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [pass, setPass] = useState("");

  const [formData, setFormData] = useState(null);

  const atSave = async () => {        
    if(name != "" && desc != "" && pass != ""){
      const res = await createRoom(email, name, desc, pass);      
      (res === false) ? alert("Gagal") : alert("Berhasil");            
      const op = uploadFileXl(formData, res);
      fetch('http://34.101.95.115/v1/anggota/upload', op)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        alert("Selesai Upload");        
      })
      .catch(err => console.log(err));
    }
  }  

  return(
    <div>
      <div className={st.container}>
        <div className={st.card}>
          <div className={st.cardHeader}>
            <div className={st.titleRoom}>
              Create Room
            </div>
            <img src="/icon/Vector.svg" height="40px" />
          </div>

          <div className={st.cardBody}>
            <div className={st.containerField}>
              <label className={st.controlLabel} for="nameRoom">Name Room</label>
              <p><input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" name="nameRoom" id="nameRoom" className={st.input} required="true" autoComplete="off" placeholder="Enter your room name" /></p>
            </div>
            <div className={st.containerField}>
              <label className={st.controlLabel} for="roomPassword">Room Password</label>
              <p><input value={pass} onChange={(e)=>{setPass(e.target.value)}} type="password" name="roomPassword" id="roomPassword" className={st.input} autoComplete="off" placeholder="Enter your room password" /></p>
            </div>
            <div className={st.containerField}>
              <label className={st.controlLabel} for="roomDescription">Room Description</label>
              <p><textarea value={desc} onChange={(e)=>{setDesc(e.target.value)}} name="roomDescription" id="roomDescription" className={st.textarea} rows="5" placeholder="Enter your room description"></textarea></p>
            </div>
            <div className={st.containerField}>
              <label className={st.controlLabel} for="participant">Participant</label>
              <p>Upload participant extension format <b>.csv</b></p>
              <p><input onChange={(e)=>{setFormData(e.target.files[0])}} type="file" name="participant" id="participant" ></input></p>
            </div>

            <div className={st.containerField}>
              <p><input onClick={atSave} type="button" name="btnNext" id="btnNext" className={st.btnNext} value="Next" /></p>
            </div>              
          </div>

        </div>
      </div>
    </div>
  )
}

export default CreateRoom;