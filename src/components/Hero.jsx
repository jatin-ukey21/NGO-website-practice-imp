import React from 'react';
import { ArrowRight, Users, Heart, Zap } from 'lucide-react';


const Hero = ({ onNavigate }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="People helping community"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 via-emerald-800/70 to-blue-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Empowering Communities,
            <span className="text-emerald-300 block">Building Hope</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join us in creating lasting change through education, healthcare, and community development. 
            Together, we can build a brighter future for those who need it most.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => onNavigate('volunteer')}
              className="group bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-700 transition-all duration-300 hover:scale-105 shadow-xl flex items-center space-x-2"
            >
              <span>Join Our Mission</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-emerald-500 p-3 rounded-full">
                  <Users className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">10,000+</h3>
              <p className="text-white/80">Lives Impacted</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-orange-500 p-3 rounded-full">
                  <Heart className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">50+</h3>
              <p className="text-white/80">Active Projects</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-blue-500 p-3 rounded-full">
                  <Zap className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">25</h3>
              <p className="text-white/80">Communities Served</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;