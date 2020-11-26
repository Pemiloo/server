import React from 'react';
import st from '../../../styles/components/setting/edit.module.css';


const EditProfile = () => {
    return(
        <>
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
        </>
    );
}

export default EditProfile;