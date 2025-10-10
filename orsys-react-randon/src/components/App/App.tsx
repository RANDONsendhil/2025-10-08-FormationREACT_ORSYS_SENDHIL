import "./App.css";
import FlexHGrow3 from "../layout/FlexHGrow3/FlexHGrow3";
import FlexVGrow1 from "../layout/FlexVGrow1/FlexVGrow1";
import Header from "../ui/Header/Header.jsx";
import Navbar from "../ui/Navbar/Navbar";
import Footer from "../ui/Footer/Footer";
import { Route, Routes } from "react-router";
import Home from "../../pages/Home";
import Editor from "../../pages/Editor";
import Thumbnail from "../../pages/Thumbnail.js";

const App = () => {
    return (
        <FlexHGrow3>
            <Header />
            <Navbar />
            <FlexVGrow1>
                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="/Editor" Component={Editor} />
                    <Route path="/Editor/:id" Component={Editor} />
                    <Route path="/Thumbnail" Component={Thumbnail} />
                </Routes>
            </FlexVGrow1>
            <Footer />
        </FlexHGrow3>
    );
};

export default App;
