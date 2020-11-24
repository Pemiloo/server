import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import st from '../../../styles/components/settings/setting.module.css';
import Nav from '../../../pages/components/nav';

const settings = () => {
    return(
        <div className={st.containerFull}>
            <Nav></Nav>
            <Head>
                <title>Pemilo - Settings Room</title>
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
                        <div className={st.wrap}>

                            <div className={st.info}>
                                <span className={st.title}>Change Email</span><br />
                                <span className={st.desc}>this action will change your current email to new email and your old email will be <b><u>deleted</u></b> except all your <b>room</b> </span>
                            </div>

                            <div className={st.form}>
                                <label className={st.label}>Old Email</label>
                                <input type="text" name="old" id="old" placeholder="Enter your old Email" className={st.input} /><p />
                                
                                <label className={st.label}>New Email</label>
                                <input type="text" name="new" id="new" placeholder="Enter new Email" className={st.input} /><p />

                                <label className={st.label}>Confirm new Email</label>
                                <input type="text" name="confirm" id="confirm" placeholder="Enter confirm Email" className={st.input} />

                                <input type="submit" name="change" id="change" value="Change" className={st.btn} />
                            </div>

                            <div className={st.formDel}>
                                <div className={st.delRoom}>
                                    <span className={st.title}>Delete all room</span><br />
                                    <span className={st.desc}>this action will be delete all your rooms thats has expired status </span><p />

                                    <input type="submit" className={st.btnDel} name="delrom" id="delrom" value="Delete" />
                                </div>
                                <div className={st.delCom}>
                                    <span className={st.title}>Delete all committe</span><br />
                                    <span className={st.desc}>this action will be delete all your committe</span><p />

                                    <input type="submit" className={st.btnDel} name="delcom" id="delcom" value="Delete" />
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    );
}

export default settings;