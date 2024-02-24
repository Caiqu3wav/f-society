import "./Hero.css";
import Image from "next/image";
import EpsContainer from "../epscontainer/EpsContainer.tsx";
import mrTeaser from "../../../../public/assets/img/mrteaser.webp";

export default function Hero(){
    return(
        <main className=" overflow-x-hidden">
        <div className="hero-container flex flex-col h-[500px] w-full">
            <div className="hero-content-1 flex ml-[100px] mt-4 w-fit h-fit gap-5 pb-2 pt-2">
            <Image src={mrTeaser} className="rounded-lg ml-2 w-[300px] h-[400px]"/>
            <p className="w-[300px] text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Doloremque veritatis enim, in voluptatibus velit ex? Libero, deserunt,</p>
            </div>
        </div>
        <div className="flex flex-col bg-slate-600">
        <div className="flex w-[75%] self-center mt-4 items-center justify-center">
                <h1 className=" text-pink-700 ml-3 font-bold text-2xl">Assista todas as temporadas</h1>
            </div>
            <div className=" bg-slate-800 flex flex-col items-center">
            <EpsContainer/>
            </div>
            </div>
        </main>
    );
}