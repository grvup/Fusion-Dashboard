import React, { useState } from 'react';
import img1 from '../assets/iiit1.jpg';
import { Link } from 'react-router-dom';
import profilePic from '../assets/man.png'

const modules = [
    { name: 'Academics', route: '/academics' },
    { name: 'Programme and Curriculum', route: '/programmeandcurriculum' },
    { name: 'Mess Management', route: '/messmanagement' },
    { name: 'Visitor Hostel', route: '/visitorshostel' },
    { name: 'Healthcare Center', route: '/healthcarecenter' },
    { name: 'Scholarship Portal', route: '/scholarshipportal' },
    { name: 'Complaint System', route: '/complaintsystem' },
    { name: 'Placement Cell', route: '/placementcell' },
    { name: 'Department Portal', route: '/departmentportal' },
    { name: 'Gymkhana', route: '/gymkhana' },
    { name: 'Hostel Management', route: '/hostelmanagement' },
    { name: 'Other Academic Procedure', route: '/otheracademicprocedure' },
];

const Dashboard = () => {
    const [role, setRole] = useState('Student');

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };

    return (
        <main className="profile-page">
            <section className="relative block h-[500px]">
                <div
                    className="absolute top-0 w-full h-full bg-center bg-cover"
                    style={{
                        backgroundImage: `url(${img1})`,
                    }}
                >
                    <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
                </div>
                <div
                    className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-[70px]"
                    style={{ transform: 'translateZ(0px)' }}
                >
                    <svg
                        className="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div>
            </section>
            <section className="relative py-16 bg-blueGray-200">
                <div className="container mx-auto px-4">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                        <div className="px-6">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                    <div className="relative">
                                        <img
                                            alt="Profile"
                                            src={profilePic} // Use the imported image here
                                            className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                    <div className="py-6 px-3 mt-32 sm:mt-0">
                                        <button
                                            className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                        >
                                            Sign-Out
                                        </button>
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                        <div className="mr-4 p-3 text-center">
                                            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{role}</span>
                                            <span className="text-sm text-blueGray-400">Role</span>
                                            <select
                                                value={role}
                                                onChange={handleRoleChange}
                                                className="mt-2 p-2 rounded border border-blueGray-300"
                                            >
                                                <option value="Student">Student</option>
                                                <option value="Faculty">Faculty</option>
                                            </select>
                                        </div>
                                        <div className="mr-4 p-3 text-center">
                                            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">8.9</span>
                                            <span className="text-sm text-blueGray-400">CPI</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-4">
                                <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                                    Ojasva Tomar
                                </h3>
                                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                    Jabalpur, Madhya Pradesh
                                </div>
                                <div className="mb-2 text-blueGray-600 mt-10">
                                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>Batch - 2022
                                </div>
                                <div className="mb-2 text-blueGray-600">
                                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>Computer Science and Engineering
                                </div>
                            </div>
                            <div className="p-4">
                                <h1 className="text-2xl font-bold mb-4">Modules</h1>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                    {modules.map((module, index) => (
                                        <Link
                                            to={module.route}
                                            key={index}
                                            className="block p-6 text-center rounded-lg shadow-lg bg-white hover:bg-gray-100"
                                        >
                                            <h2 className="text-lg font-semibold text-black">{module.name}</h2>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-8">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap items-center md:justify-between justify-center">
                            <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                                <div className="text-sm text-blueGray-500 font-semibold py-1">
                                    IIITDMJ-2024
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>
        </main>
    );
};

export default Dashboard;
