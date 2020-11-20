import s from '../../styles/page/detail-room.module.css'
import Nav from '../components/nav'

const detailRoom = () => {
  return(
    <>
      <Nav></Nav>
      <div className={s.containerFluid}>

        <div className={s.flex}>

          <div className={`${s.side}`}>
            <div className={s.column}>

              <div className={`${s.column} ${s.candidate} ${s.card}`}>
                <div className={s.row}>
                  <span className={s.headtxt}>Position</span>
                </div>
              </div>

              <div className={`${s.column} ${s.percentage} ${s.card}`}>
                <div className={s.row}>
                  <span className={s.headtxt}>Percentage</span>
                </div>
              </div>
              
            </div>
          </div>
          
          <div className={`${s.candidateDetail}`}>
            <div className={`${s.column} ${s.card}`}>

              <div className={`${s.row} ${s.center}`}>
                <div className={s.candidateImg}>
                  <img src="/pemilo.svg" alt="candidate image"/>
                </div>
              </div>

              <div className={`${s.row} ${s.center}`}>
                <div className={`${s.headtxt} ${s.candidateName}`}>
                  <span>{`Example Unknown Name candidate`}</span>
                </div>
              </div>

              <div className={s.row}>
                <div className={s.flex}>
                  
                  <div className={`${s.column} ${s.candidateClass} ${s.center}`}>
                    <span>Class</span>
                    <span>{`XIII RPL 3`}</span>
                  </div>
                  <div className={`${s.column} ${s.candidatePosition} ${s.center}`}>
                    <span>Position</span>
                    <span>{`Wakil Ketua`}</span>
                  </div>

                </div>
              </div>

              <div className={`${s.row} ${s.candidateVision}`}>
                <div className={s.column}>
                  <span>Visions</span>
                  <span>{`example vision`}</span>
                </div>
              </div>

              <div className={`${s.row} ${s.candidateMission}`}>
                <div className={s.column}>
                  <span>Missions</span>
                  <span>{`example mission`}</span>
                </div>
              </div>

              <div className={`${s.row} ${s.candidateVotes} ${s.center}`}>
                <span>Has</span>
                <span>{`1200`}</span>
                <span>votes from</span>
                <span>{`3000`}</span>
                <span>voter</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default detailRoom;