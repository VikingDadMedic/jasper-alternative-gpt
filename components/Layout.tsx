import React, { Fragment, useState } from "react";
import Sidebar from "./Sidebar";
import GoProPopup from "./GoproPopup";

interface Props
{
    children: React.ReactNode;
    title: string;
}
export const SIDEBAR_ITEMS: any = [
    {
        label: "------------",
        url: "#",
        target: "blank"
    },
    {
        label: "Templates",
        url: "/",
    },
    {
        label: "AI Knowledge Base",
        url: "#",
        target: "blank"
    },
    {
        label: "------------",
        url: "#",
        target: "blank"
    },
    {
        label: "Business Profile",
        url: "#",
        target: "blank"
    },
    // {
    //     label: "Follow me on LinkedIn",
    //     url: "https://www.linkedin.com/in/yuval-suede/",
    //     target: "blank"
    // },
    // {
    //     label: "Contact",
    //     url: "https://www.linkedin.com/in/yuval-suede/",
    //     target: "blank"
    // },
];


const Layout: React.FC<Props> = ( { children, title } ) =>
{
    const [ showPopup, setShowPopup ] = useState( false );

    const handlePopup = () =>
    {
        setShowPopup( !showPopup );
    };
    return (
        <Fragment>
            <div className="relative w-full min-h-screen md:flex md:flex-row">
                <div className="fixed top-0 left-0 z-10 h-full md:hidden">
                    <Sidebar onShowPopup={ handlePopup } items={ SIDEBAR_ITEMS } />
                </div>
                <div className="hidden md:block md:relative ">
                    <Sidebar onShowPopup={ handlePopup } items={ SIDEBAR_ITEMS } />
                </div>
                <main className="w-full md:flex-grow">
                    { title && <h1 className="pt-4 pl-4 pr-4 mt-10 mb-4 text-2xl font-bold text-black">{ title }</h1> }
                    { children }
                </main>
                { showPopup && <GoProPopup onClose={ () => setShowPopup( false ) } /> }
            </div>
        </Fragment>
    );
};

export default Layout;
