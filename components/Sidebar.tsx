import React, { Fragment, useState } from 'react';
import { useRouter } from "next/router";
import Image from "next/image";
import Github from "./GitHub";

export interface SidebarItem
{
    label: string;
    url: string;
    target?: string;
}

interface Props
{
    items: SidebarItem[];
    onShowPopup: () => void;
}

const Sidebar: React.FC<Props> = ( { items, onShowPopup } ) =>
{
    const [ isOpen, setIsOpen ] = useState( false );
    const router = useRouter();

    const handleClick = () =>
    {
        router.push( '/' );
    };
    const isActive = ( url: string ): boolean =>
    {
        return router.pathname === url;
    };
    const toggleSidebar = () =>
    {
        setIsOpen( !isOpen );
    };

    return (
        <>
            <button
                className="fixed z-10 z-50 w-10 h-10 p-2 bg-white border border-gray-300 rounded-md top-4 left-4 md:hidden focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={ toggleSidebar }
            >
                <i className={ `fas fa-${ isOpen ? 'times' : 'bars' } text-primary` } />
            </button>
            <aside
                className={ `bg-[#DFE0E2] min-h-screen min-h-screen flex flex-col border-r border-gray-200 transition-transform duration-300 ease-in-out transform ${ isOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:translate-x-0 md:static fixed top-0 left-0 h-full md:min-h-0 md:relative md:w-60 overflow-y-hidden` }
            >

                <div className="flex flex-col items-center justify-center p-4 w-60 hover:cursor-pointer"
                    onClick={ handleClick }>
                    <div className="flex flex-col">
                        <Image src={ "/images/logo.png" } alt="Toby AI" width="250" height="100" />
                        <h1 className="text-lg font-normal text-center text-gray-700">Voyager Social </h1>
                        <h1 className="text-lg font-semibold text-center text-gray-700">Toby <i
                            className="fas fa-arrow-right text-primary" /> Tasking</h1>


                    </div>
                </div>

                <nav className="flex-1">
                    <ul className="py-4">
                        {/* <li className="mb-10">
                            <div className="flex flex-row justify-center align-middle">
                                <a
                                    className="flex items-center justify-center px-4 py-2 mt-5 space-x-2 text-sm text-gray-600 transition-colors bg-white border border-gray-300 rounded-full shadow-md max-w-fit hover:bg-gray-100 animate-wobble"
                                    href="https://github.com/yuvalsuede/jasper-alternative-gpt"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Github />
                                    <p>Star on Github</p>
                                </a>
                            </div>
                        </li> */}
                        { items.map( ( item, index ) => (
                            <Fragment key={ index }>
                                <li className="mb-2 ml-8">
                                    <a
                                        target={ item?.target === 'blank' ? '_blank' : '' }
                                        href={ item.url }
                                        className={ `text-gray-500 hover:text-gray-700 transition duration-300 ${ isActive( item.url ) ? 'text-primary' : ''
                                            }` }>
                                        { item.label }
                                    </a>
                                </li>
                            </Fragment>
                        ) ) }

                        {/* <li>
                            <div className="flex justify-center w-full mt-5 align-middle">
                                <button
                                    className="w-2/3 px-6 py-2 text-xs font-semibold text-white rounded-full shadow-md bg-gradient-to-r from-green-400 to-blue-500"
                                    onClick={onShowPopup}
                                >
                                    Go Pro
                                </button>
                            </div>
                        </li> */}

                    </ul>

                </nav>

            </aside>

        </>
    );
};

export default Sidebar;
