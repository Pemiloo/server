import React from 'react';
import Head from 'next/head';
import Nav from '../../components/nav';
import st from '../../../styles/page/admin/list-room.module.css';

const listRoom = () => {
    return(
        <div>
            <Head>
                <title>Pemilo - List Room</title>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/pemilo.svg" />
            </Head>

            <div className={st.navbar}>
                <Nav />
            </div>

            <div className={st.container}>
               <p className={st.title}>Room List</p>

               <div className={st.card}>
                   <div className={st.card_body}>
                       <div className={st.titleBox}>
                         <div className={st.titleRoom}>
                            Pemilo OSIS 2020 test pemilo judul panjang
                         </div>
                         <span><img src="/menu-list.svg" className={st.imgRoom}/></span>
                       </div>
                       <div className={st.candidateBox}>
                          <div className={st.candidateTitle}>
                            <p>Candidate</p>
                            <div className={st.listCandidate}>
                                <li>Zamzam Saputra</li>
                                <li>Amardito Khairi</li>
                                <li>Muhammad Indrawan</li>
                            </div>
                          </div>
                          <div className={st.candidateInfo}>
                              <p className={st.candidateInfoTitle}>Link Room</p>
                              <input type="text" name="link" id="link" className={st.input}></input>
                              <span className={st.copy}>Copy</span>
                              <p className={st.statusEXP}>Expired</p>
                              <span className={st.more}>More</span>
                          </div>
                       </div>
                   </div>
                   <div className={st.card_body}>
                       <div className={st.titleBox}>
                         <div className={st.titleRoom}>
                            Pemilo OSIS 2020 test pemilo judul panjang
                         </div>
                         <span><img src="/menu-list.svg" className={st.imgRoom}/></span>
                       </div>
                       <div className={st.candidateBox}>
                          <div className={st.candidateTitle}>
                            <p>Candidate</p>
                            <div className={st.listCandidate}>
                                <li>Zamzam Saputra</li>
                                <li>Amardito Khairi</li>
                                <li>Muhammad Indrawan</li>
                            </div>
                          </div>
                          <div className={st.candidateInfo}>
                              <p className={st.candidateInfoTitle}>Link Room</p>
                              <input type="text" name="link" id="link" className={st.input}></input>
                              <span className={st.copy}>Copy</span>
                              <p className={st.statusActive}>Active</p>
                              <span className={st.more}>More</span>
                          </div>
                       </div>
                   </div>
                   <div className={st.card_body}>
                       <div className={st.titleBox}>
                         <div className={st.titleRoom}>
                            Pemilo OSIS 2020
                         </div>
                         <span><img src="/menu-list.svg" className={st.imgRoom}/></span>
                       </div>
                       <div className={st.candidateBox}>
                          <div className={st.candidateTitle}>
                            <p>Candidate</p>
                            
                          </div>
                          <div className={st.candidateInfo}>
                              <p className={st.candidateInfoTitle}>Link Room</p>
                              <input type="text" name="link" id="link" className={st.input}></input>
                              <span className={st.copy}>Copy</span>
                              <p className={st.statusDraft}>Draft</p>
                              <span className={st.more}>More</span>
                          </div>
                       </div>
                   </div>
                   
                   <div className={st.card_body}>
                        <div className={st.cardNew}>
                            <span><img src="/icon/plus.svg" height="80px" /></span>
                        </div>
                   </div>

               </div>
            </div>
        </div>
        
    )
}

export default listRoom;