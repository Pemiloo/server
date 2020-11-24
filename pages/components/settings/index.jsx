import React from 'react';
import Head from 'next/head';
import st from '../../../styles/components/settings/index.module.css';
import Nav from '../../../pages/components/nav';

const index = () => {
    return(
        <div className={st.containerFull}>
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
                    {/* Null */}
                </div>
            </div>
        </div>
    );
}


export default index;