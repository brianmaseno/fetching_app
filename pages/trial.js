import Image from "next/image";
import Link from 'next/link';
const index = () =>{
    return(
        <div>
            <h1>Trial 1</h1>
            <Image src={"/porsche.jpg"} alt="loading" width={"400"} height={"400"} loading="eager" padding-top={"10"}></Image>
            
            <br></br>
            <Link href="/rich">Rich</Link>
            <Link href="/reality">Reality</Link>
        </div>        
    );
};
export default index;

// export default function HomePage(){
//     return(
       
//         <Image src ="/porsche.jpg" width={"400"} height={"400"}>Porshe</Image>
//     )
// }