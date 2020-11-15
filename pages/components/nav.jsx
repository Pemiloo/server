import s from '../../styles/components/nav.module.css'

const nav = () => {
  return(
    <div className={s.container}>
      <div className={s.logo}>
        <img src="/logo.svg" alt="logo pemilo"/>
      </div>
      <div className={s.navMenu}>

        <div className={s.menuList}>
          <div className={s.menu}>
            <span>Room</span>
          </div>
          <div className={s.menu}>
            <img src="/icon/plus.svg"/>
          </div>
        </div>

        <div className={s.profile}>
          <span>Name Profile Organization</span>
          <img src="/pemilo.svg" alt="profile"></img>
        </div>

      </div>
    </div>
  )
}
export default nav