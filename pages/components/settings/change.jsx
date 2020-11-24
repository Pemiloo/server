import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import st from '../../../styles/components/settings/change.module.css';
import Nav from '../../../pages/components/nav';

const change = () => {
    return(
        <div className={st.containerFull}>
            <Nav></Nav>
            <Head>
                <title>Pemilo - Change Password</title>
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
                            <label className={st.label}>Old Password</label>
                            <input type="text" name="old" id="old" placeholder="Enter your old password" className={st.input} /><p />
                            
                            <label className={st.label}>New Password</label>
                            <input type="text" name="new" id="new" placeholder="Enter new password" className={st.input} /><p />

                            <label className={st.label}>Confirm Password</label>
                            <input type="text" name="confirm" id="confirm" placeholder="Enter confirm password" className={st.input} />

                            <Link href="#">
                                <p className={st.forgot}>Forgot your password</p>
                            </Link>                    

                            <input type="submit" name="save" id="save" value="Save" className={st.btn} />
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    );
}

export default change;