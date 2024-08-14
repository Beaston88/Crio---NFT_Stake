import React from 'react';

const Body3 = () => {
  const items = [
    {
      imgSrc: "https://public.nftstatic.com/static/nft/webp/140c859227114b5e828f7d4b15560675_600x600.webp",
      title: "Matrix 2061",
      volume: "328.6K USD",
      floorPrice: "13.5M USD",
    },
    {
      imgSrc: "https://public.nftstatic.com/static/nft/webp/c2980cc09f4b4b20a5815a38380af46e_600x600.webp",
      title: "Binance's 5th Anniversary",
      volume: "328.6K USD",
      floorPrice: "13.5M USD",
    },
    {
      imgSrc: "https://public.nftstatic.com/static/nft/webp/104cbd64b8244352a1da3939629fb6c8_600x600.webp",
      title: "AIDO-Truth AI-DOGE",
      volume: "328.6K USD",
      floorPrice: "13.5M USD",
    },
  ];

  return (
    <div className="flex flex-wrap items-center w-full h-56 text-white justify-between px-36 hover:text-yellow-500 bg-black hover:bg-white duration-200">
      {items.map((item, index) => (
        <div key={index} className="w-1/4 h-40">
          <div className="group relative inline-block overflow-hidden rounded-lg p-1">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <img 
                src={item.imgSrc} 
                alt={item.title} 
                className="rounded-lg transition-transform duration-300 group-hover:scale-105 h-28 cursor-pointer"
              />
            </div>
          </div>
          <div className="border-b-2 border-b-gray-900">
            <div>
              {item.title} <i className="fa-solid fa-circle-up"></i>
            </div>
            <div className="flex justify-between opacity-0 hover:opacity-100">
              <p>Volume <span>{item.volume}</span></p>
              <p>Floor Price <span>{item.floorPrice}</span></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Body3;
