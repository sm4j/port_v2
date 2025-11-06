'use client';

import React, { useState } from 'react';
import ProjectCard from '../../components/ProjectCard';
import { title } from 'process';

const projects = [
    {
        title: 'Basic FPGA Comparator',
        description: 'A simple FPGA-based comparator that compares two 2-bit binary numbers and indicates which one is larger using LED indicators. Implemented using VHDL on a Xilinx FPGA board.',
        link: 'https://www.youtube.com/watch?v=uDv0A9BFhAY',
        technologies: ['VHDL', 'Xilinx', 'FPGA', 'Vivado'],
        category: 'Hardware'
    },
    {
        title: 'FPGA Register Simulator',
        description: 'A simple FPGA-based register simulator that demonstrates basic register operations using VHDL on a Xilinx FPGA board.',
        link: 'https://youtu.be/HJ-9hry7vhg',
        technologies: ['VHDL', 'Xilinx', 'FPGA', 'Vivado'],
        category: 'Hardware'
    },
    {
        title: '4-Function FPGA ALU',
        description: 'An intermediate FPGA-based 4-function ALU that performs addition, subtraction, multiplication, and shifting on two 4-bit binary numbers. Implemented using VHDL on a Xilinx FPGA board.',
        link: 'https://youtu.be/HLBvO35nOAQ',
        technologies: ['VHDL', 'Xilinx', 'FPGA', 'Vivado'],
        category: 'Hardware'
    },
    {
        title: 'FPGA Carry-Save Multiplier',
        description: 'An intermediate FPGA-based carry-save multiplier that performs multiplication on two 8-bit binary numbers. Implemented using full adders in VHDL on a Xilinx FPGA board.',
        link: 'https://youtu.be/6qfKWuf8bI0',
        technologies: ['VHDL', 'Xilinx', 'FPGA', 'Vivado'],
        category: 'Hardware'
    },
    {
        title: 'FPGA State Machine "Vending Machine"',
        description: 'An intermediate FPGA-based state machine that simulates a vending machine. Implemented using VHDL on a Xilinx FPGA board.',
        link: 'https://www.youtube.com/watch?v=cbHEAksGDBs',
        technologies: ['VHDL', 'Xilinx', 'FPGA', 'Vivado'],
        category: 'Hardware'
    },
    {
        title: 'Basic Computer Architecture Implementations',
        description: 'A Github repository containing basic implementations of computer architecture concepts including multiplexers, adders, ALUs, registers, and memory units using VHDL for FPGA deployment.',
        link: 'https://github.com/sm4j/comp_arch',
        technologies: ['VHDL', 'Altera Quartus', 'FPGA', 'emu8086'],
        category: 'Hardware'
    },
    {
        title: 'Dotme Portfolio Website',
        description: 'A personal portfolio website built with Next.js and Tailwind CSS to showcase projects, skills, and experience in computer science and software development.',
        link: 'https://github.com/sm4j/dotme/',
        technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'],
        category: 'Web'
    },
    {
        title: 'FlightPath',
        description: 'An FAU career networking platform connecting students, faculty, and employers. Built with a Next.js frontend and AWS cloud architecture.',
        link: 'https://flightpath.network',
        technologies: ['React', 'Next.js', 'AWS', 'PostgresSQL'],
        category: 'Web'
    },
    {
        title: 'Vanity Advocacy Website',
        description: 'A responsive website for a vanity advocacy group, built using vanilla HTML, CSS, and JavaScript to promote awareness and engagement.',
        link: 'https://youtu.be/BjvP5jgVGP4',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        category: 'Web'
    },
    {
        title: 'Sm4j.me Personal Website',
        description: 'Low and behold, the site in front of you. Built to showcase excellence.',
        link: 'https://sm4j.me',
        technologies: ['Next.js', 'React', 'TailwindCSS'],
        category: 'Web'
    },
    {
        title: 'Threshold-Based Binary Classification and Accuracy Analysis',
        description: 'A Python implementation of a threshold-based binary classification algorithm. The project includes accuracy analysis and visualization using Matplotlib.',
        link: 'https://colab.research.google.com/drive/1S8hZ7jau7lmfY3-J_7CiMCz0o0k44LSq?authuser=1',
        technologies: ['Python', 'NumPy', 'Matplotlib'],
        category: 'AI'
    },
    {
        title: 'MNIST Digit Classification Using Threshold-Based Feature Extraction and Accuracy Evaluation',
        description: 'A Python project that classifies handwritten digits from the MNIST dataset using threshold-based feature extraction. The project evaluates classification accuracy and visualizes results with Matplotlib.',
        link: 'https://colab.research.google.com/drive/1JkAJQ6KK5lVqGtqMdg9mkJ31ewmwdqTW?authuser=1#scrollTo=igjfq9Za8u-Y',
        technologies: ['Python', 'NumPy', 'Matplotlib', 'MNIST'],
        category: 'AI'
    },
    {
        title: 'Single-Neuron Gradient Descent Training and Learning Rate Analysis',
        description: 'A Python implementation of a single-neuron model trained using gradient descent. The project analyzes the impact of different learning rates on training performance and visualizes results with Matplotlib.',
        link: 'https://colab.research.google.com/drive/13uZ0APsEZZgUKVn6YvBTEtiUAqQghQ4G?authuser=1#scrollTo=8uOFa2Sjd0r6',
        technologies: ['Python', 'NumPy', 'Matplotlib'],
        category: 'AI'
    },
    {
        title: 'CIFAR-10 CNN Model Optimization with Data Augmentation and Batch Normalization',
        description: 'A Python project that builds and optimizes a Convolutional Neural Network (CNN) model for the CIFAR-10 dataset. The project incorporates data augmentation and batch normalization techniques to improve model performance, with results visualized using Matplotlib.',
        link: 'https://colab.research.google.com/drive/1SpVX4bQO35C0xNbkWMojxNEoweIZPB_y?authuser=1#scrollTo=mg0JZmKmP6RC',
        technologies: ['Python', 'TensorFlow', 'Keras', 'Matplotlib', 'CIFAR-10'],
        category: 'AI'
    }
];

const ProjectsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const categories = ['All', 'AI', 'Hardware', 'Security', 'Web'];

    const filteredProjects = selectedCategory === 'All' 
        ? projects 
        : projects.filter(project => project.category === selectedCategory);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="max-w-7xl mx-auto px-4 py-20">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                        My <span className="text-gradient">Projects</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        A showcase of innovative projects spanning AI, cybersecurity, and web development
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto"></div>
                </div>

                {/* Filter Buttons */}
                <div className="flex justify-center mb-12">
                    <div className="bg-white rounded-full p-1 shadow-lg">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                    selectedCategory === category
                                        ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg'
                                        : 'text-gray-600 hover:text-green-600'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className="opacity-0 animate-fade-in"
                            style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
                        >
                            <ProjectCard 
                                title={project.title}
                                description={project.description}
                                link={project.link}
                                technologies={project.technologies}
                                category={project.category}
                            />
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Project Statistics</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
                            <div className="text-gray-600">Total Projects</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600 mb-2">5</div>
                            <div className="text-gray-600">AI Projects</div>
                        </div>
                         <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600 mb-2">5</div>
                            <div className="text-gray-600">Hardware Projects</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-emerald-600 mb-2">4</div>
                            <div className="text-gray-600">Security Projects</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-orange-600 mb-2">6</div>
                            <div className="text-gray-600">Web Projects</div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Interested in Collaboration?</h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Let's work together on innovative projects that make a difference.
                    </p>
                    <a 
                        href="/contact"
                        className="btn-primary inline-block"
                    >
                        Get In Touch
                    </a>
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in {
                    animation: fade-in 0.6s ease-out;
                }
            `}</style>
        </div>
    );
};

export default ProjectsPage;