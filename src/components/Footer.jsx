import React from 'react';

const Footer = () => {
  return (
    <div className="w-full h-min-96 bg-black text-white border-2 border-black px-36 pb-8">
      <div className=" justify-between pr-56 h-12 items-center hidden lg:flex">
        <div>Please contact us if you have any specific idea or request.</div>
        <div><i className="fa-solid fa-envelope"></i> nft@binance.com</div>
      </div>
      <div className="flex justify-between hover:bg-gray-900 border-t-2 border-t-gray-800">
        <ul>
          <li className="mb-4 font-semibold text-xl hover:underline">About Us</li>
          <li className="mb-3 text-sm hover:underline">About</li>
          <li className="mb-3 text-sm hover:underline">Career</li>
          <li className="mb-3 text-sm hover:underline">Announcements</li>
          <li className="mb-3 text-sm hover:underline">News</li>
          <li className="mb-3 text-sm hover:underline">Press</li>
          <li className="mb-3 text-sm hover:underline">Legal</li>
          <li className="mb-3 text-sm hover:underline">Terms</li>
        </ul>
        <ul>
          <li className="mb-4 font-semibold text-xl hover:underline">Products</li>
          <li className="mb-3 text-sm hover:underline">Exchange</li>
          <li className="mb-3 text-sm hover:underline">Buy Crypto</li>
          <li className="mb-3 text-sm hover:underline">Pay</li>
          <li className="mb-3 text-sm hover:underline">Academy</li>
          <li className="mb-3 text-sm hover:underline">Live</li>
          <li className="mb-3 text-sm hover:underline">Tax</li>
          <li className="mb-3 text-sm hover:underline">Gift Card</li>
        </ul>
        <ul>
          <li className="mb-4 font-semibold text-xl hover:underline">Business</li>
          <li className="mb-3 text-sm hover:underline">P2P Merchants Application</li>
          <li className="mb-3 text-sm hover:underline">Institutional & VIP</li>
          <li className="mb-3 text-sm hover:underline">Labs</li>
          <li className="mb-3 text-sm hover:underline">P2P Pro Merchants Application</li>
          <li className="mb-3 text-sm hover:underline">Listing Application</li>
        </ul>
        <ul>
          <li className="mb-4 font-semibold text-xl hover:underline">Service</li>
          <li className="mb-3 text-sm hover:underline">Affiliate</li>
          <li className="mb-3 text-sm hover:underline">Referral</li>
          <li className="mb-3 text-sm hover:underline">OTC Trading</li>
          <li className="mb-3 text-sm hover:underline">Proof of Reserves</li>
          <li className="mb-3 text-sm hover:underline">24/7 Chat Support</li>
          <li className="mb-3 text-sm hover:underline">APIs</li>
        </ul>
      </div>
      <div className="h-1/5 w-full text-center border-t-2 border-t-gray-800 hover:bg-gray-900">
        <span>Binance</span> <span>© 2024</span>
      </div>
    </div>
  );
};

export default Footer;
