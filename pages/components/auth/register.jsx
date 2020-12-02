import s from '../../../styles/components/auth/register.module.css'

import {useRouter} from 'next/router'
import {useState, useContext} from 'react';
import {StatePatch, Action} from '../../../lib';

const { REGIS } = Action;

const Register = () => {

  const Cont = useContext(StatePatch);  
  
  const Disp = Cont.dispatch;    

  const router = useRouter();

  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  const cheState = (st = "") => {
    return (st = "") ? false : true;
  }

  const atClick = (e) => {    

    e.preventDefault();

    const staMail = cheState(mail);
    const staPass = cheState(pass);

    if(staMail && staPass){
      Disp({tipe:REGIS, payload : {register:{mail, pass}}});      
      router.push('/page/next-register');
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
            <input type="checkbox" name="check" id="check" className={s.checkbox} required={true} /> 
            <span className={s.txt}>I am certify that email still active </span>
          </div> */}

          <input onClick={(e)=>{atClick(e)}} name="register" id="register" className={s.btn} type="submit"></input>
        </form>
      </div>
    </div>
    </>
  )
}

export default Register;