import s from '../../../styles/page/dashboard.module.css'
import Nav from '../../components/nav';
import Head from 'next/head';
import useSWR, { mutate } from 'swr';
import EditRoom from '../../components/edit-room';
import CreateRoom from '../../components/create-room';

import {Line } from 'react-chartjs-2';
import {useRouter} from 'next/router';
import {StatePatch, Action, generateGraph, Socket} from '../../../lib';
import React, {useEffect, useState, useContext} from 'react';
import {getCountAnggota, getCountRoom, getCountRoomSta, getListRoom, getOption, getCandidate, deleteRoom, getLen } from '../../../api';
import { uploadFileXl } from '../../../lib';
import { delAll } from '../../../lib';

const {EDITROOM, CHANGEPOS} = Action;

const soc = new Socket();
const eng = soc.con("http://34.101.95.115:3400");

const CandidateSection = ({onClick ,room, position = "Bagus"}) => {

  const {data} = useSWR(`/api/CandidateSection/${room}/${position}`, ()=>{ return getCandidate(room, position) });

  if(data != undefined){
    return( 
      <>
      {
        data.map((e,i)=>{
          return(
            <div className={s.candidate} key={i} onClick={()=>{onClick(e.id)}}>
              <div className={s.flex}>
                <img src={e.photo} alt={"Photo"}/>
                <div className={s.column}>
                  <span className={s.txt}>{e.name}</span>
                  <span className={s.txt}>{`${e.classroom}`}</span>
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

const Recent = ({load, daRoom, atMore}) => {  

  // const atDelete = async (room = "") => {
  //   console.log(room);
  //   await deleteRoom(room);
  //   load();
  // }

  return(
    <div className={`${s.column} ${s.recentRoom}`}>  
      <div className={s.row}>
        <span className={s.headsection}>List Room</span>
      </div>  
      <div className={`${s.row} ${s.wrap}`}>  
      {/* {`Recent or latest room`} */}                
        {
          daRoom.map((e,i)=>{
            return(
              <div className={`${s.column} ${s.room} ${s.column3}`} key={i} >
                <div className={`${s.headtxt}`}>
                  <span>{e.nama}</span>
                      <img src="/icon/close.svg" height="25px" />
                  </div>
                <div className={s.row}>
                  <span className={s.txt}>
                    {e.deskripsi}
                  </span>
                </div>
                <div className={s.row}>
                  <button onClick={()=>{atMore(i, e.codeRoom)}} className={`${s.expand} ${s.subheadtxt}`}>more</button>
                </div>
              </div>
            )
          })
        }                
      </div>

    </div>
  );
}

const Desc = ({datRoom, email}) => {  

  const Cont = useContext(StatePatch);

  const Disp = Cont.dispatch;

  const router = useRouter();

  const [op, setOp] = useState("Bagus");  
  const [staForm, setStaForm] = useState(true);

  const { data } = useSWR('/api/option', ()=>{ return getOption('UNDIKNAS') });

  const atChangePos = (value = "Bagus") => {
    setOp(value);  
    Disp({tipe:CHANGEPOS, payload:{pos:value}});
  }

  const atAddCandidate = () => {
    router.push(`/page/${email}/${datRoom.codeRoom}/room-candidate`);
  }

  const atEditCandidate = (id) => {
    router.push(`/page/${email}/${datRoom.codeRoom}/${id}/edit-candidate`);
  }

  const atChangeFileForm = (file) => {        
    setStaForm(false);      
    const op = uploadFileXl(file, datRoom.codeRoom);
    fetch('https://pemilo.id/v1/anggota/uploads', op)
    .then(res => res.json())
    .then(res => {
      setStaForm(true);
      alert("Selesai Upload");        
      mutate(`/api/countTab/${email}/${datRoom.codeRoom}`);
    })
    .catch(err => console.log(err));
  }

  const atLogOut = () => {    
    delAll();
    router.push(`/page/auth`);
  }

  const atEditRoom = () => {
    Disp({tipe:EDITROOM});
  }

  return(
    <div className={`${s.column} ${s.detailRoom}`}>      

      <div className={`${s.column} ${s.detail}`}>  
      {/* {`room title and description`} */}
        <div className={`${s.column} ${s.room}`}>
          <div className={s.row}>
            <span className={s.headsection}>Detail Room</span>
          </div>
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
            <select onChange={(e)=>{atChangePos(e.target.value)}} name={"position"} id={"position"} className={`${s.select} ${s.txt}`}>
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
            <CandidateSection onClick={atEditCandidate} room={datRoom.codeRoom} position={op}></CandidateSection>
          </div>
          <div className={`${s.row} ${s.wrap}`}>

            <button onClick={atAddCandidate} className={`${s.txt} ${s.btnRoom}`}>Add Candidate (+)</button>
            {/* <button onClick={atEditRoom} className={`${s.txt} ${s.btnRoom}`}>Edit Room</button> */}
            <div className={`${s.txt} ${s.btnRoom}`}>                    
              <label> Room Code </label>
              <input name={"RoomCode"} id={"roomCode"} className={`${s.txt}`} value={datRoom.codeRoom} readOnly />

             
            </div>

          </div>

          <div className={s.btnCon}>
            <div className={s.wrapFile}>
              <label>Participant</label><br/><br/>
              {
                (staForm) ? 
                <>
                  <label htmlFor="upload" className={`${s.expand} ${s.subheadtxt}`}> Upload file </label>
                  <input type="file" onChange={(e)=>{ atChangeFileForm(e.target.files[0]) }} id={'upload'} className={`${s.subheadtxt}`}/> 
                </>
                : <span>Loading..</span>
              }              
            </div>
            <button className={s.btnLogout} onClick={atLogOut} >Logout</button>
          </div>
        </div>

      {/* {`status room start till end`} */}
        {/* <div className={`${s.column} ${s.status}`}>
          <div className={s.row}>
            <div className={`${s.column}`}>
              <span className={s.subheadtxt}>Start</span>
              <span className={s.txt}>{ datRoom.start }</span>
            </div>
          </div>
          {
            (datRoom.end != undefined) ? <EndSection data={datRoom.end} ></EndSection> : null
          }        
        </div> */}
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
  const daRoom = await getListRoom(email);

  //console.log(daRoom);

  return{
    props:{
      parMail : email,
      daRoom,
    }
  }
}

// const listName = [];
// const listData = [];

const Grap = ({room}) => {

  const router = useRouter();

  const Cont = useContext(StatePatch);

  const [listName, setListName] = useState([]);
  const [listData, setListData] = useState([]);

  // const [dataGraph, setDataGraph] = useState({});

  const Stat = Cont.state;  

  //console.log(room);

  //console.log(Stat);

  const listCandidate = useSWR(`/api/CandidateSection/${room[0].codeRoom}/${Stat.pos}`, ()=>{ return getCandidate(room[0].codeRoom, Stat.pos) });

  //console.log(listCandidate.data);    

  const atAddGraph = async () => {
    if(listCandidate.data != undefined){              
      setListName([]);
      setListData([]);              
      for(let i=0;i<listCandidate.data.length;i++){
        setListName(listName => [...listName, listCandidate.data[i].name]);        
        const tmpLen = await getLen(room[0].codeRoom, listCandidate.data[i].id);                
        setListData(listData => [...listData, tmpLen]);
      }            
    }
  }
  
  useEffect(()=>{
    eng.on("getVote",async ()=>{
      //console.log("Kena");
      //mutate(`/api/CandidateSection/${room[0].codeRoom}/${Stat.pos}`);
      //await atAddGraph();
      router.reload();
    });
  },[]);

  useEffect(()=>{    
    (async ()=>{
      await atAddGraph();
    })();
  },[listCandidate.data]);  

  // console.log(listName);
  // console.log(listData);    

  if(listCandidate.data != undefined && listName.length != 0){
    //console.log(listName);
    return(
      <div className={s.graphRoom}>      
        <Line data={generateGraph(listName, listData)} />
      </div>
    );
  }
  else{
    return(
      <div className={s.graphRoom}>      
        <Line data={{}} />
      </div>
    );
  }
}

const Dashboard = React.memo(({parMail, daRoom}) => {

  const router = useRouter();

  const Cont = useContext(StatePatch);

  const Stat = Cont.state;

  const [room, setRoom] = useState("");  
  const [mail, setMail] = useState(parMail);  

  //console.log(daRoom);
  const load = () => {
    router.push(`/page/${parMail}/dashboard`);
  }

  const [index, setIndex] = useState(0);    

  useEffect(()=>{    
    if(daRoom[0]  != undefined){
      setRoom(daRoom[0].codeRoom);    
    }else{
      setRoom(daRoom);    
    }    
  },[]);

  const { data } = useSWR(`/api/countTab/${mail}/${room}`, ()=>{ return bulkOperation(mail, room) });      
  
  const atMore = (ix = 0, newRoom = "") => {
    setIndex(ix);
    setRoom(newRoom);
  }  
  
  if(data != undefined && daRoom != undefined){
    return(
      <> 
        <Head>
          <title>Pemilo - Dashboard</title>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/pemilo.svg" />
        </Head>
        
        <Nav email={parMail}></Nav>
        
        {
          (Stat.doubleModalRoom.create === true) ? <CreateRoom email={parMail}></CreateRoom> : null
        }

        {
          (Stat.doubleModalRoom.edit === true) ? <EditRoom email={parMail} ></EditRoom> : null
        }

        <div className={s.containerFluid}>
  
          <div className={s.row}>
            <div className={s.headpage}>
              <span>DASHBOARD</span>
            </div>
          </div>
  
          <main className={`${s.row} ${s.wrap}`}>
            
            <div className={`${s.column} ${s.info}`}>
  
            {/* {`information account 4 square`} */}
              <div className={s.flex}>                           
                
                <div className={s.col}>
                  <div className={s.column}>
                    {/* <img src={"/icon/Frame participant.svg"} alt={"participant-icon"}/> */}
                    <span className={s.headtxt}>{ (data[0] === undefined) ? 0 : data[0] }</span>
                    <span className={s.txt}>Participant</span>
                  </div>
                </div>
  
                <div className={s.col}>
                  <div className={s.column}>
                    {/* <img src={"/icon/Frame room.svg"} alt={"room-icon"}/> */}
                    <span className={s.headtxt}>{data[1]}</span>
                    <span className={s.txt}>Room Total</span>
                  </div>
                </div>
  
                <div className={s.col}>
                  <div className={s.column}>
                    {/* <img src={"/icon/Frame active.svg"} alt={"roomActive-icon"}/> */}
                    <span className={s.headtxt}>{data[2]}</span>
                    <span className={s.txt}>Room Active</span>
                  </div>
                </div>
  
                <div className={s.col}>
                  <div className={s.column}>
                    {/* <img src={"/icon/Frame expire.svg"} alt={"roomExpire-icon"}/> */}
                    <span className={s.headtxt}>{data[3]}</span>
                    <span className={s.txt}>Room Expired</span>
                  </div>
                </div>
              </div>
  
            {/* {`graph room while running`} */}
            {
              (daRoom.length === 0 || daRoom === undefined) ? null : <Grap room={daRoom}></Grap>
            }            
  
            </div>
  
            {/* <div className={`${s.column} ${s.detailRoom}`}>
              <div className={s.row}>
                <span className={s.headsection}>Detail Room</span>
              </div>
            </div> */}
            {(daRoom[index] === undefined ) ? null : <Desc datRoom={daRoom[index]} email={parMail} ></Desc>}              
  
            {(daRoom.length === 0 || daRoom === undefined) ? null : <Recent load={load} daRoom={daRoom} atMore={atMore}></Recent>}
  
          </main>
  
        </div>
      </>
    )
  }
  else{
    return null;
  }

});
export default Dashboard;
