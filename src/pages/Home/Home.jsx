import { useRef } from 'react';
import bannerImg from '../../assets/images/banner.avif'
import FoodCards from '../FoodCards/FoodCards';

const Home = () => {
    const cardsRef = useRef(null)
    const handleScroll = () => {
        cardsRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div>
            <div
                className="hero h-[800px]"
                style={{
                    backgroundImage: `url(${bannerImg})`,
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to Foodoko</h1>
                        <p className="mb-5">
                            From storage to serving, Foodoko helps you manage food effectively, reduce costs, and ensure nothing goes to waste.
                        </p>
                        <button className="btn btn-primary" onClick={handleScroll}>Get Started</button>

                    </div>
                </div>
            </div>
            <div ref={cardsRef}>
                <FoodCards></FoodCards>
            </div>
        </div>
    );
};

export default Home;