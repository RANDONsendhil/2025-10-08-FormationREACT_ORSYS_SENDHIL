import React, { useState } from "react";
import style from "./MemeForm.module.css";
import Button from "../../ui/Button/Button";
const MemeForm = ({ meme, onMemeChange, images }) => {
    const [current, setCurrent] = useState(meme);

    const onNumberInputChange = (evt) => {
        const newState = { ...current };
        newState[evt.target.name] = parseInt(evt.target.value);
        setCurrent(newState);
        console.log(newState);
    };

    const onStringInputChange = (evt) => {
        const newState = { ...current };
        newState[evt.target.name] = evt.target.value;
        setCurrent(newState);
        console.log(newState);
    };

    const onCheckInputChange = (evt) => {
        const newState = { ...current };
        newState[evt.target.name] = evt.target.checked;
        setCurrent(newState);
        console.log(newState);
    };
    return (
        <div className={style.MemeForm}>
            {/* {JSON.stringify(current)} */}
            <form
                onSubmit={(evt) => {
                    evt.preventDefault();
                    onMemeChange(current);
                }}
            >
                <label htmlFor="titre">
                    <h1>Titre</h1>
                </label>
                <br />
                <input
                    name="titre"
                    id="titre"
                    value={current.titre}
                    onChange={onStringInputChange}
                />
                <hr />
                <label htmlFor="imageId">
                    <h2>Image</h2>
                </label>
                <br />
                <select
                    name="imageId"
                    id="imageId"
                    value={current.imageId}
                    onChange={onNumberInputChange}
                >
                    <option value="-1">No image</option>
                    {images.map((img, i) => (
                        <option key={"option" + i} value={img.id}>
                            {img.name}
                        </option>
                    ))}
                </select>
                <hr />
                <label htmlFor="text">
                    <h2>texte</h2>
                </label>
                <br />
                <input
                    name="text"
                    id="text"
                    type="text"
                    value={current.text}
                    onChange={onStringInputChange}
                />
                <br />
                <label htmlFor="x">
                    <h2 style={{ display: "inline" }}>x :</h2>
                </label>
                <input
                    className={style.smallNumber}
                    name="x"
                    id="x"
                    type="number"
                    value={current.x}
                    onChange={onNumberInputChange}
                />
                <label htmlFor="y">
                    <h2 style={{ display: "inline" }}>y :</h2>
                </label>
                <input
                    className={style.smallNumber}
                    name="y"
                    id="y"
                    type="number"
                    value={current.y}
                    onChange={onNumberInputChange}
                />
                <hr />
                <br />
                <h2>Decorations</h2>
                <label htmlFor="color">
                    <h2 style={{ display: "inline" }}>color :</h2>
                </label>
                <input
                    name="color"
                    id="color"
                    type="color"
                    value={current.color}
                    onChange={onNumberInputChange}
                />
                <br />
                <label htmlFor="fontSize">
                    <h2 style={{ display: "inline" }}>font-size :</h2>
                </label>
                <input
                    className={style.smallNumber}
                    name="fontSize"
                    id="fontSize"
                    type="number"
                    min="0"
                    value={current.fontSize}
                    onChange={onNumberInputChange}
                />
                px
                <br />
                <label htmlFor="fontWeight">
                    <h2 style={{ display: "inline" }}>font-weight :</h2>
                </label>
                <input
                    className={style.smallNumber}
                    name="fontWeight"
                    id="fontWeight"
                    type="number"
                    min="100"
                    step="100"
                    max="900"
                    onChange={onNumberInputChange}
                />
                <br />
                <input
                    name="underline"
                    id="underline"
                    type="checkbox"
                    value={current.underline}
                    onChange={onCheckInputChange}
                />
                &nbsp;
                <label htmlFor="underline">
                    <h2 style={{ display: "inline" }}>underline</h2>
                </label>
                &nbsp;<h2 style={{ display: "inline" }}>/</h2>&nbsp;
                <label htmlFor="italic">
                    <h2 style={{ display: "inline" }}>italic</h2>
                </label>
                &nbsp;
                <input
                    name="italic"
                    id="italic"
                    type="checkbox"
                    checked={current.italic}
                    onChange={onCheckInputChange}
                />
                <hr />
                <br />
                <Button type="reset" bgcolor="tomato">
                    Reset
                </Button>
                <Button type="submit" bgcolor="skyblue">
                    save
                </Button>
            </form>
        </div>
    );
};

export default MemeForm;
