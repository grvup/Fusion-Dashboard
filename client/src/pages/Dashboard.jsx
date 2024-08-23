import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DarkModeContext } from '../context/DarkModeContext.jsx';
import img1 from '../assets/iiit1.jpg';
import profilePic from '../assets/man.png';
import { FaGraduationCap, FaBook, FaUtensils, FaHotel, FaHospital, FaUniversity, FaHandsHelping, FaRegNewspaper, FaBusinessTime, FaUsers, FaChalkboardTeacher, FaRegQuestionCircle } from 'react-icons/fa';

const modules = [
    { name: 'Academics', route: '/academics', icon: <FaBook /> },
    { name: 'Programme and Curriculum', route: '/programmeandcurriculum', icon: <FaRegNewspaper /> },
    { name: 'Mess Management', route: '/messmanagement', icon: <FaUtensils /> },
    { name: 'Visitor Hostel', route: '/visitorshostel', icon: <FaHotel /> },
    { name: 'Healthcare Center', route: '/healthcarecenter', icon: <FaHospital /> },
    { name: 'Scholarship Portal', route: '/scholarshipportal', icon: <FaUniversity /> },
    { name: 'Complaint System', route: '/complaintsystem', icon: <FaRegQuestionCircle /> },
    { name: 'Placement Cell', route: '/placementcell', icon: <FaBusinessTime /> },
    { name: 'Department Portal', route: '/departmentportal', icon: <FaUsers /> },
    { name: 'Gymkhana', route: '/gymkhana', icon: <FaChalkboardTeacher /> },
    { name: 'Hostel Management', route: '/hostelmanagement', icon: <FaHotel /> },
    { name: 'Other Academic Procedure', route: '/otheracademicprocedure', icon: <FaGraduationCap /> },
];

const notifications = [
    { title: 'Hackbyte Event', description: 'Hackbyte event by BitByte Club will be organised in CR102 -by PRIYANSH MEHTA' },
    { title: 'Bitbyte session', description: 'A session by BitByte Club will be organised in CR101 -by PRIYANSH MEHTA' },
];

const announcements = [
    { title: 'Quiz', description: 'quiz -by Prof. Atul Gupta' },
    { title: 'Course Announcement', description: 'course -by Prof. Atul Gupta' },
    { title: 'Test Announcement', description: 'test announcement -by Prakash Kumar' },
    { title: 'Healthcare Announcement', description: 'New PHC Doctor -by Prakash Kumar' },
];

const nextNotification = () => {
    setCurrentNotificationIndex((prevIndex) => (prevIndex + 1) % notifications.length);
};

const prevNotification = () => {
    setCurrentNotificationIndex((prevIndex) => (prevIndex - 1 + notifications.length) % notifications.length);
};

const nextAnnouncement = () => {
    setCurrentAnnouncementIndex((prevIndex) => (prevIndex + 1) % announcements.length);
};

const prevAnnouncement = () => {
    setCurrentAnnouncementIndex((prevIndex) => (prevIndex - 1 + announcements.length) % announcements.length);
};

const Dashboard = () => {
    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
    const [role, setRole] = useState('Student');
    const [batch, setBatch] = useState('');
    const [username, setUsername] = useState('');
    const [branch, setBranch] = useState('');
    const [cpi, setCpi] = useState('');
    const [currentNotificationIndex, setCurrentNotificationIndex] = useState(0);
    const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
        if (storedUserInfo) {
            setRole(storedUserInfo.role);
            setBatch(storedUserInfo.batch || '');
            setUsername(storedUserInfo.username || '');
            setBranch(storedUserInfo.branch || '');
            setCpi(storedUserInfo.cpi || '');
        }
    }, []);

    const handleSignOut = () => {
        localStorage.removeItem('userInfo');
        navigate('/sign-in');
    };

    const prevNotification = () => {
        setCurrentNotificationIndex((prevIndex) => (prevIndex === 0 ? notifications.length - 1 : prevIndex - 1));
    };

    const nextNotification = () => {
        setCurrentNotificationIndex((prevIndex) => (prevIndex === notifications.length - 1 ? 0 : prevIndex + 1));
    };

    const prevAnnouncement = () => {
        setCurrentAnnouncementIndex((prevIndex) => (prevIndex === 0 ? announcements.length - 1 : prevIndex - 1));
    };

    const nextAnnouncement = () => {
        setCurrentAnnouncementIndex((prevIndex) => (prevIndex === announcements.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <main className={`profile-page ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
            <section className={`relative block h-[500px] ${isDarkMode ? 'bg-gray-900' : 'bg-gray-200'}`}>
                <div
                    className={`absolute top-0 w-full h-full bg-center bg-cover ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}
                    style={{
                        backgroundImage: `url(${img1})`,
                    }}
                >
                    <span id="blackOverlay" className={`w-full h-full absolute opacity-50 ${isDarkMode ? 'bg-black' : 'bg-gray-900'}`}></span>
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
                        <polygon className={`fill-current ${isDarkMode ? 'text-gray-800' : 'text-gray-200'}`} points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div>
            </section>
            <section className={`relative py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-blueGray-200'}`}>
                <div className="container mx-auto px-4">
                    <div className={`relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg -mt-64 ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
                        <div className="px-6">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                    <div className="relative">
                                        <img
                                            alt="Profile"
                                            src={profilePic} 
                                            className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                    <div className="py-6 px-3 mt-32 sm:mt-0">
                                        <button
                                            className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={handleSignOut}
                                        >
                                            Sign-Out
                                        </button>
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                        <div className="mr-4 p-3 text-center">
                                            <span className="text-lg md:text-xl font-bold block uppercase tracking-wide">{role}</span>
                                            <span className="text-sm text-blueGray-400">Role</span>
                                        </div>
                                        {role === 'Student' && (
                                            <>
                                                <div className="mr-4 p-3 text-center">
                                                    <span className="text-lg md:text-xl font-bold block uppercase tracking-wide">{cpi}</span>
                                                    <span className="text-sm text-blueGray-400">CPI</span>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-4">
                                <h3 className="text-2xl md:text-3xl font-semibold leading-normal mb-2">{username}</h3>
                                <div className="text-sm md:text-base leading-normal mt-0 mb-2">
                                    <i className="fas fa-map-marker-alt mr-2"></i>Jabalpur, Madhya Pradesh
                                </div>
                                {role === 'Student' && (
                                    <>
                                        <div className="mb-2 text-blueGray-600 mt-10 text-sm md:text-base">
                                            <i className="fas fa-briefcase mr-2"></i>Batch - {batch}
                                        </div>
                                        <div className="mb-2 text-blueGray-600 text-sm md:text-base">
                                            <i className="fas fa-university mr-2"></i>{branch}
                                        </div>
                                    </>
                                )}
                                {role === 'Faculty' && (
                                    <div className="mb-2 text-blueGray-600 text-sm md:text-base">
                                        <i className="fas fa-user-tie mr-2"></i>Position - Professor
                                    </div>
                                )}
                            </div>
                            <div className="p-4">
                                <h1 className="text-xl md:text-2xl font-bold mb-4">Modules</h1>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                    {modules.map((module, index) => (
                                        <Link
                                            to={module.route}
                                            key={index}
                                            className={`block p-6 text-center rounded-lg shadow-lg transition-colors duration-300 ease-in-out ${isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-white text-gray-900 hover:bg-gray-100'}`}
                                        >
                                            <div className="flex items-center justify-center">
                                                <span className="mr-2 text-lg">{module.icon}</span>
                                                <h2 className="text-sm md:text-base font-semibold">{module.name}</h2>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            {/* Notifications Carousel */}
                            <div className="relative mt-8">
                                <h2 className="text-xl md:text-2xl font-bold mb-4">Notifications</h2>
                                <div className="flex items-center justify-center">
                                    <button
                                        className={`p-2 rounded-full shadow-lg transition-colors ${isDarkMode ? 'bg-gray-600 hover:bg-gray-700' : 'bg-gray-300 hover:bg-gray-400'}`}
                                        onClick={prevNotification}
                                    >
                                        <span className="text-xl">{'<'}</span>
                                    </button>
                                    <div
                                        className={`flex-1 mx-4 p-4 shadow-lg rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out ${isDarkMode ? 'bg-gray-800 border border-gray-600' : 'bg-white border border-gray-300'}`}
                                    >
                                        <div className="text-center">
                                            <h3 className="text-lg font-semibold">{notifications[currentNotificationIndex].title}</h3>
                                            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{notifications[currentNotificationIndex].description}</p>
                                        </div>
                                    </div>
                                    <button
                                        className={`p-2 rounded-full shadow-lg transition-colors ${isDarkMode ? 'bg-gray-600 hover:bg-gray-700' : 'bg-gray-300 hover:bg-gray-400'}`}
                                        onClick={nextNotification}
                                    >
                                        <span className="text-xl">{'>'}</span>
                                    </button>
                                </div>
                            </div>

                            {/* Announcements Carousel */}
                            <div className="relative mt-8 mb-6">
                                <h2 className="text-xl md:text-2xl font-bold mb-4">Announcements</h2>
                                <div className="flex items-center justify-center">
                                    <button
                                        className={`p-2 rounded-full shadow-lg transition-colors ${isDarkMode ? 'bg-gray-600 hover:bg-gray-700' : 'bg-gray-300 hover:bg-gray-400'}`}
                                        onClick={prevAnnouncement}
                                    >
                                        <span className="text-xl">{'<'}</span>
                                    </button>
                                    <div
                                        className={`flex-1 mx-4 p-4 shadow-lg rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out ${isDarkMode ? 'bg-gray-800 border border-gray-600' : 'bg-white border border-gray-300'}`}
                                    >
                                        <div className="text-center">
                                            <h3 className="text-lg font-semibold">{announcements[currentAnnouncementIndex].title}</h3>
                                            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{announcements[currentAnnouncementIndex].description}</p>
                                        </div>
                                    </div>
                                    <button
                                        className={`p-2 rounded-full shadow-lg transition-colors ${isDarkMode ? 'bg-gray-600 hover:bg-gray-700' : 'bg-gray-300 hover:bg-gray-400'}`}
                                        onClick={nextAnnouncement}
                                    >
                                        <span className="text-xl">{'>'}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className={`relative pt-8 pb-6 mt-8 ${isDarkMode ? 'bg-gray-800' : 'bg-blueGray-200'}`}>
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
