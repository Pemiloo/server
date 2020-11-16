import Nav from '../components/nav';
import s from '../../styles/page/dashboard.module.css'

const Dashboard = () => {
  return(
    <div>
      <Nav></Nav>
      <div className={s.containerFluid}>

        <div className={s.row}>
          <div className={s.headpage}>
            <span>Dashboard</span>
          </div>
        </div>

        <div className={s.row}>
          
          <div className={`${s.column} ${s.info}`}>
            <div className={s.flex}>

              <div className={s.col}>
                <div className={s.column}>
                  <img src="/icon/Frame participant.svg" alt="participant-icon"/>
                  <span className={s.headtxt}>10000</span>
                  <span className={s.txt}>participant</span>
                </div>
              </div>

              <div className={s.col}>
                <div className={s.column}>
                  <img src="/icon/Frame room.svg" alt="room-icon"/>
                  <span className={s.headtxt}>12</span>
                  <span className={s.txt}>Room Total</span>
                </div>
              </div>
              
              <div className={s.col}>
                <div className={s.column}>
                  <img src="/icon/Frame active.svg" alt="roomActive-icon"/>
                  <span className={s.headtxt}>112</span>
                  <span className={s.txt}>Room Active</span>
                </div>
              </div>
              
              <div className={s.col}>
                <div className={s.column}>
                  <img src="/icon/Frame expire.svg" alt="roomExpire-icon"/>
                  <span className={s.headtxt}>1212</span>
                  <span className={s.txt}>Room Expired</span>
                </div>
              </div>
            
            </div>
            
            <div className={s.graphRoom}>
              {/* split code graph */}
            </div>
          </div>
          
          <div className={`${s.column} ${s.detailRoom}`}>

            <div className={s.row}>
              <span className={s.headsection}>Detail Room</span>
            </div>
            
            <div className={`${s.column} ${s.detail}`}>

              <div className={`${s.column} ${s.room}`}>
                <div className={s.row}>
                  <div className={s.headtxt}>
                    <span>Example Room Title for detail Room</span>
                  </div>
                </div>

                <div className={s.row}>
                  <span className={s.txt}> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </span>
                </div>
              </div>

              <div className={`${s.column} ${s.candidates}`}>
                <div className={s.flex}>
                  <div className={s.subheadtxt}>
                    <span>Candidate</span>
                  </div>
                  <select name="position" id="position" className={`${s.select} ${s.txt}`}>
                    <option value="placeholder" selected disabled hidden>Position...</option>
                    <option value="position2">Ketua Osis</option>
                    <option value="position3">Unknown</option>
                    <option value="position4">Wakil Ketua Osis</option>
                  </select>
                </div>
                <div className={s.column}>

                  <div className={s.candidate}>
                    <div className={s.row}>
                      <img src="/logo.svg" alt="candidate"/>
                      <div className={s.column}>
                        <span className={s.txt}>Candidate Name</span>
                        <span className={s.txt}>1000 vote</span>
                      </div>
                    </div>
                  </div>
                  <div className={s.candidate}>
                    <div className={s.row}>
                      <img src="/logo.svg" alt="candidate"/>
                      <div className={s.column}>
                        <span className={s.txt}>Candidate Name</span>
                        <span className={s.txt}>1000 vote</span>
                      </div>
                    </div>
                  </div>
                  <div className={s.candidate}>
                    <div className={s.row}>
                      <img src="/logo.svg" alt="candidate"/>
                      <div className={s.column}>
                        <span className={s.txt}>Candidate Name</span>
                        <span className={s.txt}>1000 vote</span>
                      </div>
                    </div>
                  </div>
                
                </div>
              </div>

              <div className={`${s.column} ${s.status}`}>
                <div className={s.row}>
                  <div className={`${s.flex}`}>                    
                    <span className={s.subheadtxt}>Start</span>                                        
                    <span className={s.txt}>12 November 2020 07:39 AM</span>                    
                  </div>
                </div>
                <div className={s.row}>
                  <div className={`${s.flex}`}>                    
                    <span className={s.subheadtxt}>End</span>                                        
                    <span className={s.txt}>12 November 2020 05:30 PM</span>                    
                  </div>
                </div>
              </div>

            </div>

          </div>
          
          <div className={`${s.column} ${s.recentRoom}`}>
            <div>a</div>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Dashboard