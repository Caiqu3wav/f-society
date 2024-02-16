import Image from "next/image"
import flogo from "../../../public/assets/img/mrrobotlogo.png"

export default function Header(){
 return(
    <header className="h-[130px] flex w-full bg-blue-950 items-center justify-center">
        <Image src={flogo} className="w-[170px] self-center"/>
    </header>
 )
}