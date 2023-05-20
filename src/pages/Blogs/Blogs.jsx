import useTitle from "../../hooks/useTitle";

const Blogs = () => {
    useTitle("Blogs");
    return (
        <div className="w-10/12 lg:w-9/12 mx-auto my-12">
            <h1 className="text-xl font-medium mt-12">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
            <p className="mt-2"><span className="font-medium text-red-400">Answer:</span> Access token and refresh token are tokens that are used to grant access to the user information. They are used to authenticate the user to the server.</p>
            <li className="ml-10 lg:ml-24">An access token is a credential that is used to authenticate and authorize a user.</li>
            <li className="ml-10 lg:ml-24">A refresh token is a long-lived credential that is also issued by the authentication server along with the access token.</li>
            <p className="my-4">When a client application makes a request to a server with an expired access token, it can send the refresh token to the authentication server to obtain a new access token.</p>
            <p>Storing tokens on the client-side:</p>
            <li className="ml-10 lg:ml-24">Browser Cookies: Stored on the client-side Browser Cookies is best.</li>
            <li className="ml-10 lg:ml-24">Local Storage: Stored on the client-side Local Storage is no recommended.</li>

            <h1 className="text-xl font-medium mt-12">2. Compare SQL and NoSQL databases?</h1>
            <p className="mt-2"><span className="font-medium text-red-400">Answer:</span> Databases are used to store data.</p>
            <li className="ml-10 lg:ml-24">SQL databases are relational databases that are used to store data.</li>
            <li className="ml-10 lg:ml-24">NoSQL databases are non-relational databases that are used to store data.</li>

            <h1 className="text-xl font-medium mt-12">3. What is express js? What is Nest JS?</h1>
            <p className="mt-2"><span className="font-medium text-red-400">Answer:</span> Express.js and Nest.js are both web application frameworks for Node.js</p>
            <li className="ml-10 lg:ml-24">Express js is a server-side framework that is used to build web applications.</li>
            <li className="ml-10 lg:ml-24">Nest js is a server-side and client-side framework that is used to build web applications.</li>
            <h1 className="text-xl font-medium mt-12">What is MongoDB aggregate and how does it work?</h1>
            <p className="mt-2"><span className="font-medium text-red-400">Answer:</span> MongoDB aggregate operation is used to perform advanced data processing and analysis on collections of documents.</p>
            <p>It Work in perform complex queries, transformations, aggregations, and computations on MongoDB.</p>
        </div>
    );
};

export default Blogs;