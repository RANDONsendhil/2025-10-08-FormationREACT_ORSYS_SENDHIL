import "./App.css";
import "./App.css";
import FlexHGrow3 from "../layout/FlexHGrow3/FlexHGrow3";
import FlexVGrow1 from "../layout/FlexVGrow1/FlexVGrow1";
import Header from "../ui/Header/Header.jsx";
import Navbar from "../ui/Navbar/Navbar";
import MemeForm from "../functionnal/MemeForm/MemeForm.stored";
import MemeSvgViewer from "../ui/MemeSVGViewer/MemeSVGViewer.stored";

import Footer from "../ui/Footer/Footer";
const App = () => {
    return (
        <FlexHGrow3>
            <Header />
            <Navbar />
            <FlexVGrow1>
                <MemeSvgViewer basePath="" />
                <MemeForm />
            </FlexVGrow1>
            <Footer />
        </FlexHGrow3>
    );
};

export default App;
