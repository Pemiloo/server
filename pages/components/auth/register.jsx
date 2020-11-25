import s from '../../../styles/components/auth/register.module.css'

const Register = () => {
  return(
    <div className={s.container}>
      <div className={`${s.form}`}>
        <form method="POST">
          <p className={s.label}>Your Email</p>
          <input type="email" name="email" id="email" className={s.input} placeholder="Enter your email" autoComplete="off" required="true" />

          <p className={s.label}>Your Password</p>
          <input type="password" name="password" id="password" className={s.input} placeholder="Enter your password" autoComplete="off" required="true" />

          <div className={s.formFeature}>
            <input type="checkbox" name="check" id="check" className={s.checkbox} required="true" /> 
            <span className={s.txt}>I am certify that email still active </span>
          </div>

          <input type="submit" name="register" id="register" value="Register" className={s.btn}/>
        </form>
      </div>
    </div>
  )
}

export default Register