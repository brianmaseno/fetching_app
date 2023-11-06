import Image from 'next/image';
import Link from "next/link";

export default function(){
    return(
        <div className='mwema'>
            <h1>Rich</h1>
            <p>These are some of the most expensive vehicles</p>


            <Image src={"/ferrari2.jpg"} alt="loading" width={"500"} height={"400"} loading="eager" ></Image>
            <br></br>
            <Link href= "/reality">Reality</Link>
            <br></br>
            <Link href= "/">Back Home</Link>
        </div>
    )
}