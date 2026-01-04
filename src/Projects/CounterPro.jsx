import { useState } from "react";

export default function CounterPro(){
    const [Count,setCount]=useState(0);
    const handleInc=()=>{setCount(Count+1)};
    const handleRes=()=>{setCount(0)};
    const handleDec=()=>{setCount(d=>d>0 ? d-1:d)};
    return(
        <>
        <div className="bg-black text-white py-2 rounded">
            <h1>The counter is : {Count}</h1>
            <div className="flex items-center justify-center gap-2">
            <input type="button" value="increment" onClick={handleInc} className="bg-green-500 px-1 rounded-sm hover:bg-green-400 hover:scale-110 transition duration-300 outline-none border-none"/>
            <input type="button" value="reset" onClick={handleRes} className="bg-blue-500 px-1 rounded-sm hover:bg-blue-400 hover:scale-110 transition duration-300 outline-none border-none"/>
            <input type="button" value="decrement" onClick={handleDec} className="bg-red-500 px-1 rounded-sm hover:bg-red-400 hover:scale-110 transition duration-300 outline-none border-none"/>
            </div>
        </div>
        </>
    );
}