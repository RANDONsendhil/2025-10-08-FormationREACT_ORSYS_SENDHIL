import React from "react";
import styles from "./FlexHGrow3.module.css";

interface FlexHGrow3Props {
    children: string | React.ReactElement | Array<React.ReactElement | string>;
}

const FlexHGrow3: React.FC<FlexHGrow3Props> = ({ children }) => (
    <div className={styles.FlexHGrow3} data-testid="FlexHGrow3">
        {children}
    </div>
);

export default FlexHGrow3;
