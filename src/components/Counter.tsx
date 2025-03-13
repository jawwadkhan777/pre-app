import { useState } from "react";

const Counter = () => {
    // let counterValue = 0
    const [counterValue, setCounterValue] = useState(0);

    const increment = () => {
        setCounterValue(counterValue + 1);
    }
    const decrement = () => {
        setCounterValue(counterValue - 1);
    }
    const reset = () => {
        setCounterValue(0);
    }

    return <section className="mb-16 flex flex-col">
        <h1 className="text-2xl">Count</h1>
        <p className="text-xl">{counterValue}</p>
        <div className="flex gap-4 justify-center mb-4">
            <button onClick={increment}>+ increment</button>
            <button onClick={decrement}>- decrement</button>
        </div>
        <div className="flex justify-center">
            <button onClick={reset}>reset</button>
        </div>
    </section>
}

export default Counter;