import React from "react";
import { MemeSVGViewer as Msvg } from "orsys-tjs-meme";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
interface IMemeSVGViewerProps {
    basePath?: "/" | "";
}
const MemeSvgViewer: React.FC<IMemeSVGViewerProps> = (props) => {
    const current = useSelector((storeState: RootState) => {
        return storeState.current.meme;
    });
    const images = useSelector((storeState: RootState) => {
        return storeState.ressources.images;
    });

    return (
        <Msvg
            {...props}
            meme={current}
            image={images.find((i) => i.id === current.imageId)}
        />
    );
};
export default MemeSvgViewer;
