import React, { useState } from "react";

const Tabs = (props) => {
    const { tabInfo } = props;
    console.log("TAB INFO: ", tabInfo);
    const { name, info } = tabInfo;
    const [createTab, setCreateTab] = useState(name);

    const handleClick = () => {
        console.log("tab clicked");
    };

    return (
        <>
            <div className="tabNames">{name}</div>
            <div className="tabBlurbs">{info}</div>
        </>
    );
};

export default Tabs;
