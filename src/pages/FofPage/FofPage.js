import React from 'react';
import { Link } from 'react-router-dom';

const FofPage = () => {
    return (
        <div className="card w-120 bg-base-100 shadow-xl image-full">
            <figure><img src="https://ak.picdn.net/shutterstock/videos/16235407/thumb/1.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <div className="card-actions justify-end">
                    <Link to='/'><button className="btn btn-primary">Go to Home Page</button></Link>
                </div>
            </div>
        </div>

    );
};

export default FofPage;