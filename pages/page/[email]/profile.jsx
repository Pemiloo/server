import React, { useState } from 'react';
import Head from 'next/head';
import st from '../../../styles/page/profile.module.css';
import Nav from '../../components/nav';
import Settings from '../../components/setting/settings'
import EditProfile from '../../components/setting/edit'
import ChangePass from "../../components/setting/change";

export async function getServerSideProps(context){

  const { email } = context.params;

  return{
    props:{
      parMail : email
    }
  }
}

const index = ({parMail}) => {

  const [index, setIndex] = useState(0);

  const atTab = (id = 0) => {
    setIndex(id);
  }

  const chooseTab = () => {
    if(index === 0){
      return <EditProfile email={parMail} ></EditProfile>
    }
    else if(index === 1){
      return <ChangePass email={parMail} ></ChangePass>
    }
    else if(index === 2){
      return <Settings email={parMail} ></Settings>
    }
  }

  return(
    <>      
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
            <p onClick={()=>{atTab(0)}} className={st.txtCol}>Edit Profile</p>
            <p onClick={()=>{atTab(1)}} className={st.txtCol}>Change Password</p>
            <p onClick={()=>{atTab(2)}} className={st.txtCol}>Delete Section</p>
          </div>
        </div>
  
        <div className={st.column2}>
          {chooseTab()}
        </div>

      </div>        
    </>
  );
}


export default index;