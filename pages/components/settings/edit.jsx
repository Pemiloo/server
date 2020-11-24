import React from 'react';
import Head from 'next/head';
import st from '../../../styles/components/settings/edit.module.css';
import Nav from '../../../pages/components/nav';

const edit = () => {
    return(
        <div className={st.containerFull}>
            <Nav></Nav>
            <Head>
                <title>Pemilo - Edit Profile</title>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/pemilo.svg" />
            </Head>
            <div className={st.containerFluid}>
                <div className={st.column1}>
                    <div className={st.bg}>
                        <p className={`${st.txtCol} ${st.edit}`}>Edit Profile</p>
                        <p className={`${st.txtCol} ${st.change}`}>Change Password</p>
                        <p className={`${st.txtCol} ${st.settings}`}>Settings</p>
                    </div>
                </div>
                <div className={st.column2}>
                    <div className={st.containerForm}>
                       <center> 
                            <div className={st.candidateImg}>
                                <img className={st.imgThumb} src="/pemilo.svg" alt="candidate image"/>
                                <img className={st.imgCam} src="/icon/VectorCamera.svg" height="25px" />
                            </div>
                        </center>

                        <div className={st.wrap}>
                            <label>Your Organization</label>
                            <input type="text" name="organization" id="organization" placeholder="Your organization" className={st.input} />

                            <div className={st.committe}>
                                <label>Your Committe</label>
                                <input type="text" name="committe" id="committe" placeholder="Your committe" className={st.input} />
                            </div>
                            
                            <div className={st.containerIcon}>
                                <img src="/icon/VectorPlus.svg" height="25px"  />
                            </div>

                            <input type="submit" name="save" id="save" value="Save" className={st.btn} />
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    );
}

export default edit;