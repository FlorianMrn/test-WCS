import React from 'react';

const Header = () => {

    return (
        <header className="text-center w-screen bg-red-200 p-8 box-border h-32">
            <h1 className="text-4xl flex justify-center">
                <img src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png"
                alt="Wild Code School"
                className="w-40 mr-3"/>
                Les Argonautes
            </h1>
        </header>

    );
};

export default Header;