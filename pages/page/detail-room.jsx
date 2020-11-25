import s from '../../styles/page/detail-room.module.css'
import Nav from '../components/nav'
import Head from 'next/head'

const detailRoom = () => {
  return(
    <html lang="en"> 
      <Head>
        <title>Pemilo - Detail Room</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/pemilo.svg" />
      </Head>
      <Nav></Nav>
      <div className={s.containerFluid}>

        <div className={s.flex}>

          <div className={`${s.side}`}>
            <div className={s.column}>

              <div className={`${s.column} ${s.candidate} ${s.card}`}>
                <div className={s.column}>
                  <span className={s.headtxt}>Position</span>
                  <select name="positionSelect" className={`${s.select} ${s.txt}`}>
                    <option value="placeholder" selected disabled hidden>Position...</option>
                    <option value="position2">Ketua Osis</option>
                    <option value="position3">Unknown</option>
                    <option value="position4">Wakil Ketua Osis</option>
                  </select>
                </div>

                <div className={s.column}>
                  <span className={s.headtxt}>Candidate</span>

                  <div className={s.select}>
                    <span>Candidate 1</span>
                  </div>
                  <div className={s.select}>
                    <span>Candidate 2</span>
                  </div>
                  <div className={s.select}>
                    <span>Candidate 3</span>
                  </div>
                  <div className={s.select}>
                    <span>Candidate 4</span>
                  </div>
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
                  
                  <div className={`${s.column} ${s.candidatebio} ${s.center}`}>
                    <span className={s.headtxt}>Class</span>
                    <span className={s.subheadtxt}>{`XIII RPL 3`}</span>
                  </div>
                  <div className={`${s.column} ${s.candidatebio} ${s.center}`}>
                    <span className={s.headtxt}>Position</span>
                    <span className={s.subheadtxt}>{`Wakil Ketua`}</span>
                  </div>

                </div>
              </div>

              <div className={`${s.row} ${s.candidateVision}`}>
                <div className={s.column}>
                  <span className={s.headtxt}>Visions</span>
                  <span className={s.txt}>{`example vision`}</span>
                </div>
              </div>

              <div className={`${s.row} ${s.candidateMission}`}>
                <div className={s.column}>
                  <span className={s.headtxt}>Missions</span>
                  <span className={s.txt}>{`example mission`}</span>
                </div>
              </div>

              <div className={`${s.row} ${s.candidateVotes} ${s.center} ${s.headtxt}`}>
                <span>Has
                <span className={s.votes}>{` 1200 `}</span>
                votes from
                <span className={s.votes}>{` 3000 `}</span>
                voter</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </html>
  )
}

export default detailRoom;