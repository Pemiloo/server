import s from '../../../styles/components/auth/login.module.css'

const Login = () => {
  return(
    <div className={s.container}>
      <div className={`${s.form}`}>
        <form method="POST">
          <p className={s.label}>Your Email</p>
          <input type="email" name="email" id="email" className={s.input} placeholder="Enter your email" autoComplete="off" required="true" />

          <p className={s.label}>Your Password</p>
          <input type="password" name="password" id="password" className={s.input} placeholder="Enter your password" autoComplete="off" required="true" />

          <div className={s.formFeature}>
            <span className={s.txt} href="#">Forgot your password?</span>
          </div>

          <input type="submit" name="login" id="login" value="Login" className={s.btn}/>
        </form>
      </div>
    </div>
  )
}

export default Login