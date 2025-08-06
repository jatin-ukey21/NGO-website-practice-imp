import React from 'react';
import { Target, Eye, Award, Globe, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Integrity',
      description: 'We operate with transparency and accountability in all our initiatives.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We believe in the power of collective action and community-driven solutions.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace creative approaches to solve complex social challenges.',
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'We focus on long-term impact and environmentally conscious practices.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-emerald-600">HopeForward</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded on the belief that every person deserves access to opportunities that help them thrive, 
            HopeForward has been transforming communities since 2015.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                What started as a small community initiative has grown into a movement that spans across 
                25 communities, touching the lives of over 10,000 individuals through education, healthcare, 
                and sustainable development programs.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We work directly with local leaders and communities to identify needs and develop 
                solutions that are both impactful and sustainable, ensuring lasting positive change.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Community work"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-emerald-600 rounded-2xl p-8 text-white shadow-xl">
            <div className="flex items-center mb-4">
              <div className="bg-white/20 p-3 rounded-full mr-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="text-emerald-50 leading-relaxed text-lg">
              To empower underserved communities through sustainable programs in education, 
              healthcare, and economic development, creating pathways to self-sufficiency and prosperity.
            </p>
          </div>

          <div className="bg-blue-600 rounded-2xl p-8 text-white shadow-xl">
            <div className="flex items-center mb-4">
              <div className="bg-white/20 p-3 rounded-full mr-4">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="text-blue-50 leading-relaxed text-lg">
              A world where every community has the resources, knowledge, and opportunities 
              needed to build a thriving, sustainable future for generations to come.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-gradient-to-br from-emerald-500 to-blue-600 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3 text-center">{value.title}</h4>
                <p className="text-gray-600 text-center leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Numbers */}
        <div className="mt-20 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold text-center mb-12">Our Impact in Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-emerald-100">Lives Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">25</div>
              <div className="text-emerald-100">Communities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-emerald-100">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-emerald-100">Volunteers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;