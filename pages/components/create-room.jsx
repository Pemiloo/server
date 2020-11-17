import React from 'react';
import Head from 'next/head';
import st from '../../styles/components/create-room.module.css';

const createRoom = () =>{
    return(
        <div>
            <div className={st.container}>
                <div className={st.card}>
                    <div className={st.cardHeader}>
                        <div className={st.titleRoom}>
                            Create Room
                        </div>
                        <img src="/icon/close.svg" height="50px" />
                    </div>

                    <div className={st.cardBody}>
                       <div className={st.containerField}>
                            <label for="nameRoom">Name Room</label>
                            <p><input type="text" name="nameRoom" id="nameRoom" className={st.input} required="true" autoComplete="off" placeholder="Enter your room name" /></p>
                       </div>
                       <div className={st.containerField}>
                            <label for="roomPassword">Room Password</label>
                            <p><input type="password" name="roomPassword" id="roomPassword" className={st.input} autoComplete="off" placeholder="Enter your room password" /></p>
                       </div>
                       <div className={st.containerField}>
                            <label for="roomDescription">Room Description</label>
                            <p><textarea name="roomDescription" id="roomDescription" className={st.textarea} rows="5" placeholder="Enter your room description"></textarea></p>
                       </div>
                       <div className={st.containerField}>
                            <label for="participant">Participant</label>
                            <p>Upload participant extension format <b>.csv</b></p>
                            <p><input type="file" name="participant" id="participant" ></input></p>
                       </div>

                       <div className={st.containerField}>
                            <p><input type="button" name="btnNext" id="btnNext" className={st.btnNext} value="Next" /></p>
                       </div>

                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default createRoom;