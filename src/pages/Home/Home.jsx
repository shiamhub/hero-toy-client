import useTitle from "../../hooks/useTitle";
import Banner from "./Banner";
import Category from "./Category";

const Home = () => {
    useTitle("Home");
    return (
        <div>
            <Banner></Banner>
            <div className="w-9/12 mx-auto">

                <Category></Category>
            </div>
        </div>
    );
};

export default Home;