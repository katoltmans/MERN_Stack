import { useParams } from "react-router";

const Word = (props) => {
    const { path, colorA, colorB } = useParams();

    return (
        <div className="container">
            <h1 style={{ backgroundColor: colorA, color: colorB }}>
                The word is: {path}
            </h1>
        </div>
    );
};

export default Word;
