import Image from 'next/image';
import Head from 'next/head';

export default function Reality(){
    return(
        <div className='magari'>
<Head>
    <title>Sports cars</title>
</Head>

            <h1>Sports Cars</h1>
            <p>Ferrari</p>
            <Image src={"/56893.jpg"} alt='car' width={"650"} height={"500"} loading='eager'>
            </Image>
            <br></br>
            <p>Prado</p>
            <Image src={"/images/porsche.jpg"} height={"500"} width={"650"} loading='eager'></Image>
            <p>Subaru</p>
            <Image src={"/images/gari.jpg"} height={"500"} width={"650"} loading='eager'></Image>

            <footer className='praise'>
                <div className='footersection'>
                <p>Made by Brian Maseno</p>
                </div>

                <div className='footerbottom'>
                    <p>&copy; {new Date().getFullYear()} BCreatives.All Rights Reserved</p>

                </div>
               
            </footer>
        </div>
    )
}