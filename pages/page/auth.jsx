import s from '../../styles/page/auth.module.css'
import Register from '../components/auth/register'
import Login from '../components/auth/login'
import Head from 'next/head';

const Auth = () => {
  return(
    <html lang="en"> 
      <Head>
        <title>Pemilo - authentification</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/pemilo.svg" />
      </Head>
      <div className={s.containerFluid}>
        <div className={s.container}>
          <div className={s.sideCard}>
            <div className={s.headTxt}>
              <span>Pemilo</span>
            </div>
            <div className={s.txt}>
              <span className={s.Sptxt}>Pemilo</span><span> is</span> <br/>
              <span> online voting program based on website platform</span>
            </div>
          </div>
          <div className={s.formCard}>

            <div className={s.switchBtn}>
              <div className={`${s.half} ${s.register}`}>
                <span>REGISTER</span>
              </div>
              <div className={`${s.half} ${s.login}`}>
                <span>LOGIN</span>
              </div>
            </div>
            {/* <Register></Register> */}
            <Login></Login>

          </div>
        </div>
      </div>
    </html>
  )
}

export default Auth