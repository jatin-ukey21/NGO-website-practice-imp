import React from 'react';

const Home = () => (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50 flex-col">
        <div className="w-full bg-gradient-to-r from-green-400 to-blue-500 py-10 mb-8 flex flex-col items-center">
            <h1 className="text-5xl font-extrabold text-white mb-4">Empowering Communities, Changing Lives</h1>
            <p className="text-xl text-white max-w-2xl text-center">
                Join us in our mission to create sustainable change and uplift those in need. Together, we can make a difference!
            </p>
            <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                alt="Community"
                className="mt-6 rounded-lg shadow-lg w-2/3 max-w-xl"
            />
        </div>
        <h2 className="text-3xl font-bold">Welcome to the Home Section</h2>
        <p className="mt-4 text-lg">This is where we introduce our NGO and its mission.</p>
        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Learn More</button>
    </section>
);

export default Home;