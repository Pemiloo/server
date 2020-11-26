import React from 'react';
import Head from 'next/head';
import st from '../../styles/page/room-candidate.module.css';
import Nav from '../../components/nav';


const roomCandidate = () => {
  return(
    <html lang="en"> 
      <Head>
        <title>Pemilo - Room Candidate</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/pemilo.svg" />
      </Head>

      <Nav></Nav>
      <div className={st.containerFluid}>
                          
        <div className={st.containerForm}>
          
          <div className={st.candidateImg}>
            <img className={st.imgThumb} src="/pemilo.svg" alt="candidate image"/>
            <img className={st.imgCam} src="/icon/VectorCamera.svg" height="25px" />
          </div>
          
          <div className={st.candidateDetail}>
            <input type="text" className={st.input} placeholder="Candidate Name" />
    
            <div className={st.flexForm1}>
              <div className={st.box}>
                <label>Class</label><br />
                <input type="text" name="class" id="class" placeholder="Candidate Class" className={st.input} />
              </div>
              <div className={st.box}>
                <label>Position</label><br />
                <input type="text" name="position" id="position" placeholder="Candidate Position" className={st.input} />
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
            
            <div className={st.addMision}>
              <button className={st.Btn}>add more missions</button>
            </div>

            <div className={st.submitCandidate}>
              <button className={st.Btn}>Submit</button>
            </div>
          </div>

        </div>
      
      </div>
    </html>
  );
}

export default roomCandidate;