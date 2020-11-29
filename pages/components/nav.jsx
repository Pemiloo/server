import s from '../../styles/components/nav.module.css'
import useSWR from 'swr'

import {useContext} from 'react';
import {getAdmin} from '../../api';
import {StatePatch, Action} from '../../lib';

const {CREATEROOM} = Action

const Nav = ({email}) => {  

  const Cont = useContext(StatePatch);

  const Disp = Cont.dispatch;

  const atClickRoom = () => {
    Disp({tipe:CREATEROOM});
  }

  const {data} = useSWR(`/api/profile/${email}`, ()=>{ return getAdmin(email) });    

  if(data != undefined){
    return(
      <div className={s.containerFluid}>
        <div className={s.container}>
  
          <div className={s.logo}>
            <img src="/logo.svg" alt="logo pemilo"/>
          </div>
          <div className={s.navMenu}>
  
            <div className={s.menuList}>
              <div className={s.menu} onClick={atClickRoom}>
                <span>Room</span>
              </div>
              <div className={s.menu} onClick={atClickRoom}>
                <img src="/icon/plus.svg" alt="icon plus"/>
              </div>
            </div>
  
            <div className={s.profile}>              
              <img src={(data.linkPhoto != "")?data.linkPhoto:"/pemilo.svg"} alt="profile"></img>
            </div>
  
          </div>
  
        </div>
      </div>
    )
  }
  else{
    return null;
  }
}
export default Nav