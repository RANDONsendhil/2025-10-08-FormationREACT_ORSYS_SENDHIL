import React from "react";
import UnconnectedMemeThumbnail from "./MemeThumbnail";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";

const MemeThumbnail: React.FC = () => {
  const memes = useSelector((s: RootState) => s.ressources.memes);
  const images = useSelector((s: RootState) => s.ressources.images);
  return <UnconnectedMemeThumbnail memes={memes} images={images} />;
};
export default MemeThumbnail;
