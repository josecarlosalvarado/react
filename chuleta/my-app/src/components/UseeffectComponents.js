import { useEffect, useState } from "react";


export default function UseeffectComponents() {

    const [count, setCount] = useState(0);

    console.log("me ejecuto cada vez que cambia el compoenente");

    useEffect(() => {
        console.log("Acabo de montarme");

        return () => console.log("me desmonto");
    }, [])
    
    useEffect(() => {
      document.title = count;
    }, [count])

    return (
        <div>
            <span>{count}</span>
            <br/>
            <button onClick={() => setCount(count + 1)}>Click</button>
    
        </div>
    )
}
