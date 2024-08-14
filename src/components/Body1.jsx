import React from "react";

export default function Body1(){
    
    
    return (
        <>
            <div className="h-screen w-full bg-[url('https://wallpapers.com/images/hd/binance-background-05jrlw0tm7ikytzh.jpg')] bg-cover">
            <div className="w-full h-14 bg-transparent flex items-center ">
                <div className="flex items-center w-5/6 justify-between">
                    <div className="text-white text-xl ml-3 font-semibold">NFT</div>
                    <div className="flex justify-start w-5/6">
                        <div className="hidden lg:flex sm:items-center mr-5">
                            <div className="relative group">
                                <div className="text-white hover:text-yellow-400 text-sm mx-2">
                                    Home
                                </div>
                            </div>
                            <div className="relative group">
                                <div className="text-white hover:text-yellow-400 text-sm mx-2">
                                    Drop <i className="fa-solid fa-angle-down"></i>
                                </div>
                                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                    <div className="py-1">
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Web Design
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Development
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            SEO
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="relative group">
                                <div className="text-white hover:text-yellow-400 text-sm mx-2">
                                    Collections
                                </div>
                            </div>
                            <div className="relative group">
                                <div className="text-white hover:text-yellow-400 text-sm mx-2">
                                    NFT-Fi <i className="fa-solid fa-angle-down"></i>
                                </div>
                                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                    <div className="py-1">
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Web Design
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Development
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            SEO
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ml-7 flex items-center border-2 border-yellow-400 text-2xl hidden md:flex">
                            <div className="text-gray-800 text-md mx-3 cursor-pointer">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <div className="w-96">
                                <input
                                    className="bg-transparent"
                                    type="text"
                                    placeholder="Search"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-2/3  px-36 pt-20">
                <div>
                    <h1 className="font-bold text-5xl text-white">One-stop platform for all things NFTs</h1>
                    <h3 className="text-3xl mt-7 text-white">Trade, Stake and Loan NFTs securely on Binance NFT</h3>
                </div>
                <div className="mt-16 flex justify-between">
                    <div className="mr-2 ">
                        <img className= "rounded-lg hover:border-4 hover:border-yellow-500 hover:border-opacity-65" src="https://public.nftstatic.com/static/nft/webp/8bce9ffc92244f94a72aeb635dc9e21d_400x400.webp" alt="" />
                    </div>
                    <div className="mx-2 ">
                        <img className="rounded-lg hover:border-4 hover:border-yellow-500 shadow-2xl hover:border-opacity-65" src="https://public.nftstatic.com/static/nft/webp/b79af144e7c14926a4b8174f671cd06e_400x400.webp" alt="" />
                    </div>
                    <div className="mx-2 ">
                        <img className="rounded-lg hover:border-4 hover:border-yellow-500 shadow-2xl hover:border-opacity-65" src="https://public.nftstatic.com/static/nft/webp/cb0d18a8f41048cc8a818363f2123fc6_400x400.webp" alt="" />
                    </div>
                    <div className="ml-2 ">
                        <img className="rounded-lg hover:border-4 hover:border-yellow-500 shadow-2xl hover:border-opacity-65" src="https://public.nftstatic.com/static/nft/webp/70f7a934e79e40858427ff8371cff217_400x400.webp" alt="" />
                    </div>
                </div>

            </div>
            <div className="w-full px-36 pb-10">
                <h1 className="font-bold text-5xl text-white">Staking into the chart is an Art</h1>
                <h3 className="text-3xl mt-7 text-white">Welcome to the world of NFTs</h3>                
            </div>
        </div>
        </>
    )
}