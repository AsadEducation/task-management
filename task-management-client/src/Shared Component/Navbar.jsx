
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/taskLogo.png'
import { useAuth } from '../Hooks/useAuth';

const Navbar = () => {

    const { user, logoutUser } = useAuth();

    const {pathname} = useLocation();

    const links = (
        <div className="lg:flex space-x-3 font-bold">
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-green-400 text-white font-bold" // Active styles
                            : "hover:bg-green-400 text-gray-700 dark:text-white" // Inactive styles
                    }
                >
                    All tasks
                </NavLink>
            </li>
            {
                user && <li>
                    <NavLink
                        to="/add-food"
                        className={({ isActive }) =>
                            isActive
                                ? "bg-green-400 text-white font-bold"
                                : "hover:bg-green-400 text-gray-700 dark:text-white"
                        }
                    >
                        Add task
                    </NavLink>
                </li>
            }
            {
                user && <li>
                    <NavLink
                        to={`/my-added-foods`}
                        className={({ isActive }) =>
                            isActive
                                ? "bg-green-400 text-white font-bold"
                                : "hover:bg-green-400 text-gray-700 dark:text-white"
                        }
                    >
                        Manage Tasks
                    </NavLink>
                </li>
            }
        </div>
    );

    const handleLogoutClicked = () => {
        logoutUser()
            .then(result => {
                // console.log('user logged out', result);
            })
            .catch(err => {
                // console.log(err);
            })
    }
    return (
        <div className='bg-base-300 dark:bg-slate-700 z-50 top-0 fixed w-full'>

            <div className="navbar items-center lg:w-11/12 mx-auto relative">

                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-slate-400 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                            {
                                links
                            }

                        </ul>
                    </div>
                    <div className='flex items-center justify-between'>
                        <img className='w-10 h-10 rounded-full' src={logo} alt="" />
                        <NavLink to={`/home`} className="text-xl text-[16px] font-bold  hidden lg:block ml-4">Task Manager</NavLink>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul key={pathname} className="menu menu-horizontal px-1">

                        {
                            links
                        }

                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ? <div className='flex gap-2 items-center'>
                            <img className='h-10 w-10 rounded-full object-cover' src={user.photoURL} alt="" />
                            <button onClick={handleLogoutClicked} className="btn bg-green-400">Logout</button>
                        </div>
                            :
                            <NavLink to={'/auth/login'} className="btn bg-green-400">Login</NavLink>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;