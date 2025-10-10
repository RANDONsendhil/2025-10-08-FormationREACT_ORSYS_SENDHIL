import React from "react";
import style from "./MemeThumbnail.module.css";
import { MemeSVGViewer, type ImageInterface, type MemeInterface } from "orsys-tjs-meme";
import { Link } from "react-router";
interface IMemeThumbnailProps {
  memes: Array<MemeInterface>;
  images: Array<ImageInterface>;
}
const MemeThumbnail: React.FC<IMemeThumbnailProps> = ({ memes, images }) => {
  return (
    <div className={style.MemeThumbnail} data-testid="MemeThumbnail">
      {memes.map((m) => (
        <div key={"m" + m.id}>
          <Link to={'/Editor/'+m.id}>
            <MemeSVGViewer basePath="" meme={m} image={images.find(i=>i.id===m.imageId)}/>
              <br/>
              <div>{m.titre}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default MemeThumbnail;
