import React from 'react';
import Head from 'next/head';
import st from '../../styles/page/profile.module.css';
import Nav from '../components/nav';
import Settings from '../components/setting/settings'
import EditProfile from '../components/setting/edit'
import ChangePass from "../components/setting/change";

const index = () => {
    return(
        <html lang="en">
            <Head>
                <title>Profile - settings</title>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/pemilo.svg" />
            </Head>
            <Nav></Nav>
            <div className={st.containerFluid}>
                <div className={st.column1}>
                    <div className={st.bg}>
                        <p className={st.txtCol}>Edit Profile</p>
                        <p className={st.txtCol}>Change Password</p>
                        <p className={st.txtCol}>Settings</p>
                    </div>
                </div>
                <div className={st.column2}>
                    {/* <Settings></Settings> */}
                    {/* <EditProfile></EditProfile> */}
                    <ChangePass></ChangePass>
                </div>
            </div>
        
        </html>
    );
}


export default index;