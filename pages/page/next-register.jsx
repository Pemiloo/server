import Head from 'next/head';
import React from 'react';
import style from '../../styles/page/next-register.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const nextRegister = () => {

    // const router = useRouter();

    return(
        <html lang="en"> 

            <Head>
                <title>Pemilo - Register Step 2</title>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/pemilo.svg" />
            </Head>
            

            <div className={style.container}>

                <div className={style.card}>
                    <div className={style.card_body}>
                        
                        <div className={style.card_form}>
                            <form method="post">
                                <div className={style.containerLink}>
                                    <p className={style.title}>Organization Committe</p>
                                    <p className={style.titleDesc}>Fill this form to complete the registration</p>
                                </div>

                                <div className={style.containerForm}>
                                    <label for="organization">Your Organization</label>
                                    <input type="text" name="organization" id="organization" className={style.input} placeholder="Enter name organization" /><p/><br />
                                    <label for="committe">Your Committe</label>
                                    <input type="text" name="committe" id="committe" className={style.input} placeholder="Add your committe" />
                                    
                                    <div className={style.containerIcon}>
                                        <img src="/icon/VectorPlus.svg" height="25px"  />
                                    </div>

                                <div className={style.pictureContainer}>
                                        <label for="picture">Organization Picture</label><br />
                                        <span className={style.pInfo}>Attach your Organization profile picture</span>
                                        <input type="file" name="picture" id="picture" />

                                        <p>
                                            <input type="checkbox" name="check" id="check" required="true" className={style.checkbox} /><span className={style.pInfoCheck}>i am certify that all is true and complete</span>
                                        </p>

                                        <input type="submit" name="done" id="done" className={style.btn} value="Done"/>
                                </div>


                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </html>
    )
}

export default nextRegister;