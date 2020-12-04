import s from '../../../styles/components/auth/login.module.css'

import { useState } from 'react'
import { useRouter } from 'next/router';
import { signinAdmin } from '../../../api';
import { set } from '../../../lib';

const Login = () => {  

  const router = useRouter();

  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  const cheState = (st = "") => {
    return (st = "") ? false : true;
  }

  const atClick = async (e) => {
    
    e.preventDefault();

    const staMail = cheState(mail);
    const staPass = cheState(pass);

    if(staMail && staPass){
      try {
        const res = await signinAdmin(mail, pass);            
        if(res){
          set("Auth", mail);
          router.push(`/page/${mail}/dashboard`);
        }
      } catch (error) {
        alert("Email atau Password tidak sesuai!");
      }      
    }
    else if(!staMail){
      alert("Email Kosong!");
    }
    else if(!staPass){
      alert("Password Kosong");
    }

  }

  return(
    <>
    <div className={s.container}>
      <div className={`${s.form}`}>
        <form>
          <p className={s.label}>Email</p>
          <input onChange={(e)=>{setMail(e.target.value)}} type="email" name="email" id="email" className={s.input} placeholder="Enter your email" autoComplete="off" required={true} />

          <p className={s.label}>Password</p>
          <input onChange={(e)=>{setPass(e.target.value)}} type="password" name="password" id="password" className={s.input} placeholder="Enter your password" autoComplete="off" required={true} />

          {/* <div className={s.formFeature}>
            <span className={s.txt} href="#">Forgot your password?</span>
          </div> */}

          <input onClick={(e)=>{atClick(e)}} type="submit" name="login" id="login" value="Login" className={s.btn}/>        
        </form>
      </div>
    </div>
    </>
  )
}

export default Login