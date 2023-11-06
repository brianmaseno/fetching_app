import React from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router';

export default function getRoute(){
    const router = useRouter()
    return(
        <Head>
            <title>Kisumu dala</title>
         </Head>,
        <div>
           
            
            <h1>GGeeksfor geeks</h1>
            <h2>pathname :-{router.asPath}</h2>
        </div>
    )
}