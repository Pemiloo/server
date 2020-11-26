import React from 'react';
import Link from 'next/link';
import st from '../../../styles/components/setting/change.module.css';

const ChangePass = () => {
    return(
        <>
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
        </>
    );
}

export default ChangePass;