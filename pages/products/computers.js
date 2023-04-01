import Image from "next/image";

function Computers(){
    return(
        <div>
            <header>On computers page</header>
            <Image src="/red-bull.jpg" layout="responsive" width="2048" height="1152"/>
        </div>
    );
}

export default Computers;