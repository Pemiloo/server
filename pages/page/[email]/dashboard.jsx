import s from '../../../styles/page/dashboard.module.css'
import Nav from '../../components/nav';
import Head from 'next/head';
import useSWR from 'swr';

import { Line } from 'react-chartjs-2';
import { getCountAnggota, getCountRoom, getCountRoomSta, getListRoom, getOption, getCandidate } from '../../../api';
import { useEffect, useState } from 'react';
import { get } from '../../../lib';

const generateData = () => {
  return Math.round(Math.random() * 100);
}

const CandidateSection = ({room, position = "Ketua"}) => {

  const {data} = useSWR(`/api/CandidateSection/${position}`, ()=>{ return getCandidate(room, position) });

  if(data != undefined){
    return(
      <>
      {
        data.map((e,i)=>{
          return(
            <div className={s.candidate}>
              <div className={s.row}>
                <img src={e.photo} alt={"Photo"}/>
                <div className={s.column}>
                  <span className={s.txt}>{e.name}</span>
                  <span className={s.txt}>{`Kelas ${e.classroom}`}</span>
                </div>
              </div>
            </div>
          )
        })
      }
      </>
    );
  }
  else{
    return(null);
  }

}

const EndSection = ({data}) => {
  return(
    <div className={s.row}>
      <div className={`${s.column}`}>
        <span className={s.subheadtxt}>End</span>
        <span className={s.txt}>{ data }</span>
      </div>
    </div>
  );
}

const Desc = ({datRoom}) => {  

  const [op, setOp] = useState('');

  const { data } = useSWR('/api/option', ()=>{ return getOption('position') });

  return(
    <div className={`${s.column} ${s.detail}`}>  
    {/* {`room title and description`} */}
      <div className={`${s.column} ${s.room}`}>
        <div className={s.row}>
          <div className={s.headtxt}>
            <span>{datRoom.nama}</span>
          </div>
        </div>

        <div className={s.row}>
          <span className={s.txt}>
            {datRoom.deskripsi}
          </span>
        </div>
      </div>

    {/* {`candidate and position`} */}
      <div className={`${s.column} ${s.candidates}`}>
        <div className={s.flex}>
          <div className={s.subheadtxt}>
            <span>Candidate</span>
          </div>
          <select onChange={(e)=>{setOp(e.target.value)}} name={"position"} id={"position"} className={`${s.select} ${s.txt}`}>
            <option value="" disabled hidden>Position...</option>
            {
              ((data != undefined) ? data : []).map((e,i)=>{
                return(
                  <option key={i} value={e}>{e}</option>                    
                )
              })
            }
          </select>
        </div>
        <div className={`${s.row} ${s.wrap}`}>
          {/* Bagian untuk Candidate Section*/}
          <CandidateSection room={datRoom.codeRoom} ></CandidateSection>
        </div>
        <div className={`${s.row} ${s.wrap}`}>

          <button className={`${s.txt} ${s.btnRoom}`}>add candidate</button>
          <button className={`${s.txt} ${s.btnRoom}`}>edit room</button>
          <div className={`${s.txt} ${s.btnRoom}`}>                    
            <label> Room Code </label>
            <input name={"RoomCode"} id={"roomCode"} className={`${s.txt}`} value={datRoom.codeRoom} readOnly />
          </div>

        </div>
      </div>

    {/* {`status room start till end`} */}
      <div className={`${s.column} ${s.status}`}>
        <div className={s.row}>
          <div className={`${s.column}`}>
            <span className={s.subheadtxt}>Start</span>
            <span className={s.txt}>{ datRoom.start }</span>
          </div>
        </div>
        {
          (datRoom.end != undefined) ? <EndSection data={datRoom.end} ></EndSection> : null
        }
        
      </div>
    </div>
  )
}

const bulkOperation = async (email = "", room = "") => {    
  if(email != "" || room != ""){    
    const res = await Promise.all([ getCountAnggota(room), getCountRoom(email), getCountRoomSta(email, true),  getCountRoomSta(email, false)]);  
    return res;
  }else{
    return undefined;
  }
}

export async function getServerSideProps(context){

  const { email } = context.params;

  return{
    props:{
      parMail : email
    }
  }
}

const Dashboard = ({parMail}) => {

  const [room, setRoom] = useState("");  
  const [mail, setMail] = useState(parMail);  

  const [index, setIndex] = useState(0);  

  const listRoom = useSWR(`/api/listRoom/${mail}`, ()=>{ return getListRoom(mail)});

  useEffect(()=>{    
    if(listRoom.data != undefined){
      setRoom(listRoom.data[0].codeRoom);
    }
  },[listRoom.data]);

  const { data } = useSWR(`/api/countTab/${mail}/${room}`, ()=>{ return bulkOperation(mail, room) });      
  
  const atMore = (ix = 0, newRoom = "") => {
    setIndex(ix);
    setRoom(newRoom);
  }
  
  if(data != undefined && listRoom.data != undefined){
    return(
      <> 
        <Head>
          <title>Pemilo - Dashboard</title>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/pemilo.svg" />
        </Head>
        
        <Nav></Nav>
        <div className={s.containerFluid}>
  
          <div className={s.row}>
            <div className={s.headpage}>
              <span>Dashboard</span>
            </div>
          </div>
  
          <main className={`${s.row} ${s.wrap}`}>
            
            <div className={`${s.column} ${s.info}`}>
  
            {/* {`information account 4 square`} */}
              <div className={s.flex}>                           
                
                <div className={s.col}>
                  <div className={s.column}>
                    <img src={"/icon/Frame participant.svg"} alt={"participant-icon"}/>
                    <span className={s.headtxt}>{ (data[0] === undefined) ? 0 : data[0] }</span>
                    <span className={s.txt}>participant</span>
                  </div>
                </div>
  
                <div className={s.col}>
                  <div className={s.column}>
                    <img src={"/icon/Frame room.svg"} alt={"room-icon"}/>
                    <span className={s.headtxt}>{data[1]}</span>
                    <span className={s.txt}>Room Total</span>
                  </div>
                </div>
  
                <div className={s.col}>
                  <div className={s.column}>
                    <img src={"/icon/Frame active.svg"} alt={"roomActive-icon"}/>
                    <span className={s.headtxt}>{data[2]}</span>
                    <span className={s.txt}>Room Active</span>
                  </div>
                </div>
  
                <div className={s.col}>
                  <div className={s.column}>
                    <img src={"/icon/Frame expire.svg"} alt={"roomExpire-icon"}/>
                    <span className={s.headtxt}>{data[3]}</span>
                    <span className={s.txt}>Room Expired</span>
                  </div>
                </div>
              </div>
  
            {/* {`graph room while running`} */}
              <div className={s.graphRoom}>
                {/* split code graph */}
                {/* <Line data={data} /> */}
              </div>
  
            </div>
  
            <div className={`${s.column} ${s.detailRoom}`}>
  
              <div className={s.row}>
                <span className={s.headsection}>Detail Room</span>
              </div>

              {
                (listRoom.data[index] === undefined ) ? null : <Desc datRoom={listRoom.data[index]} ></Desc>
              }              
  
            </div>
  
            <div className={`${s.column} ${s.recentRoom}`}>
  
              <div className={s.row}>
                <span className={s.headsection}>Recent Room</span>
              </div>
  
              <div className={`${s.row} ${s.wrap}`}>
  
              {/* {`Recent or latest room`} */}
                
                {
                  listRoom.data.map((e,i)=>{
                    return(
                      <div className={`${s.column} ${s.room}`} key={i} >
                        <div className={s.row}>
                          <div className={s.headtxt}>
                            <span>{e.nama}</span>
                          </div>
                        </div>
                        <div className={s.row}>
                          <span className={s.txt}>
                            {e.deskripsi}
                          </span>
                        </div>
                        <div className={s.row}>
                          <button onClick={()=>{atMore(i, e.codeRoom)}} className={`${s.expand} ${s.subheadtxt}`}>More</button>
                        </div>
                      </div>
                    )
                  })
                }              
  
              </div>
  
            </div>
  
          </main>
  
        </div>
      </>
    )
  }
  else{
    return null;
  }

}
export default Dashboard
