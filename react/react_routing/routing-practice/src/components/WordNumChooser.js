import { useParams } from "react-router";
import Number from "./Number.js";
import Word from "./Word.js";

const WordNumChooser = (props) => {
    const { path, colorA, colorB } = useParams();
    console.log("WHAT ARE PARAMS", path, colorA, colorB);

    return (
        <>
            {/* path is the word or number passed in from the URL -
        once determined if isNAN, returns component to use and repasses props 
        {...props} ensures any added attributes will be passed as well */}
            {isNaN(path) ? <Word {...props} /> : <Number {...props} />}
        </>
    );
};

export default WordNumChooser;
