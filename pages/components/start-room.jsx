import React from 'react';
import Head from 'next/head';
import st from '../../styles/components/start-room.module.css';

const startRoom = () =>{
    return(
        <div>
            <div className={st.container}>
                <div className={st.card}>
                    <div className={st.cardHeader}>
                        <div className={st.titleRoom}>
                            Create Room
                        </div>
                        <img src="/icon/Vector.svg" height="45px" />
                    </div>

                    <div className={st.cardBody}>
                       <div className={st.containerField}>
                            <div className={st.containerFlex}>
                                <div className={st.iconField}>
                                    <img src="/icon/Vector-success.svg" className={st.icon} />
                                </div>
                                <div>
                                    <label for="nameRoom">Room Name</label>
                                    <br /><span>Example Room</span>
                                </div>
                            </div>
                
                       </div>
                       <div className={st.containerField}>
                            <div className={st.column}>
                                <div className={st.containerFlex}>
                                    <div className={st.iconField}>
                                        <img src="/icon/Vector-success.svg" className={st.icon} />
                                    </div>
                                <div>
                                    <label for="roomPassword">Description Room</label> <span className={st.optional}>(Optional)</span>
                                    <br />this is a example of description room what you fill will be shown at here
                                    </div>
                                </div>
                            </div>
                       </div>
                       <div className={st.containerField}>
                            <div className={st.column2}>
                                <div className={st.containerFlex}>
                                    <div className={st.iconField}>
                                        <img src="/icon/Vector-success.svg" className={st.icon} />
                                    </div>
                                    <div>
                                        <label for="roomDescription">Candidate Name</label>
                                       
                                        <ul>
                                            <li>Amardito Khairi</li>
                                            <li>Zamzam Saputra</li>
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                       </div>
                       <p />
                       <div className={st.containerField}>
                            <div className={st.column2}>
                                <div className={st.containerFlex}>
                                    <div className={st.iconField}>
                                        <img src="/icon/Vector-alert.svg" className={st.icon} />
                                    </div>
                                    <div>
                                        <label for="roomPassword">Password</label> <span className={st.optional}>(Optional)</span>
                                        <br />With out password
                                        <p><span className={st.alertDanger}>! alert</span> when you start the room all document on this room, can’t be edited</p>
                                        <p><input type="checkbox" className={st.checkbox} /> i've read the <b>alert</b></p>
                                    </div>
                                </div>
                            </div>
                       </div>

                       <div className={st.containerField}>
                            <p><input type="button" name="save" id="save" className={st.btnNext} value="Save" /></p>
                       </div>

                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default startRoom;