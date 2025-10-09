import { useEffect, useState } from "react";
import Button from "../ui/Button/Button";
import "./App.css";

const App = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        setCounter(0);
        console.log(`mount ->`, counter);
    }, []);

    useEffect(() => {
        return () => {
            console.log(
                `Counter UseEffect ---> without <--- mount and unmount => `,
                counter
            );
        };
    }, [counter]);

    useEffect(() => {
        console.log(
            `all refresh UseEffect 'with' mount and unmount => `,
            counter
        );
    });
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <div> valeur du count:{counter}</div>
                <hr />
                <Button
                    bgColor="tomato"
                    clickAction={() => {
                        setCounter(counter - 1);

                        console.log(`Counter`, counter);
                    }}
                >
                    -1
                </Button>
                <Button
                    bgColor="skyblue"
                    clickAction={() => {
                        setCounter(counter + 1);
                        console.log(`Counter`, counter);
                    }}
                >
                    +1
                </Button>
            </div>
        </>
    );
};

export default App;
