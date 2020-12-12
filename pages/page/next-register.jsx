import Head from 'next/head';
import React, { useContext, useEffect, useState } from 'react';
import style from '../../styles/page/next-register.module.css';

import { useRouter } from 'next/router';
import { uploadFile, StatePatch, Action } from '../../lib';
import { signupAdmin } from '../../api';

const { REGIS, LOGIN } = Action;

const nextRegister = () => {

  const router = useRouter();

  const Cont = useContext(StatePatch);

  const Disp = Cont.dispatch;
  const { registerNext } = Cont.state;

  const [org, setOrg] = useState();
  const [com, setCom] = useState([""]);

  const [photo, setPhoto] = useState("");
  const [alt, setAlt] = useState("");  

  const [staPhoto, setStaPhoto] = useState(true);

  useEffect(()=>{
    if(registerNext.mail == ""){
      router.push("/page/auth");
    }
  },[registerNext]);

  const addCommite = (key = 0, value = "") => {
    const tm = com;
    tm[key] = value;
    setCom(tm);
  }  

  const commitePlus = () => {
    setCom([...com, ""]);
  }

  const atUpload = (e) => {    

    setStaPhoto(false);

    const res = uploadFile(e);
    
    fetch('https://api.cloudinary.com/v1_1/kotakjualan/image/upload', res)
    .then(res => res.json())
    .then(res => {
      // console.log(res)
      setStaPhoto(true);
      setPhoto(res.secure_url);
      setAlt(`An image of ${res.original_filename}`);
    })
    .catch(err => console.log(err));    

  }

  const ceState = () => {    
    if(org != "" && photo != "" && alt != ""){
      return true;
    }
    else return alert("Field harus di isi dengan benar!");
  }

  const atDone = async (e) => {
    e.preventDefault();    
    if(ceState() === true){
      const res = await signupAdmin(registerNext.mail, registerNext.pass, com, photo, org);
      if(res === true){
        Disp({tipe:LOGIN});
        router.push('/page/auth');
      }
    }
  }  

  return(
    <> 
      <Head>
        <title>Pemilo - Register Step 2</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/pemilo.svg" />
      </Head>
        
      <div className={style.container}>

        <div className={style.card}>
          <div className={style.card_body}>
              
            <div className={style.card_form}>
              
              <form method="post">
                
                <div className={style.containerLink}>
                  <p className={style.title}>Organization Committe</p>
                  <p className={style.titleDesc}>Fill this form to complete the registration</p>
                </div>

                <div className={style.containerForm}>
                  
                  <label>Your Organization</label>
                  <input onChange={(e)=>{setOrg(e.target.value)}} type="text" name="organization" id="organization" className={style.input} placeholder="Enter name organization" /><p/><br />
                  
                  <label>Your Committe</label>
                  {
                    com.map((el, i)=>{
                      return(
                        <input onChange={(e)=>{addCommite(i,e.target.value)}} key={i} type="text" name="committe" id="committe" className={style.input} placeholder="Add your committe" />
                      );
                    })
                  }
                  
                  <div className={style.containerIcon} onClick={commitePlus}>
                    <img src="/icon/VectorPlus.svg" height="20px"/>
                  </div>

                  <div className={style.pictureContainer}>
                    
                  <label>Organization Picture</label><br />                  
                  {/* <span className={style.pInfo}>Attach your Organization profile picture</span> */}                    
                  <input onChange={(e)=>{atUpload(e.target.files[0])}} type="file" name="picture" id="picture" />
                    {
                      (staPhoto) ? null : <span>Loading..</span>
                    }                    

                    {/* <p>
                      <input onChange={(e)=>{setAgg(!agg)}} type="checkbox" name="check" id="check" required={true} className={style.checkbox} /><span className={style.pInfoCheck}>i am certify that all is true and complete</span>
                    </p> */}
                    <div className={style.btnContent}>
                      <input onClick={(e)=>{atDone(e)}} type="submit" name="done" id="done" className={style.btn} value="Done"/>
                    </div>

                  </div>

                </div>

              </form>

            </div>
          </div>
        </div>
          
      </div>
        
    </>
  )
}

export default nextRegister;