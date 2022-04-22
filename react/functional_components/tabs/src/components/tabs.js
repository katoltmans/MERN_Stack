import React, { useState } from "react";

const Tabs = (props) => {
    const { tabInfo } = props;
    console.log("TAB INFO: ", tabInfo);
    const [tabId, setTabId] = useState("");

    const handleClick = (e, tabId) => {
        console.log("tab clicked");
        setTabId(tabId);
        console.log("TAB ID NOW: ", tabId);
    };

    return (
        <>
            <div className="tabNames">
                {tabInfo.map((tab) => (
                    <div key={tab.id} onClick={(e) => handleClick(e, tab.id)}>
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabBlurbs" key={tabId}>
                {tabInfo.info}
                {tabInfo.map((tab) => (
                    <div
                        key={tab.id}
                        style={{
                            visibility: tab.id === tabId ? "visible" : "hidden",
                            zIndex: tab.id,
                            position: "absolute",
                        }}
                    >
                        {tab.info}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Tabs;
