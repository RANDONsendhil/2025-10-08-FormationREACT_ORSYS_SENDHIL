import type React from "react";
import styleComponent from "./Button.module.css";
import { useEffect, useState } from "react";
interface IButtonProps {
    type?: "button" | "reset" | "submit";
    bgColor?: string;
    children: string | React.ReactElement | Array<string | React.ReactElement>;
    style?: object;
    clickAction?: (unArg: string) => void;
}

const Button: React.FC<IButtonProps> = ({
    type = "button",
    bgColor,
    children,
    style,
    clickAction,
}) => {
    const [clicked, setClicked] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setClicked(false);
        }, 300);
    }, [clicked]);
    const buttonOnclick = (
        evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        if (clickAction) {
            setClicked(true);
            clickAction("Par clickAction");
        }
    };
    return (
        <button
            type={type}
            className={`${styleComponent.Button} ${
                clicked ? "" + styleComponent.clicked : ""
            } `}
            style={{ backgroundColor: bgColor, ...style }}
            data-testid="Button"
            onClick={buttonOnclick}
        >
            {children}
        </button>
    );
};

export default Button;
