import { useParams } from "react-router";

const Number = (props) => {
    const { path, colorA, colorB } = useParams();

    return (
        <div className="container">
            <h1 style={{ backgroundColor: colorA, color: colorB }}>
                The number is: {path}
            </h1>
        </div>
    );
};

export default Number;
