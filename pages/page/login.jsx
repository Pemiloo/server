import Head from 'next/head';
import React from 'react';
import style from '../../styles/page/login.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Login = () => {

    // const router = useRouter();

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
                        <div className={style.containerLink}>
                            <div className={style.btnRegister}>
                                <Link className={style.link} href="/page/register">Register</Link>
                            </div>
                            <div className={style.btnLogin}>
                                <Link className={style.link} href="/page/login">Login</Link>
                            </div>

                        </div>
                        <p className={style.label}>Your Email</p>
                        <input type="email" name="email" id="email" className={style.input} placeholder="Enter your email" autoComplete="off" required="true" />

                        <p className={style.label}>Your Password</p>
                        <input type="password" name="password" id="password" className={style.input} placeholder="Enter your password" autoComplete="off" required="true" />

                        <div className={style.forgot}>
                            <Link className={style.forgot} href="/page/login">Forgot your password?</Link>
                        </div>

                        <p><input type="submit" name="register" id="register" value="Login" className={style.button}/></p>
                    </form>
                </div>
            </div>
        </div>
            


        </div>
    )
}

export default Login;