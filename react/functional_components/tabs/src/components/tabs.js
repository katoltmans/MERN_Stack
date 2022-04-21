import React, { useState } from "react";

const Tabs = (props) => {
    const { tabInfo } = props;
    console.log("TAB INFO: ", tabInfo);
    //const { name, info } = tabInfo;
    const [createTab, setCreateTab] = useState("");

    const handleClick = () => {
        console.log("tab clicked");
    };

    return (
        <>
            <div className="tabNames">
                {tabInfo.map((tab) => (
                    <div key={tab.id}>{tab.name}</div>
                ))}
            </div>
            <div className="tabBlurbs">
                {tabInfo.map((tab) => (
                    <div key={tab.id}>{tab.info}</div>
                ))}
            </div>
        </>
    );
};

export default Tabs;
