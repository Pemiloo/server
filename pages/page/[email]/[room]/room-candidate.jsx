import React, { useState, useRef } from 'react';
import Head from 'next/head';
import st from '../../../../styles/page/room-candidate.module.css';
import Nav from '../../../components/nav';

import { uploadFile } from '../../../../lib';
import { addCandidate } from '../../../../api';
import { useRouter } from 'next/router';

export function getServerSideProps(context){
  const  { email, room } = context.params;
  return{
    props:{
      room,
      email
    }
  }
}

const roomCandidate = ({room, email}) => {

  const router = useRouter();

  const refFile = useRef(null);

  const [newName, setName] = useState("");
  const [newClass, setClass] = useState("");
  const [newPosition, setPosition] = useState("");
  const [newVisi, setNewVisi] = useState("");
  const [newMisi, setNewMisi] = useState([""]);
  const [linkPhoto, setLinkPhoto] = useState(""); 
  
  const [staPhoto, setStaPhoto] = useState(true);

  const addNewMisi = () => {
    setNewMisi([...newMisi, ""]);
  }

  const atImageClick = () => {
    refFile.current.click();
  }

  const atUpload = (e) => {    
    setStaPhoto(false);
    const file = uploadFile(e);
    fetch('https://api.cloudinary.com/v1_1/kotakjualan/image/upload', file)
    .then(res => res.json())
    .then(res => {     
      setStaPhoto(true); 
      setLinkPhoto(res.secure_url);      
    })
    .catch(err => console.log(err));    
  }

  const changeNewMisi = (id=0, value="") => {
    const tm = newMisi;
    tm[id] = value;
    setNewMisi(tm);
  }

  const atSave = async () => {    
    if(newName != "" && linkPhoto != "" && newMisi.length != 0 && newPosition != "" && newClass != ""){
      const res = await addCandidate(room, newName, linkPhoto, newVisi, newMisi, newPosition, newClass);
     if(res === true){
      alert("Berhasil");
      router.push(`/page/${email}/dashboard`);
     }else{
       alert("Gagal");
     }
    }
    else{
      alert("Masih Salah Format!");
    }
  }

  return(
    <> 
      <Head>
        <title>Pemilo - Room Candidate</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/pemilo.svg" />
      </Head>

      <Nav email={email}></Nav>

      <div className={st.containerFluid}>
                          
        <div className={st.containerForm}>
          
          <div className={st.candidateImg}>
            <img className={st.imgThumb} src={(linkPhoto != "")?linkPhoto:"/pemilo.svg"} alt="candidate image"/>            
            <img onClick={atImageClick} className={st.imgCam} src="/icon/VectorCamera.svg" height="25px"></img>            
            <input hidden ref={refFile} onChange={(e)=>{atUpload(e.target.files[0])}} type="file"></input>            
          </div>
          
          {
            (staPhoto) ? null : <p>Loading..</p>
          }          

          <div className={st.candidateDetail}>
            <div className={st.box100}>
              <label>Candidate Name</label><br />
              <input onChange={(e)=>{setName(e.target.value)}} value={newName} type="text" className={st.input} />
            </div>
    
            <div className={st.flexForm1}>
              <div className={st.box}>
                <label>Candidate Number</label><br />
                <input onChange={(e)=>{setClass(e.target.value)}} value={newClass} type="text" name="class" id="class" className={st.input} />
              </div>
              <div className={st.box}>
                <label>Position</label><br />
                <input onChange={(e)=>{setPosition(e.target.value)}} value={newPosition} type="text" name="position" id="position" className={st.input} />
              </div>
            </div>
                
            <div className={st.vision}>
              <label>Motivation</label>
              <textarea onChange={(e)=>{setNewVisi(e.target.value)}} value={newVisi} name="vision" rows="5" className={st.textarea} ></textarea>
            </div>

            <div className={st.mision}>
              <label>Biodata</label>
              {
                newMisi.map((e, i)=>{
                  return (
                    <input onChange={(e)=>{ changeNewMisi(i, e.target.value) }} type="text" name="mision" key={i} className={st.input} />
                  )
                })
              }
            </div>
            
            <div className={st.addMision}>
              <button onClick={addNewMisi} className={st.Btn}>Add more (+)</button>
            </div>

            <div className={st.submitCandidate}>
              <button onClick={atSave} className={st.Btn}>Save (+)</button>
            </div>
          </div>

        </div>
      
      </div>
    </>
  );
}

export default roomCandidate;