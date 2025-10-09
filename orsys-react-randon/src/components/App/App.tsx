import "./App.css";
import "./App.css";
import FlexHGrow3 from "../layout/FlexHGrow3/FlexHGrow3";
import FlexVGrow1 from "../layout/FlexVGrow1/FlexVGrow1";
import Header from "../ui/Header/Header.jsx";
import Navbar from "../ui/Navbar/Navbar";
import MemeForm from "../functionnal/MemeForm/MemeForm";
import {
    emptyMeme,
    MemeSVGViewer,
    type ImageInterface,
    type MemeInterface,
} from "orsys-tjs-meme";
import Footer from "../ui/Footer/Footer";
import { useEffect, useState } from "react";
import { REST_ADR, REST_RESOURCES } from "../../config/constantes.js";
const App = () => {
    const [currentName, setCurrentName] = useState<MemeInterface>(emptyMeme);
    const [images, setImages] = useState<Array<ImageInterface>>([]);
    useEffect(() => {
        fetch(`${REST_ADR}${REST_RESOURCES.images}`)
            .then((r) => r.json())
            .then((imgs) => setImages(imgs));
    }, []);
    return (
        <FlexHGrow3>
            <Header />
            <Navbar />
            <FlexVGrow1>
                <MemeSVGViewer
                    basePath=""
                    image={images.find((img) => img.id == currentName.imageId)}
                    meme={currentName}
                />
                <MemeForm
                    meme={currentName}
                    images={images}
                    onMemeChange={(newMeme: MemeInterface) => {
                        setCurrentName(newMeme);
                    }}
                />
            </FlexVGrow1>
            <Footer />
        </FlexHGrow3>
    );
};

export default App;
