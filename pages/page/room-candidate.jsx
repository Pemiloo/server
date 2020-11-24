import React from 'react';
import Head from 'next/head';
import st from '../../styles/page/room-candidate.module.css';
import Nav from '../components/nav';


const roomCandidate = () => {
    return(
        <div className={st.containerFull}>
         <Nav></Nav>
            <Head>
                <title>Pemilo - Room Candidate</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/pemilo.svg" />
            </Head>

             <div className={st.containerFluid}>
                <div className={st.box1}>
                    <div className={st.column1}>
                        <div className={st.containerForm}>
                            <h2>Candidate</h2>
                            <input type="text" name="candidate" id="candidate" placeholder="Enter your candidate" className={st.input}/>
                            {/* <input type="text" name="candidate" id="candidate" placeholder="Enter your candidate" className={st.input}/>
                            <input type="text" name="candidate" id="candidate" placeholder="Zamzam" className={st.input}/>
                            <input type="text" name="candidate" id="candidate" placeholder="Enter your candidate" className={st.input}/> */}
                            
                            <div className={st.containerIcon}>
                                <img src="/icon/VectorPlus.svg" height="25px"  />
                            </div>

                            <div className={st.containerSubmit}>
                                <input type="button" className={st.submit} name="edit" id="edit" value="Edit Room"/>
                                <input type="submit" className={st.submit} name="submit" id="submit" value="Submit"/>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className={st.column2}>
                    <div className={st.containerForm}>
                        <div className={st.candidateImg}>
                            <img className={st.imgThumb} src="/pemilo.svg" alt="candidate image"/>
                            <img className={st.imgCam} src="/icon/VectorCamera.svg" height="25px" />
                        </div>
                        
                        <div className={st.candidateDetail}>
                            <input type="text" className={st.input} placeholder="Zamzam Saputra" />
                       
     
                            <div className={st.flexForm1}>
                                <div className={st.box}>
                                    <label>Class</label><br />
                                    <input type="text" name="class" id="class" placeholder="XII RPL 1" className={st.input} />
                                </div>
                                <div className={st.box}>
                                    <label>Position</label><br />
                                        <input type="text" name="position" id="position" className={st.input} />
                                </div>
                            </div>
                                
                            <div className={st.vision}>
                                <label>Vision</label>
                                <textarea name="vision" rows="5" className={st.textarea} placeholder="Your vision"></textarea>
                            </div>

                            <div className={st.mision}>
                                <label>Missions</label>
                                <input type="text" name="mision" id="mision " className={st.input} placeholder="Your mision" />
                            </div>
                            <div className={st.containerIcon}>
                                <img src="/icon/VectorPlus.svg" height="25px"  />
                            </div>

                        </div>


                    </div>
                </div>
             </div>
        </div>
    );
}

export default roomCandidate;