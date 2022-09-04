import { NavLink, Outlet } from 'react-router-dom'


export const Layout = () => {
    return (
        <>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto">


                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Bienvenidos</span>

                    <button
                        data-collapse-toggle="navbar-default"
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default" aria-expanded="false">

                    </button>

                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="flex flex-col p-4 mt-4 
                        bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900
                         dark:border-gray-700">

                            <li>

                                <NavLink
                                    to='/usuarios'
                                    className={
                                        ({ isActive }) => `
                                    hover:text-gray-500
                                    ${isActive ? 'text-white' : 'text-gray-400'} 

                                `

                                    }
                                    end

                                >
                                    Usuarios
                                </NavLink>
                            </li>

                            <NavLink
                                to='/usuarios/nuevo'
                                className={
                                    ({ isActive }) => `
                                    hover:text-gray-500
                                    ${isActive ? 'text-white' : 'text-gray-400'} 

                                `
                                }
                            >
                                Nuevos Usuarios
                            </NavLink>

                        </ul>
                    </div>
                </div>
            </nav>




            <div className="w-full p-10 md:h-screen ">
                <Outlet />
            </div>

        </>


    )
}
