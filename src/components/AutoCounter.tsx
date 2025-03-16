import { useEffect, useState } from "react";

const AutoCounter = () => {
    const [counterValue, setCounterValue] = useState(0);

    const startCounter = () => {
        const timer =  setInterval(() => {
            setCounterValue(countVal => { return countVal+1}); 
            // console.log("counter updated");
        }, 1000);
        return timer;
    }
    const stopCounter = () => {
        setCounterValue(counterValue - 1);
    }
    const resetCounter = () => {
        setCounterValue(0);
    }

    console.log("This runs everytime when component update");
    

    useEffect(() => {
        // mount
        const timer = startCounter();

        return () => {
            // unmount
            clearInterval(timer)};
    }, []);

    return <section className="mb-16 flex flex-col">
        <h1 className="text-2xl">Auto Count</h1>
        <p className="text-xl">{counterValue}</p>
        <div className="flex gap-4 justify-center mb-4">
            <button onClick={startCounter}>start counter</button>
            <button onClick={stopCounter}>stop counter</button>
        </div>
        <div className="flex justify-center">
            <button onClick={resetCounter}>reset counter</button>
        </div>
    </section>
}

export default AutoCounter;