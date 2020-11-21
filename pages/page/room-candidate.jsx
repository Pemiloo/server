import React from 'react';
import Head from 'next/head';
import st from '../../styles/page/room-candidate.module.css';


const roomCandidate = () => {
    return(
        <div className={st.containerFull}>
            <Head>
                <title>Pemilo - Room Candidate</title>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/pemilo.svg" />
            </Head>

            <div className={st.containerFluid}>
                <div className={st.column1}>
                    
                </div>
                <div className={st.column2}>

                </div>
            </div>
        </div>
    );
}

export default roomCandidate;