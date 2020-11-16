import Head from 'next/head';
import React from 'react';
import style from '../../styles/page/login.module.css';

const Login = () => {
    return(
        <div className={style.container}>
            <Head>
                <title>Pemilo - Login Page</title>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/pemilo.svg" />
            </Head>
        

        <div className={style.card}>
            <div className={style.card_body}>
                <div className={style.card_info}>
                    <span className={style.title}>Pemilo</span>
                    <p className={style.desc}><b>Pemilo</b> is <br></br>online voting program based on website platform</p>
                </div>
                <div className={style.card_form}>
                    <form method="post">
                        <p className={style.label}>Your Email</p>
                        <input type="email" name="email" id="email" className={style.input} placeholder="Enter your email" autoComplete="off" required="true" />

                        <p className={style.label}>Your Password</p>
                        <input type="password" name="password" id="password" className={style.input} placeholder="Enter your password" autoComplete="off" required="true" />

                        <p><input type="checkbox" name="check" id="check" className={style.checkbox} required="true" /> <span className={style.t_checkbox}>I am certify that email still active </span> </p>

                        <p><input type="submit" name="register" id="register" value="Register" className={style.button}/></p>
                    </form>
                </div>
            </div>
        </div>
            


        </div>
    )
}

export default Login;