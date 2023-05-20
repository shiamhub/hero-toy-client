import useTitle from "../../hooks/useTitle";
import Banner from "./Banner";
import Category from "./Category";
import Contacts from "./Contacts";
import Payment from "./Payment";
import Review from "./Review";

const Home = () => {
    useTitle("Home");
    return (
        <div>
            <Banner></Banner>
            <div className="w-9/12 mx-auto">

                <Category></Category>
                <Review></Review>
                <Payment></Payment>
                <Contacts></Contacts>
            </div>
        </div>
    );
};

export default Home;