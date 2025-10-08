import type React from "react";
import styleComponent from "./Button.module.css";
interface IButtonProps {
    type?: "button" | "reset" | "submit";
    bgColor?: string;
    children: string | React.ReactElement | Array<string | React.ReactElement>;
    style: object;
    clickAction?: (unArg: string) => void;
}

const Button: React.FC<IButtonProps> = ({
    style,
    bgColor,
    children,
    type = "button",
}) => {
    const buttonOnclick = (
        evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        console.log("button clicked", evt);
        if (clickAction) {
            clickAction("Par clickAction");
        }
    };
    return (
        <button
            type={type}
            className={styleComponent.Button}
            style={{ ...style, backgroundColor: bgColor }}
            data-testid="Button"
            onClick={buttonOnclick}
        >
            {children}
        </button>
    );
};

export default Button;
