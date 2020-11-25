import Nav from '../components/nav';
import s from '../../styles/page/dashboard.module.css'
import { Line } from 'react-chartjs-2';

const generateData = () => {
  return Math.round(Math.random() * 100);
}

const Dashboard = () => {
  const data = {
    labels: [['June', '2015'], 'July', 'August', 'September', 'October', 'November', 'December', ['January', '2016'], 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.3,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [
            generateData(),
            generateData(),
            generateData(),
            generateData(),
            generateData(),
            generateData(),
            generateData(),
            generateData(),
            generateData(),
            generateData(),
            generateData(),
            generateData(),
        ]
      },
      {
        label: 'My Second dataset',
        fill: false,
        lineTension: 0.3,
        backgroundColor: 'rgb(192,75,186)',
        borderColor: 'rgb(171,75,192)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgb(180,75,192)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [
          generateData(),
          generateData(),
          generateData(),
          generateData(),
          generateData(),
          generateData(),
          generateData(),
          generateData(),
          generateData(),
          generateData(),
          generateData(),
          generateData(),
        ]
      }
    ]
  };

  return(
    <>
      <Nav></Nav>
      <div className={s.containerFluid}>

        <div className={s.row}>
          <div className={s.headpage}>
            <span>Dashboard</span>
          </div>
        </div>

        <main className={s.row}>

          <div className={`${s.column} ${s.info}`}>

          {/* {`information account 4 square`} */}
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

          {/* {`graph room while running`} */}
            <div className={s.graphRoom}>
              {/* split code graph */}
              <Line data={data} />
            </div>

          </div>

          <div className={`${s.column} ${s.detailRoom}`}>

            <div className={s.row}>
              <span className={s.headsection}>Detail Room</span>
            </div>

            <div className={`${s.column} ${s.detail}`}>

            {/* {`room title and description`} */}
              <div className={`${s.column} ${s.room}`}>
                <div className={s.row}>
                  <div className={s.headtxt}>
                    <span>Example Room Title for detail Room test long text</span>
                  </div>
                </div>

                <div className={s.row}>
                  <span className={s.txt}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </span>
                </div>
              </div>

            {/* {`candidate and position`} */}
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

            {/* {`status room start till end`} */}
              <div className={`${s.column} ${s.status}`}>
                <div className={s.row}>
                  <div className={`${s.column}`}>
                    <span className={s.subheadtxt}>Start</span>
                    <span className={s.txt}>12 November 2020 07:39 AM</span>
                  </div>
                </div>
                <div className={s.row}>
                  <div className={`${s.column}`}>
                    <span className={s.subheadtxt}>End</span>
                    <span className={s.txt}>12 November 2020 05:30 PM</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          <div className={`${s.column} ${s.recentRoom}`}>

            <div className={s.row}>
              <span className={s.headsection}>Recent Room</span>
            </div>

            <div className={s.column}>

            {/* {`Recent or latest room`} */}
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
                <div className={s.row}>
                  <button type="submit" className={`${s.expand} ${s.subheadtxt}`}>more</button>
                </div>
              </div>

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
                <div className={s.row}>
                  <button type="submit" className={`${s.expand} ${s.subheadtxt}`}>more</button>
                </div>
              </div>

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
                <div className={s.row}>
                  <button type="submit" className={`${s.expand} ${s.subheadtxt}`}>more</button>
                </div>
              </div>

            </div>

          </div>

        </main>

      </div>
    </>
  )
}
export default Dashboard
