import s from '../../styles/page/auth.module.css'

const Auth = () => {
  return(
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
          <div><p>a</p></div>
        </div>
      </div>
    </div>
  )
}

export default Auth