import Button from "../ui/Button/Button";
import "./App.css";

const App = () => {
    return (
        <>
            <div>DEMAT Breizh</div>
            {/* <Button2 value="Sendhil2" num={12345} fun={() => {}} />
            <Button2 value="Sendhil2" num={12345} fun={() => {}} />
            <Button2
                value="Sendhil2"
                num={12345}
                fun={() => {}}
                style={{ color: "white" }}
            /> */}

            <Button>
                <div>BUTTON CHILDREN</div>
            </Button>
        </>
    );
};

export default App;
