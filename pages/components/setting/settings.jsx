import React from 'react';
import st from '../../../styles/components/setting/settings.module.css';

const Settings = ({email}) => {
	return(
		<>
			<div className={st.containerForm}>
				<div className={st.wrap}>

					<div className={st.info}>
						<span className={st.title}>Delete Section</span><br />
						<span className={st.desc}>this action will change your current email to new email and your old email will be <b><u>deleted</u></b> except all your <b>room</b> </span>
					</div>

						{/* <div className={st.form}>
								<label className={st.label}>Old Email</label>
								<input type="text" name="old" id="old" placeholder="Enter your old Email" className={st.input} /><p />
								
								<label className={st.label}>New Email</label>
								<input type="text" name="new" id="new" placeholder="Enter new Email" className={st.input} /><p />

								<label className={st.label}>Confirm new Email</label>
								<input type="text" name="confirm" id="confirm" placeholder="Enter confirm Email" className={st.input} />

								<input type="submit" name="change" id="change" value="Change" className={st.btn} />
						</div> */}

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
		</>
	);
}

export default Settings;