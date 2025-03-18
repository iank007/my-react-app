import { useEffect, useState } from "react";

function Welcome() {
    const [count, setCount] = useState(0)

    console.log(count)

    useEffect(() => {
        console.log("Component mounted!");
    }, []); // runs once when mounted

    return (
        <>
            <h3>useState and useEffect</h3>
            <button onClick={() => setCount(count + 1)}>Click me {count}</button>
        </>
    )
}

export default Welcome;