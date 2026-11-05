
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import {
    Folder,
    ArrowUpRight,
    FileText,
    Github,
    Mail,
    Terminal,
    Code2,
    ExternalLink,
    Linkedin,
    Download,
    Eye
} from 'lucide-react';

import './index.css';


const projects = [
    {
        //---------------------------------------------------------------------------------------Software Development---------------------------------------------------------------------------------------
        name: 'Software Development',
        tag: 'Docker · Git · Jira',
        description: 'Software engineering projects and developer tooling.',
        stack: ['Docker', 'Git', 'Jira'],
        link: '',
        subprojects: [
            {
                title: 'Roguelike Dungeon Game Engine (Angel of Death)',
                organization: 'University of Guelph',
                date: 'September 2026 – November 2026',
                image: `${import.meta.env.BASE_URL}Angel_of_Death_image_!.png`,
                description: [
                    'Developed a procedurally generated, multi-level roguelike dungeon game using C and Python, implementing room navigation, combat, inventory management, and player progression.',
                    'Designed a modular C game engine with Python integration via ctypes, separating dungeon generation, game logic, and terminal-based user interfaces.',
                    'Implemented automated unit testing using the Check framework for C and Python\'s unittest, validating game mechanics, controller functionality, and Python-to-C integration.',
                    'Containerized the development environment using Docker and managed collaborative development through Git and GitHub.'
                ],
                stack: ['C', 'Python', 'ctypes', 'Docker', 'Git', 'GitHub', 'Check', 'unittest']
            },
            
            {
                title: 'NLTK Open-Source Contribution',
                organization: 'University of Guelph',
                date: 'September 2025 – December 2025',
                image: `${import.meta.env.BASE_URL}NLTK_test_results.png`,
                description: [
                    'Collaborated on a large-scale software architecture project to enhance the Natural Language Toolkit (NLTK), a widely used open-source Python library for natural language processing.',

                    'Implemented Python-based, object-oriented solutions to resolve missing tokenizer resources, modifying resource discovery and loading logic while maintaining backward compatibility.',

                    'Developed and improved Python packaging and installation workflows, enabling users to install required tokenizer dependencies directly through pip without manual downloads.',

                    'Contributed to automated testing and verification using Pytest, with the team developing 100+ unit and regression tests and reporting 100% coverage for selected functionality.',

                    'Collaborated through GitHub feature branches, pull requests, code reviews, and merge conflict resolution, while using Jira and Agile/SCRUM methodologies to coordinate development.',

                    'Submitted the implemented solution as a pull request to the official NLTK repository and published a standalone Python package on PyPI.'
                ],
                stack: [
                    'Python',
                    'NLTK',
                    'Pytest',
                    'PyPI',
                    'Git',
                    'GitHub',
                    'Jira',
                    'Agile/SCRUM'
                ],
                link: 'https://github.com/Julien-ser/nltk_Group1_ENGG4450'
            },
            
            {
                title: 'OathBreaker — Multiplayer Roguelike Game',
                organization: 'Team Passion Project',
                date: '',
                image: `${import.meta.env.BASE_URL}OathBreaker_demo.png`,
                description: [
                    'Collaborated in a team of 3 developers to design and develop a multiplayer roguelike game using GameMaker Language (GML), JavaScript, and Java.',

                    'Implemented procedural dungeon generation to create randomized room layouts, supporting varied gameplay experiences and replayability.',

                    'Designed and developed custom playable characters, gameplay mechanics, and interactive systems to create a unique roguelike experience.',

                    'Integrated persistent file-saving functionality to store player progress and game data across sessions.',

                    'Implemented multiplayer functionality and integrated audio systems to support cooperative gameplay and immersive sound effects.',

                    'Collaborated through Git and GitHub, coordinating feature development, managing source code changes, and integrating contributions from multiple developers.'
                ],
                stack: [
                    'GML',
                    'JavaScript',
                    'Java',
                    'GameMaker',
                    'Git',
                    'GitHub',
                    'Multiplayer',
                    'Procedural Generation'
                ],
                link: ''
            },
            
            {
                title: 'ZenQuest — Interactive Brand Marketing Platformer',
                organization: 'Zebra Pen Canada',
                date: '',
                image: `${import.meta.env.BASE_URL}ZenQuest_demo.png`,
                description: [
                    'Designed and developed an interactive 2D platformer using GameMaker Language (GML) and JavaScript to promote seven new Zebra Pen Canada product brands through an engaging, gamified experience.',

                    'Developed custom gameplay mechanics, player controls, and interactive environments to integrate product branding into the game experience.',

                    'Delivered a playable game showcased at industry trade shows, allowing customers and representatives from other companies to interact directly with Zebra Pen Canada products through gameplay.',

                    'Collaborated with a digital artist to integrate custom visual assets, character designs, and branded environments while maintaining a consistent visual identity.',

                    'Coordinated directly with the Marketing Manager, providing iterative development updates, demonstrating completed features, and incorporating stakeholder feedback through a SCRUM-inspired workflow.',

                    'Balanced gameplay functionality, visual presentation, and marketing objectives to deliver an interactive promotional experience for a commercial audience.'
                ],
                stack: [
                    'GML',
                    'JavaScript',
                    'GameMaker',
                    'Game Development',
                    'UI/UX',
                    'Agile',
                    'Stakeholder Communication'
                ],
                link: ''
            },
            
            {
                title: 'Entity Matching & Training Data',
                organization: 'Machine Learning Project',
                date: 'May 2025 – December 2025',
                image: `${import.meta.env.BASE_URL}TealBook_ML_Accuracy.png`,
                description: [
                    'Developed and refined training datasets for an XGBoost-based machine learning model designed to identify and match entities across inconsistent data records.',

                    'Performed data preprocessing and feature engineering to improve the quality, consistency, and usefulness of machine learning training inputs.',

                    'Contributed to improving entity-matching accuracy from approximately 60% to 90% through training data development and feature refinement.',

                    'Applied supervised machine learning concepts to support model training, evaluation, and iterative improvements to entity-matching performance.'
                ],
                stack: [
                    'Python',
                    'XGBoost',
                    'Machine Learning',
                    'Data Preprocessing',
                    'Feature Engineering',
                    'Supervised Learning'
                ],
                link: ''
            }




        ]
    },
    //---------------------------------------------------------------------------------------Robotics---------------------------------------------------------------------------------------
    {
        name: 'Robotics',
        tag: 'ROS2 · CAN bus · Jetson',
        description: 'Motor control, autonomous systems, and robotics software.',
        stack: ['ROS2', 'CAN bus', 'Jetson'],
        link: '',
        subprojects: [
            {
                title: 'Multi-Camera Streaming & Rover Monitoring System',
                organization: 'University of Guelph Robotics Team',
                date: 'September 2025 – August 2026',
                image: `${import.meta.env.BASE_URL}Cameras_On_Power_Supply.jpg`,
                description: [
                    'Integrated 3 live camera feeds into a Mars Rover Base Station using Python, ROS2, OpenCV, and NiceGUI to enable real-time remote monitoring and operator visibility.',

                    'Developed MJPEG streaming endpoints using FastAPI to transmit live camera footage from an NVIDIA Jetson Orin to a browser-based dashboard.',

                    'Configured ROS2 camera nodes to capture and publish video from multiple USB webcams and an Intel RealSense depth camera.',

                    'Diagnosed and resolved frame flickering, colour corruption, and video encoding issues to improve camera feed stability and reliability.',

                    'Containerized camera drivers, ROS2 packages, and dependencies using Docker to support consistent deployment across development environments.',

                    'Designed and integrated a multi-camera dashboard displaying 3 simultaneous video feeds alongside rover telemetry and remote-control interfaces.'
                ],
                stack: [
                    'Python',
                    'ROS2',
                    'OpenCV',
                    'FastAPI',
                    'NiceGUI',
                    'Docker',
                    'NVIDIA Jetson',
                    'Intel RealSense',
                    'MJPEG'
                ],
                link: ''
            },
            
            {
                title: '3-DOF Robotic Arm Control System',
                organization: 'University of Guelph Robotics Team',
                date: 'September 2025 – August 2026',
                video: `${import.meta.env.BASE_URL}Arm_Motor_Test.mp4`,
                description: [
                    'Developed Python-based ROS2 nodes to control a 3-DOF robotic arm using ODrive S1 motor controllers and Xbox joystick inputs for real-time operator control.',

                    'Integrated three ODrive S1 motor controllers with an NVIDIA Jetson Orin Nano using CAN bus and SocketCAN, enabling independent motor communication and joint control.',

                    'Implemented ODrive CANSimple protocol commands for motor velocity control, operating state transitions, and CAN node addressing.',

                    'Developed joystick input processing with configurable deadzones to filter unintended movements and improve control precision.',

                    'Implemented command timeouts and motor stop functionality to reduce unintended motor operation during communication interruptions or loss of joystick input.',

                    'Integrated motor-control functionality into a modular ROS2 architecture to support communication between joystick inputs, motor drivers, and robotic arm control nodes.'
                ],
                stack: [
                    'Python',
                    'ROS2',
                    'CAN bus',
                    'SocketCAN',
                    'ODrive S1',
                    'NVIDIA Jetson',
                    'Linux'
                ],
                link: ''
            },
            
            {
                title: 'DYNAMIXEL Motor Control & Robotic Claw Integration',
                organization: 'University of Guelph Robotics Team',
                date: 'September 2025 – August 2026',
                video: `${import.meta.env.BASE_URL}Dynamixel_Claw_Motor_Test.mp4`,
                description: [
                    'Developed Python-based ROS2 motor control nodes to independently operate 3 DYNAMIXEL servo motors through USB serial communication for robotic claw manipulation.',

                    'Integrated Xbox controller inputs with ROS2 /joy topics, mapping analog joysticks, triggers, and bumpers to real-time, bidirectional motor commands.',

                    'Implemented configurable motor velocities, individual ROS2 command topics, and joystick deadzones to enable precise and responsive motor control.',

                    'Utilized the DYNAMIXEL SDK and Protocol 2.0 to configure motor operating modes, enable torque, and transmit velocity commands over serial communication.',

                    'Implemented motor communication diagnostics, device identification, velocity limits, and controlled shutdown procedures to improve system reliability and operational safety.',

                    'Designed a modular ROS2 control architecture separating joystick input processing from motor communication, supporting independent actuator control and easier system integration.'
                ],
                stack: [
                    'Python',
                    'ROS2',
                    'DYNAMIXEL SDK',
                    'Protocol 2.0',
                    'USB Serial',
                    'Linux',
                    'Robotic Manipulation'
                ],
                link: ''
            },
            
            {
                title: 'Wireless Network Infrastructure & Rover Communication',
                organization: 'University of Guelph Robotics Team',
                date: 'September 2025 – August 2026',
                image: `${import.meta.env.BASE_URL}Wifi_Network_Box_Display.jpg`,
                description: [
                    'Configured Ubiquiti Rocket M2 wireless networking hardware to establish communication between an Ubuntu Base Station and a Mars Rover powered by an NVIDIA Jetson Orin.',

                    'Implemented static IP addressing and Ethernet networking across Ubuntu Linux, NVIDIA Jetson Orin, and Ubiquiti networking hardware to support reliable device-to-device communication.',

                    'Configured 2.4 GHz wireless Access Point settings, WPA2 security, and airMAX compatibility while integrating 24V passive Power over Ethernet (PoE) infrastructure.',

                    'Diagnosed and resolved network discovery, routing, and connectivity issues using Linux networking utilities including nmcli, ip, ping, and ARP diagnostics.'
                ],
                stack: [
                    'Linux',
                    'Ubuntu',
                    'TCP/IP',
                    'Ethernet',
                    'Ubiquiti',
                    'NVIDIA Jetson',
                    'WPA2',
                    'PoE',
                    'Network Troubleshooting'
                ],
                link: ''
            },
            
            {
                title: 'Webots Mars Rover Simulation & ROS2 Integration',
                organization: 'University of Guelph Robotics Team',
                date: 'September 2025 – August 2026',
                video: `${import.meta.env.BASE_URL}Drumheller_Rover_Simulation.mp4`,
                description: [
                    'Developed a physics-based Mars Rover simulation using Webots and C++ to model rover movement, steering behaviour, and interactions within a virtual environment.',

                    'Implemented joystick-based rover control, translating controller inputs into simulated motor and steering commands for real-time rover navigation.',

                    'Integrated Webots with ROS2 to facilitate communication between joystick inputs, control nodes, and simulated rover systems.',

                    'Utilized simulation-based testing to validate rover movement, steering responses, and control logic before deployment onto physical hardware.',

                    'Supported iterative development and debugging of robotic control software in a repeatable virtual environment, reducing reliance on physical rover testing.'
                ],
                stack: [
                    'C++',
                    'Webots',
                    'ROS2',
                    'Python',
                    'Robotics Simulation',
                    'Joystick Control',
                    'Linux'
                ],
                link: ''
            },
            
            {
                title: 'Mars Rover Base Station & ROS2 Dashboard',
                organization: 'University of Guelph Robotics Team',
                date: 'September 2025 – August 2026',
                image: `${import.meta.env.BASE_URL}Basestation_Low_Quality.jpg`,
                description: [
                    'Developed a modular Mars Rover Base Station using Python, ROS2, and NiceGUI to provide real-time visualization of rover telemetry, joystick inputs, GPS coordinates, camera feeds, and competition tasks.',

                    'Designed and implemented an interactive web-based dashboard featuring multi-camera layouts, controller input monitoring, GPS waypoint tracking, and customizable task management interfaces.',

                    'Integrated ROS2 publishers and subscribers to enable communication between rover hardware, control nodes, and the Base Station through standardized ROS2 topics.',

                    'Containerized the ROS2 Humble development environment using Docker and Docker Compose, simplifying dependency management and ensuring consistent deployment across team members.',

                    'Organized and maintained a collaborative GitHub repository containing ROS2 packages, Docker configurations, and technical documentation to support development and system integration.'
                ],
                stack: [
                    'Python',
                    'ROS2',
                    'NiceGUI',
                    'Docker',
                    'Docker Compose',
                    'Linux',
                    'Git',
                    'GitHub',
                    'Web Development'
                ],
                link: ''
            },
            
            {
                title: 'u-blox GNSS Integration & GPS Navigation System',
                organization: 'University of Guelph Robotics Team',
                date: 'September 2025 – August 2026',
                image: `${import.meta.env.BASE_URL}Ublox_GPS_Output_Terminal.png`,
                description: [
                    'Integrated u-blox ZED-F9P GNSS receivers with NVIDIA Jetson hardware and ROS2, enabling real-time GPS data acquisition, coordinate processing, and rover position tracking.',

                    'Developed Python-based ROS2 functionality to process GPS coordinates and publish positioning data through standardized ROS2 topics for integration with the Mars Rover Base Station.',

                    'Implemented interactive GPS navigation features, including live rover positioning, waypoint creation, route visualization, and CSV-based coordinate logging.',

                    'Developed a GPS path-recording system to track and visualize rover movement in real time, supporting user-controlled recording and persistent route visualization.',

                    'Configured Docker Compose environments for GNSS hardware integration, including USB device passthrough, ROS2 networking, and dependency management on NVIDIA Jetson hardware.'
                ],
                stack: [
                    'Python',
                    'ROS2',
                    'u-blox ZED-F9P',
                    'GNSS',
                    'NVIDIA Jetson',
                    'Docker Compose',
                    'Linux',
                    'GPS Navigation'
                ],
                link: ''
            }






        ]
    },
    //---------------------------------------------------------------------------------------Embedded Systems---------------------------------------------------------------------------------------
    {
        name: 'Embedded Systems',
        tag: 'FPGA · VHDL · Vivado',
        description: 'Digital logic, processor design, and embedded development.',
        stack: ['FPGA', 'VHDL', 'Vivado'],
        link: '',
        subprojects: [
            {
                title: '16-Bit Single-Cycle CPU Design',
                organization: 'University of Guelph',
                date: 'March 2025 – April 2025',

                images: [
                    `${import.meta.env.BASE_URL}Waveform_1.png`,
                    `${import.meta.env.BASE_URL}Schematic_2.png`
                ],

                description: [
                    'Designed and implemented a 16-bit single-cycle processor using VHDL and Harvard architecture, supporting 11 MIPS-based instructions for arithmetic, memory access, branching, and control flow.',

                    'Developed a hierarchical processor datapath integrating a 16-bit Arithmetic Logic Unit (ALU), 16-register file, control unit, program counter, and separate instruction and data memory.',

                    'Implemented and simulated a 16-instruction test program using VHDL testbenches, verifying arithmetic operations, memory access, conditional branching, and jump instructions.',

                    'Debugged branch control timing and next-program-counter selection using Xilinx Vivado waveform analysis, resolving incorrect branching through ALU zero detection and multiplexer logic modifications.'
                ],

                stack: [
                    'VHDL',
                    'Xilinx Vivado',
                    'FPGA',
                    'Computer Architecture',
                    'MIPS',
                    'Digital Logic',
                    'Testbenches',
                    'Waveform Analysis'
                ],

                link: ''
            }
        ]
    }
];


const experiences = [
    {
        company: 'The Reynolds and Reynolds Company',
        position: 'Business Analyst',
        location: 'Mississauga, ON',
        date: 'January 2026 – August 2026',
        image: `${import.meta.env.BASE_URL}Reynolds_And_Reynolds_Logo.png`,

        description: [
            'Collaborated with a team of 6+ Business Analysts to perform software quality assurance, validate developer changes, and verify application functionality.',

            'Developed and executed 15+ API test cases per software change using Insomnia, identifying defects and preventing regression issues.',

            'Worked closely with 5+ Software Developers to communicate test results, clarify requirements, and ensure software changes aligned with customer needs.',

            'Maintained Kanban tickets, QA documentation, and testing progress through GitHub to support collaborative development workflows.',

            'Contributed to an 83% reduction in regression issues and potential software errors through systematic testing and validation.'
        ],

        stack: [
            'Quality Assurance',
            'API Testing',
            'Insomnia',
            'GitHub',
            'Kanban',
            'Regression Testing'
        ]
    },

    {
        company: 'TealBook',
        position: 'Junior Software Developer',
        location: 'Toronto, ON',
        date: 'May 2025 – December 2025',
        image: `${import.meta.env.BASE_URL}TealBook_Logo.png`,

        description: [
            'Collaborated within a four-member development team to improve an XGBoost-based machine learning entity-matching model.',

            'Developed and refined machine learning features to improve entity matching across inconsistent names, addresses, and jurisdictional information.',

            'Created and reviewed over 11,000 synthetic training candidates using Python and Pandas to support model training and evaluation.',

            'Developed and evaluated model features, contributing to an F1-score improvement from approximately 60% to 90%.',

            'Coordinated with product and application development teams to gather feedback, evaluate model performance, and support iterative improvements.'
        ],

        stack: [
            'Python',
            'Pandas',
            'XGBoost',
            'Machine Learning',
            'Feature Engineering',
            'Data Processing'
        ]
    },

    {
        company: 'Zebra Pen Canada',
        position: 'Freelance Graphic Designer & Video Programmer',
        location: 'Oakville, ON',
        date: 'April 2020 – Present',
        image: `${import.meta.env.BASE_URL}Zebra_Pen_Logo.png`,

        description: [
            'Developed an interactive product promotional platform using GameMaker Language (GML), collaborating with a digital artist to create custom gameplay visuals.',

            'Designed and produced digital graphics, promotional videos, and marketing assets for social media campaigns and client presentations.',

            'Created marketing posters and promotional materials supporting product launches and brand awareness initiatives.',

            'Collaborated with marketing stakeholders to incorporate feedback, refine visual designs, and deliver promotional content aligned with business objectives.'
        ],

        stack: [
            'GML',
            'GameMaker',
            'Graphic Design',
            'Video Editing',
            'Digital Marketing',
            'Creative Development'
        ]
    }
];


const skills = [
    {
        category: 'Programming Languages',
        items: [
            'Python',
            'C',
            'C++',
            'C#',
            'Java',
            'JavaScript',
            'Swift',
            'VHDL',
            'Verilog',
            'HTML/CSS',
            'GML'
        ]
    },
    {
        category: 'Frameworks & Libraries',
        items: [
            'ROS2',
            'React',
            'Node.js',
            'NumPy',
            'Pandas',
            'Pytest'
        ]
    },
    {
        category: 'Development Tools',
        items: [
            'Git',
            'GitHub',
            'Docker',
            'Linux',
            'Xcode',
            'Insomnia',
            'Jira',
            'Xilinx Vivado',
            'Xilinx ISE'
        ]
    },
    {
        category: 'Embedded Systems & Hardware',
        items: [
            'NVIDIA Jetson',
            'Raspberry Pi',
            'Arduino',
            'CAN Bus',
            'UART',
            'FPGA'
        ]
    },
    {
        category: 'Digital Design',
        items: [
            'CPU Datapaths',
            'Control Units',
            'ALUs',
            'Register Files',
            'Digital Logic'
        ]
    },
    {
        category: 'Engineering & Design Software',
        items: [
            'AutoCAD',
            'SolidWorks',
            'QGIS',
            'ArcGIS',
            'Microsoft Excel',
            'LibreOffice Calc'
        ]
    },
    {
        category: 'Professional Skills',
        items: [
            'Team Leadership',
            'Teamwork',
            'Technical Communication',
            'Agile/SCRUM',
            'Quality Assurance',
            'API Testing'
        ]
    }
];


function App() {
    const [page, setPage] = useState('home');
    const [selected, setSelected] = useState(null);
    const [expandedImage, setExpandedImage] = useState(null);
        useEffect(() => {
        function handleEscape(event) {
            if (event.key === 'Escape') {
                setExpandedImage(null);
            }
        }

        window.addEventListener('keydown', handleEscape);

        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    }, []);

    const nav = ['home', 'projects', 'experience', 'contact'];

    function navigate(item) {
        setPage(item);
        setSelected(null);
    }
    useEffect(() => {
    if (page === 'projects' && selected) {
        document.getElementById('selected-project')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    }, [page, selected]);
    return (
        <main className="min-h-screen px-4 py-10 md:px-8 md:py-16 flex justify-center">
            <div className="w-full max-w-7xl">

                <div className="mb-5 flex items-center justify-between text-xs text-slate-500">
                    <span>
                        <span className="text-[#7ee2a0]">●</span> available for opportunities
                    </span>
                    <span>portfolio / v1.0</span>
                </div>

                <section className="overflow-hidden rounded-xl border border-[#34404c] bg-[#101318] shadow-[0_20px_80px_rgba(0,0,0,.35)]">

                    <header className="flex items-center justify-between border-b border-[#313b47] px-5 py-4">
                        <div className="flex gap-2">
                            <span className="h-3 w-3 rounded-full bg-[#ff605c]" />
                            <span className="h-3 w-3 rounded-full bg-[#ffbd44]" />
                            <span className="h-3 w-3 rounded-full bg-[#00ca4e]" />
                        </div>

                        <span className="text-xs text-slate-400">
                            portfolio — ~/ {page}
                        </span>

                        <Terminal size={16} className="text-slate-500" />
                    </header>

                    <div className="px-5 py-7 md:px-10 md:py-10">

                        <nav
                            aria-label="Main navigation"
                            className="mb-12 flex flex-wrap gap-5 text-xs md:text-sm"
                        >
                            {nav.map(item => (
                                <button
                                    key={item}
                                    onClick={() => navigate(item)}
                                    className={
                                        page === item
                                            ? 'text-[#7ee2a0]'
                                            : 'text-slate-300 hover:text-[#7ee2a0]'
                                    }
                                >
                                    {page === item ? '~/' : ''}
                                    {item}
                                </button>
                            ))}
                        </nav>
                       {/*Home tab  */}
                        {page === 'home' && (
                            <>
                                {/* Introduction and profile picture */}
                                <div className="mb-12 grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_260px]">

                                    <div>
                                        <Prompt command="whoami" />

                                        <h1 className="mb-3 text-3xl font-bold tracking-tight text-slate-100 md:text-5xl">
                                            Marco Adeleye
                                            <span className="animate-pulse text-[#7ee2a0]">
                                                _
                                            </span>
                                        </h1>

                                        <p className="max-w-xl text-sm leading-7 text-[#a7b2c2]">
                                            I am a Computer Engineering Co-op student who loves
                                            developing software, robotics, and embedded systems.
                                            Welcome to my little corner of the internet.
                                        </p>
                                    </div>

                                    <div>
                                        <Prompt command="display ./profile.png" />

                                        <div className="overflow-hidden rounded-lg border border-[#34404c] bg-[#151d20] p-2">
                                            <img
                                                src={`${import.meta.env.BASE_URL}Linkedin_Profile_Picture.png`}
                                                alt="Marco Adeleye"
                                                className="aspect-square w-full rounded-md object-cover"
                                            />
                                        </div>
                                    </div>

                                </div>

                                {/* Projects section */}
                                <section className="mt-12">
                                    <ProjectGrid
                                        onSelect={(project) => {
                                            setSelected(project);
                                            setPage('projects');
                                        }}
                                    />
                                </section>

                                {/* Technical Skills section */}
                                <SkillsSection />

                                {/* Education section */}
                                <EducationSection />
                            </>
                        )}



                        {/*Projects tab  */} 
                        {page === 'projects' && (
                            <>
                                <Prompt command="ls ./projects" />

                                <h1 className="mb-6 text-2xl font-semibold">
                                    Projects
                                    <span className="text-[#7ee2a0]">/</span>
                                </h1>

                                <ProjectGrid onSelect={setSelected} />
                            </>
                        )}
                        {/*Experience tab  */}
                        {page === 'experience' && (
                            <>
                                <Prompt command="cat ./experience" />

                                <h1 className="mb-8 text-2xl font-semibold text-slate-100">
                                    Professional Experience
                                    <span className="text-[#7ee2a0]">/</span>
                                </h1>

                                <div className="flex flex-col gap-6">

                                    {experiences.map((experience, index) => (

                                        <div
                                            key={index}
                                            className="rounded-lg border border-[#34404c] bg-[#101318] p-5 md:p-7"
                                        >

                                            <div className="grid grid-cols-1 gap-6 md:grid-cols-[220px_1fr]">

                                                {/* Company logo */}
                                                <div className="flex items-start justify-center">

                                                    <button
                                                        type="button"
                                                        onClick={() => setExpandedImage(experience.image)}
                                                        className="group relative flex w-full items-center justify-center overflow-hidden rounded-lg border border-[#34404c] bg-white p-5 cursor-zoom-in hover:border-[#7ee2a0] transition-colors"
                                                    >
                                                        <img
                                                            src={experience.image}
                                                            alt={`${experience.company} logo`}
                                                            className="max-h-36 w-full object-contain"
                                                            loading="lazy"
                                                        />
                                                    </button>

                                                </div>

                                                {/* Experience information */}
                                                <div>

                                                    <h2 className="mb-2 text-xl font-semibold text-slate-100">
                                                        {experience.position}
                                                    </h2>

                                                    <p className="mb-1 text-sm font-semibold text-[#7ee2a0]">
                                                        {experience.company}
                                                    </p>

                                                    <p className="mb-5 text-xs text-slate-400">
                                                        {experience.location} | {experience.date}
                                                    </p>

                                                    {/* Resume-style bullet points */}
                                                    <ul className="mb-6 list-disc space-y-3 pl-5 text-sm leading-7 text-[#a7b2c2]">

                                                        {experience.description.map((point, i) => (
                                                            <li key={i}>
                                                                {point}
                                                            </li>
                                                        ))}

                                                    </ul>

                                                    {/* Technologies and skills */}
                                                    <div className="flex flex-wrap gap-2">

                                                        {experience.stack.map((skill) => (

                                                            <span
                                                                key={skill}
                                                                className="rounded border border-[#34404c] px-2 py-1 text-xs text-slate-400"
                                                            >
                                                                {skill}
                                                            </span>

                                                        ))}

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    ))}

                                </div>
                            </>
                        )}


                        {/* Contact tab */}
                        {page === 'contact' && (
                            <>
                                <Prompt command="cat ./contact.txt" />

                                <h1 className="mb-3 text-2xl font-semibold text-slate-100">
                                    Contact
                                    <span className="text-[#7ee2a0]">/</span>
                                </h1>

                                <p className="mb-8 text-sm leading-7 text-[#a7b2c2]">
                                    I have a passion for Software Development, Robotics Systems, and Embedded Systems.
                                    Please find my Email, LinkedIn, and Resume.
                                
                                </p>

                                <div className="grid gap-4 md:grid-cols-2">

                                    {/* Email */}
                                    <a
                                        href="mailto:madeleye@uoguelph.ca"
                                        className="group rounded-lg border border-[#34404c] bg-[#101318] p-6 transition-colors hover:border-[#7ee2a0] hover:bg-[#18221e]"
                                    >
                                        <div className="mb-4 flex items-center justify-between">
                                            <Mail size={24} className="text-[#7ee2a0]" />
                                            <ArrowUpRight
                                                size={18}
                                                className="text-slate-500 group-hover:text-[#7ee2a0]"
                                            />
                                        </div>

                                        <h2 className="mb-2 text-lg font-semibold text-slate-100">
                                            Email
                                        </h2>

                                        <p className="break-all text-sm text-[#a7b2c2]">
                                            madeleye@uoguelph.ca
                                        </p>
                                    </a>

                                    {/* LinkedIn */}
                                    <a
                                        href="https://www.linkedin.com/in/marco-adeleye-uofg/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group rounded-lg border border-[#34404c] bg-[#101318] p-6 transition-colors hover:border-[#7ee2a0] hover:bg-[#18221e]"
                                    >
                                        <div className="mb-4 flex items-center justify-between">
                                            <Linkedin size={24} className="text-[#7ee2a0]" />
                                            <ArrowUpRight
                                                size={18}
                                                className="text-slate-500 group-hover:text-[#7ee2a0]"
                                            />
                                        </div>

                                        <h2 className="mb-2 text-lg font-semibold text-slate-100">
                                            LinkedIn
                                        </h2>

                                        <p className="break-all text-sm text-[#a7b2c2]">
                                            linkedin.com/in/marco-adeleye-uofg
                                        </p>
                                    </a>

                                </div>

                                {/* Resume */}
                                <section className="mt-10">

                                    <Prompt command="ls ./resume.pdf" />

                                    <h2 className="mb-5 text-xl font-semibold text-slate-100">
                                        Resume
                                        <span className="text-[#7ee2a0]">/</span>
                                    </h2>

                                    <div className="rounded-lg border border-[#34404c] bg-[#101318] p-6">

                                        <div className="mb-6 flex items-center gap-4">
                                            <div className="rounded-lg border border-[#34404c] p-3">
                                                <FileText
                                                    size={28}
                                                    className="text-[#7ee2a0]"
                                                />
                                            </div>

                                            <div>
                                                <h3 className="font-semibold text-slate-100">
                                                    Marco Adeleye - Resume
                                                </h3>

                                                <p className="mt-1 text-xs text-slate-400">
                                                    PDF Document
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-3">

                                            {/* View resume */}
                                            <a
                                                href={`${import.meta.env.BASE_URL}resume.pdf`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 rounded-md border border-[#34404c] px-4 py-3 text-sm text-[#7ee2a0] transition-colors hover:border-[#7ee2a0] hover:bg-[#18221e]"
                                            >
                                                <Eye size={17} />
                                                View Resume
                                                <ArrowUpRight size={14} />
                                            </a>

                                            {/* Download resume */}
                                            <a
                                                href={`${import.meta.env.BASE_URL}resume.pdf`}
                                                download="Marco_Adeleye_Resume.pdf"
                                                className="inline-flex items-center gap-2 rounded-md border border-[#7ee2a0] bg-[#7ee2a0] px-4 py-3 text-sm font-semibold text-[#101318] transition-colors hover:bg-[#a0f0ba]"
                                            >
                                                <Download size={17} />
                                                Download Resumef
                                            </a>

                                        </div>

                                    </div>

                                </section>
                            </>
                        )}



                        {/* Selected project details */}
                        {selected && (
                            <div
                                id="selected-project"
                                className="mt-7 scroll-mt-6 rounded-lg border border-[#7ee2a0]/40 bg-[#151d20] p-5"
                            >

                                {/* Panel header */}
                                <div className="mb-5 flex items-center justify-between">
                                    <h2 className="font-semibold text-[#7ee2a0]">
                                        ./{selected.name.toLowerCase()}
                                    </h2>

                                    <button
                                        onClick={() => setSelected(null)}
                                        className="text-sm text-slate-400 hover:text-white"
                                    >
                                        [close]
                                    </button>
                                </div>

                                {/* Detailed project view - Projects tab only */}
                                {page === 'projects' && selected.subprojects ? (

                                    <div className="space-y-8">
                                        {selected.subprojects.map(project => (

                                            <div
                                                key={project.title}
                                                className="grid gap-6 lg:grid-cols-2"
                                            >




                                            {/* Project images or video */}
                                            <div className="flex flex-col gap-3">

                                                {project.video ? (

                                                    <div className="overflow-hidden rounded-lg border border-[#34404c] bg-black">
                                                        <video
                                                            controls
                                                            playsInline
                                                            preload="metadata"
                                                            poster={project.image || undefined}
                                                            className="w-full aspect-video object-contain"
                                                        >
                                                            <source
                                                                src={project.video}
                                                                type="video/mp4"
                                                            />
                                                        </video>
                                                    </div>

                                                ) : project.images ? (

                                                    project.images.map((image, index) => (

                                                        <button
                                                            key={index}
                                                            type="button"
                                                            onClick={() => setExpandedImage(image)}
                                                            className="group relative overflow-hidden rounded-lg border border-[#34404c] bg-black cursor-zoom-in hover:border-[#7ee2a0] transition-colors"
                                                        >
                                                            <img
                                                                src={image}
                                                                alt={`${project.title} - Image ${index + 1}`}
                                                                className="w-full h-auto object-contain"
                                                                loading="lazy"
                                                            />

                                                            <span className="absolute bottom-3 right-3 rounded bg-black/75 px-3 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                                                Click to expand
                                                            </span>
                                                        </button>

                                                    ))

                                                ) : project.image ? (

                                                    <button
                                                        type="button"
                                                        onClick={() => setExpandedImage(project.image)}
                                                        className="group relative overflow-hidden rounded-lg border border-[#34404c] bg-black cursor-zoom-in hover:border-[#7ee2a0] transition-colors"
                                                    >
                                                        <img
                                                            src={project.image}
                                                            alt={`${project.title} screenshot`}
                                                            className="w-full h-auto object-contain"
                                                            loading="lazy"
                                                        />

                                                        <span className="absolute bottom-3 right-3 rounded bg-black/75 px-3 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                                            Click to expand
                                                        </span>
                                                    </button>

                                                ) : null}

                                            </div>




                                                {/* Project information */}
                                                <div className="flex flex-col justify-center">

                                                    {/* Project title */}
                                                    <h3 className="mb-2 text-xl font-bold text-slate-100">
                                                        {project.title}
                                                        <span className="text-[#7ee2a0]">_</span>
                                                    </h3>

                                                    {/* University and date */}
                                                    <p className="mb-5 text-xs text-[#7ee2a0]">
                                                        {project.organization}
                                                        {project.date && ` | ${project.date}`}
                                                    </p>

                                                    {/* Project description */}
                                                    <ul className="mb-5 space-y-3 text-sm leading-6 text-slate-300">
                                                        {project.description.map((point, index) => (
                                                            <li
                                                                key={index}
                                                                className="flex items-start gap-3"
                                                            >
                                                                <span className="mt-1 text-[#7ee2a0]">
                                                                    &gt;
                                                                </span>

                                                                <span>{point}</span>
                                                            </li>
                                                        ))}
                                                    </ul>

                                                    {/* Technology tags */}
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.stack.map(technology => (
                                                            <span
                                                                key={technology}
                                                                className="rounded border border-[#34404c] px-2 py-1 text-xs text-slate-400"
                                                            >
                                                                {technology}
                                                            </span>
                                                        ))}
                                                    </div>

                                                </div>

                                            </div>
                                        ))}
                                    </div>

                                ) : (

                                    /* Original description - Home tab and other cards */
                                    <>
                                        <p className="mb-4 text-sm leading-7 text-slate-300">
                                            {selected.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {selected.stack.map(technology => (
                                                <span
                                                    key={technology}
                                                    className="rounded border border-[#34404c] px-2 py-1 text-xs text-slate-400"
                                                >
                                                    {technology}
                                                </span>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        )}


                        <footer className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-[#313b47] pt-5 text-xs text-slate-500">

                            <span>
                                <span className="text-[#7ee2a0]">
                                    visitor@portfolio
                                </span>
                                :~${' '}
                                <span className="animate-pulse">
                                    ▋
                                </span>
                            </span>


                            <div className="flex gap-4">
                                {/* GitHub */}
                                <a
                                    href="https://github.com/m-adeleye"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    className="hover:text-[#7ee2a0]"
                                >
                                    <Github size={17} />
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href="https://www.linkedin.com/in/marco-adeleye-uofg/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="hover:text-[#7ee2a0]"
                                >
                                    <Linkedin size={17} />
                                </a>

                                {/* Email */}
                                <a
                                    href="mailto:madeleye@uoguelph.ca"
                                    aria-label="Email"
                                    className="hover:text-[#7ee2a0]"
                                >
                                    <Mail size={17} />
                                </a>
                            </div>


                        </footer>

                    </div>
                </section>

                <p className="mt-5 text-center text-xs text-slate-600">
                    Designed like a terminal. Navigated like a website.
                </p>

            </div>
        
            {/* Fullscreen image viewer */}
            {expandedImage && (

                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-10"
                    onClick={() => setExpandedImage(null)}
                    role="presentation"
                >

                    {/* Close button */}
                    <button
                        type="button"
                        onClick={() => setExpandedImage(null)}
                        className="absolute right-6 top-6 z-10 rounded-lg border border-[#34404c] bg-[#101318] px-4 py-2 text-sm text-[#7ee2a0] hover:border-[#7ee2a0]"
                    >
                        [close] ✕
                    </button>

                    {/* Expanded image */}
                    <img
                        src={expandedImage}
                        alt="Expanded project image"
                        className="max-h-[90vh] max-w-[95vw] object-contain rounded-lg"
                        onClick={(e) => e.stopPropagation()}
                    />

                </div>

            )}
    
        </main>
    );
}

function Prompt({ command }) {
    return (
        <p className="mb-5 text-sm text-[#7ee2a0]">
            ~ $ {command}
        </p>
    );
}

function ProjectGrid({ onSelect}) {
    return (
        <>
        <div className="mb-5">
            <Prompt command="ls ./projects" />
        </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map(project => (
                    <button
                        key={project.name}
                        onClick={() => onSelect(project)}
                        className="group rounded-lg border border-[#34404c] p-5 text-left hover:border-[#7ee2a0] hover:bg-[#18221e]"
                    >
                        <div className="mb-3 flex items-center gap-2">
                            <Folder
                                size={19}
                                className="text-[#7ee2a0]"
                            />

                            <span className="text-sm font-semibold text-slate-100">
                                {project.name}
                            </span>

                            <ArrowUpRight
                                size={14}
                                className="ml-auto text-slate-500 group-hover:text-[#7ee2a0]"
                            />
                        </div>

                        <p className="text-xs leading-6 text-[#a7b2c2]">
                            {project.tag}
                        </p>
                    </button>
                ))}
            </div>
        </>
    );
}


function EducationSection() {
    const coursework = [
        'Autonomous Systems & Robotics',
        'Software Systems Development and Integration',
        'Embedded Reconfigurable Systems',
        'Wireless Sensor Networks',
        'Large-Scale Software Architecture',
        'Data Structures'
    ];

    return (
        <section className="mt-12">

            <Prompt command="cat ./education.txt" />

            <h2 className="mb-6 text-2xl font-semibold text-slate-100">
                Education
                <span className="text-[#7ee2a0]">/</span>
            </h2>

            <div className="rounded-lg border border-[#34404c] bg-[#101318] p-5 md:p-7">

                {/* University and degree */}
                <div className="mb-6 flex flex-wrap items-start justify-between gap-4">

                    <div>
                        <h3 className="mb-2 text-xl font-semibold text-slate-100">
                            University of Guelph
                        </h3>

                        <p className="mb-2 text-sm text-[#7ee2a0]">
                            Bachelor of Engineering, Computer Engineering (Co-op)
                        </p>

                        <p className="text-xs text-slate-400">
                            Guelph, Ontario
                        </p>
                    </div>

                    <span className="rounded border border-[#34404c] px-3 py-2 text-xs text-slate-400">
                        September 2023 – May 2028
                    </span>

                </div>

                {/* Concentrations */}
                <div className="mb-6">
                    <h4 className="mb-3 text-sm font-semibold text-slate-100">
                        Concentrations
                    </h4>

                    <div className="flex flex-wrap gap-2">
                        {['Robotics', 'Software Design'].map(item => (
                            <span
                                key={item}
                                className="rounded border border-[#34404c] px-3 py-2 text-xs text-[#a7b2c2]"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Relevant coursework */}
                <div className="mb-6">
                    <h4 className="mb-3 text-sm font-semibold text-slate-100">
                        Relevant Coursework
                    </h4>

                    <div className="grid gap-3 sm:grid-cols-2">
                        {coursework.map(course => (
                            <div
                                key={course}
                                className="flex items-start gap-3 text-sm text-[#a7b2c2]"
                            >
                                <span className="text-[#7ee2a0]">
                                    &gt;
                                </span>

                                <span>{course}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Academic recognition */}
                <div className="border-t border-[#34404c] pt-5">
                    <p className="text-sm text-[#a7b2c2]">
                        <span className="mr-2 text-[#7ee2a0]">
                            *
                        </span>
                        College of Engineering Dean's Honour List
                    </p>
                </div>

            </div>

        </section>
    );
}


function SkillsSection() {
    return (
        <section className="mt-12">

            {/* Terminal command */}
            <Prompt command="cat ./skills.txt" />

            <h2 className="mb-6 text-2xl font-semibold text-slate-100">
                Technical Skills
                <span className="text-[#7ee2a0]">/</span>
            </h2>

            {/* Skills grid */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">

                {skills.map((group) => (
                    <div
                        key={group.category}
                        className="rounded-lg border border-[#34404c] bg-[#101318] p-5 transition-colors hover:border-[#7ee2a0]"
                    >

                        {/* Category heading */}
                        <h3 className="mb-4 text-sm font-semibold text-[#7ee2a0]">
                            {group.category}
                        </h3>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2">

                            {group.items.map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded border border-[#34404c] px-2 py-1 text-xs text-[#a7b2c2]"
                                >
                                    {skill}
                                </span>
                            ))}

                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
}


function ExperienceGrid({ onSelect }) {
    return (
        <>
            <div className="mb-5">
                <Prompt command="ls ./experience" />
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {experiences.map(experience => (
                    <button
                        key={experience.name}
                        onClick={() => onSelect(experience)}
                        className="group rounded-lg border border-[#34404c] p-5 text-left hover:border-[#7ee2a0] hover:bg-[#18221e]"
                    >
                        <div className="mb-3 flex items-center gap-2">
                            <Folder
                                size={19}
                                className="text-[#7ee2a0]"
                            />

                            <span className="text-sm font-semibold text-slate-100">
                                {experience.name}
                            </span>

                            <ArrowUpRight
                                size={14}
                                className="ml-auto text-slate-500 group-hover:text-[#7ee2a0]"
                            />
                        </div>

                        <p className="text-xs leading-6 text-[#a7b2c2]">
                            {experience.tag}
                        </p>
                    </button>
                ))}
            </div>
        </>
    );
}

createRoot(document.getElementById('root')).render(<App />);
