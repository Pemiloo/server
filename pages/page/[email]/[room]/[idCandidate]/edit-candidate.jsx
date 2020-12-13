import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import st from '../../../../../styles/page/room-candidate.module.css';
import Nav from '../../../../components/nav';

import { uploadFile } from '../../../../../lib';
import { getCandidateId, updateCandidate,getOption, deleteCandidate } from '../../../../../api';
import { useRouter } from 'next/router';
import useSWR from 'swr';

export function getServerSideProps(context){
  const  { email, room, idCandidate } = context.params;
  return{
    props:{
      room,
      email,
      idCandidate
    }
  }
}

const editCandidate = ({room, email, idCandidate}) => {

  const {data} = useSWR(`/api/get/candidate/${idCandidate}`, ()=>{return getCandidateId(idCandidate)});
  const option = useSWR('/api/option', ()=>{ return getOption('UNDIKNAS') });

  const router = useRouter();

  const refFile = useRef(null);  

  console.log(data);

  const funcVal = (id = 0) => {
    if(data != undefined){
      if(id == 0){
        return data[0].name;
      }
      else if(id == 1){
        return data[0].classroom;
      }
      else if(id == 2){
        return data[0].position;
      }
      else if(id == 3){
        return data[0].vision;
      }
      else if(id == 4){
        console.log("Ke Hit");
        return changeToList(data[0].mission);
      }
      else if(id == 5){
        return data[0].photo;
      }
    }
    else{
      if(id == 4){
        return [];
      }else{
        return "";
      }
    }
  }

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

  useEffect(()=>{
    if(data != undefined){      
      setName(funcVal(0));
      setClass(funcVal(1));
      setPosition(funcVal(2));
      setNewVisi(funcVal(3));
      setNewMisi(funcVal(4));
      setLinkPhoto(funcVal(5));
    }    
  },[data]);

  const atImageClick = () => {
    refFile.current.click();
  }

  const changeToList = (param = new String()) => {
    const changeData = param.replace(/\|}|{|}|"/g,'');     
    const spl = changeData.split(',');
    return spl;
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
    if(newName != "" && linkPhoto != "" && newMisi.length != 0 && newClass != ""){      
      const res = await updateCandidate(data[0].id, room, newName, linkPhoto, newVisi, newMisi, newPosition, newClass);
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

  const atDel = async () => {
    console.log(idCandidate);
    const res = await deleteCandidate(idCandidate);
    if(res === true){
      alert("Berhasil di delete");
      //router.push(`/page/${email}/dashboard`);
    }else{
      alert("Gagal");
    }
  }

  if(data != undefined){
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
                <input onChange={(e)=>{setName(e.target.value)}} defaultValue={newName} type="text" className={st.input} />
              </div>
      
              <div className={st.flexForm1}>
                <div className={st.box}>
                  <label>Candidate Number</label><br />
                  <input onChange={(e)=>{setClass(e.target.value)}} defaultValue={newClass} type="text" name="class" id="class" className={st.input} />
                </div>
                <div className={st.box}>
                  <label>Position</label><br />
                  <select onChange={(e)=>{setPosition(e.target.value)}} name={"position"} id={"position"} className={st.input} defaultValue={newPosition}>
                    {
                      ((option.data != undefined) ? option.data : []).map((e,i)=>{
                        return(
                          <option key={i} value={e}>{e}</option>                    
                        )
                      })
                    }
                  </select>
                </div>
              </div>
                  
              <div className={st.vision}>
                <label>Motivation</label>
                <textarea onChange={(e)=>{setNewVisi(e.target.value)}} defaultValue={newVisi} name="vision" rows="5" className={st.textarea} ></textarea>
              </div>
  
              <div className={st.mision}>
                <label>Biodata</label>
                {
                  newMisi.map((e, i)=>{
                    console.log(e);
                    return (
                      <input onChange={(e)=>{ changeNewMisi(i, e.target.value) }} defaultValue={e} type="text" name="mision" key={i} className={st.input} />
                    )
                  })
                }
              </div>
              
              <div className={st.addMision}>
                <button onClick={addNewMisi} className={st.Btn}>Add more (+)</button>
              </div>
  
              <div className={st.submitCandidate}>
                <button onClick={atSave} className={st.Btn}>Save (+)</button>
                <button onClick={atDel} className={st.btnDel}>Delete</button>
              </div>
            </div>
  
          </div>
        
        </div>
      </>
    );
  }
  else{
    return null;
  }

}

export default editCandidate;