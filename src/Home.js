import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            Home

            <div>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    );
}

export default Home;