import Link from 'next/link';
import Image from 'next/image';

import React from 'react';


export default function Homepage(){
    return(
        <div className=''>
        <h1>Welcome to my nice application</h1>,

        

        <p>Do you like cars?Here they are</p>
        <p>visit this site</p>
        {/* <Link href={"/trial"}>Cars</Link> */}
        <Image src="/56893.jpg" layout='fill' alt='Porsche' loading='eager' priority ="true" objectFit='contain'></Image>
        <br></br>


        <Link href="/trial">About us</Link>
        <br></br>
        <Link href="/rich">Rich</Link>
        </div>
        
    )
}