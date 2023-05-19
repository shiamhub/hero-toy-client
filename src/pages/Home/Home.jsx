import useTitle from "../../hooks/useTitle";
import Category from "./Category";

const Home = () => {
    useTitle("Home");
    return (
        <div className="w-9/12 mx-auto">
            <Category></Category>
        </div>
    );
};

export default Home;