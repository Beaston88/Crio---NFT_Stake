import React from 'react';

const collections = [
  {
    id: 1,
    name: 'Ape Metaverse Club',
    imgSrc: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/7GBCHQUCEROJDPEVYQW7XG7VAE.jpg',
    floorPrice: '< 0.05 BNB',
    floorPriceChange: '+100.00%',
    volume: '3.40 BNB',
    volumeChange: '+0.00%',
    changeType: 'positive',
  },
  {
    id: 2,
    name: 'Football Club',
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaI0YaoCtPhiUHNBjrhjtGMjXSlY3IbzqX1Q&s',
    floorPrice: '< 0.01 BNB',
    floorPriceChange: '+90.00%',
    volume: '0.22 BNB',
    volumeChange: '-65.97%',
    changeType: 'negative',
  },
  {
    id: 3,
    name: 'Base, Introduced',
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpRK61-nl-19tDiwqPHGW865TOSwYTzquE_g&s',
    floorPrice: '< 2.4 ETH',
    floorPriceChange: '+20.00%',
    volume: '0.22 ETH',
    volumeChange: '-52.97%',
    changeType: 'negative',
  },
  {
    id: 4,
    name: 'Doodle Ape',
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH_quyzm-Kh0L3byLhRQ2J07bHZbRfpfi4Ag&s',
    floorPrice: '< 2.01 BNB',
    floorPriceChange: '+20.00%',
    volume: '0.22 ETH',
    volumeChange: '+5.97%',
    changeType: 'positive',
  },
  {
    id: 5,
    name: 'Fluffy Metaverse',
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnZN6ooUrTI0cKoafC2hJT6UgtEe7hVfVfmA&s',
    floorPrice: '< 0.01 ETH',
    floorPriceChange: '-90.00%',
    volume: '0.22 ETH',
    volumeChange: '-97.00%',
    changeType: 'negative',
  },
  {
    id: 6,
    name: 'Mutant Ape Yatch',
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU3uPHrU3jI-y5HOq0PTNZCAnHSgc_JN2aig&s',
    floorPrice: '< 0.01 ETH',
    floorPriceChange: '-10.00%',
    volume: '0.22 ETH',
    volumeChange: '+65.97%',
    changeType: 'positive',
  },
  {
    id: 7,
    name: 'Clone X-X Takashi',
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm2IIFkCGqCm-GzOqtBwon7ZreyjoFW3dMFg&s',
    floorPrice: '< 0.01 BNB',
    floorPriceChange: '+0.00%',
    volume: '0.22 BNB',
    volumeChange: '-5.97%',
    changeType: 'negative',
  },
  {
    id: 8,
    name: 'Kanpai Pandas',
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoSIwBiesPGw7rGD-upoG9e3as0cNqUWL7-Q&s',
    floorPrice: '< 0.01 ETH',
    floorPriceChange: '+0.00%',
    volume: '0.22 ETH',
    volumeChange: '-65.97%',
    changeType: 'negative',
  },
  {
    id: 9,
    name: 'Azuki Elementals',
    imgSrc: 'https://images.prismic.io/yellowcard-academy/e78ba930-5a58-49c5-9887-79edb36cd273_NFT+%26+Metaverse+%281%29.png?auto=compress,format',
    floorPrice: '< 30.01 ETH',
    floorPriceChange: '+9.00%',
    volume: '0.22 ETH',
    volumeChange: '-5.90%',
    changeType: 'negative',
  },
  {
    id: 10,
    name: 'Genuine Upload',
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRen83e_KgYRWRhQ-GLHo69TA62Oo286SVSgQ&s',
    floorPrice: '< 0.01 BNB',
    floorPriceChange: '-0.00%',
    volume: '0.22 ETH',
    volumeChange: '-65.97%',
    changeType: 'negative',
  },
];

const Data = () => {
  return (
    <>
        <div className="w-full bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOlxFtSt-FJYdXOZpLJZAuUAljV-kdAtvg6g&s')] bg-cover">
            <div className="text-white text-center pt-3">
                <h1 className='font-bold text-5xl underline'>Trending NFT to stake in :</h1>
            </div>
            <div className="w-full h-screen bg-transparent flex justify-evenly p-4 -mt-2-">
        <div className="w-5/12 bg-yellow-950 h-4/5 mt-16 hover:border-2 hover:border-yellow-500">
            <div className="bg-gray-900 text-gray-300 p-4">
            <div className="flex justify-between mb-4 text-sm font-medium text-gray-500">
                <pre>Collections</pre>
                <div>Floor Price</div>
                <div>Volume</div>
            </div>

            <div className="space-y-2">
                {collections.map((collection) => (
                <div key={collection.id} className="flex items-center justify-between hover:bg-gray-600">
                    <div className="flex items-center space-x-3">
                    <span className="text-amber-500">{collection.id.toString().padStart(2, '0')}</span>
                    <img src={collection.imgSrc} alt={collection.name} className="w-10 h-10 rounded-full" />
                    <pre>{collection.name} <span className="text-yellow-500">🎭</span></pre>
                    </div>
                    <div className="text-right">
                    <div>{collection.floorPrice}</div>
                    <div className={`text-sm ${collection.changeType === 'positive' ? 'text-green-500' : 'text-red-500'}`}>
                        {collection.floorPriceChange}
                    </div>
                    </div>
                    <div className="text-right">
                    <div>{collection.volume}</div>
                    <div className={`text-sm ${collection.changeType === 'positive' ? 'text-green-500' : 'text-red-500'}`}>
                        {collection.volumeChange}
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>

        <div className="w-5/12 bg-yellow-950 h-4/5 mt-16 hover:border-2 hover:border-yellow-500">
            <div className="bg-gray-900 text-gray-300 p-4">
            <div className="flex justify-between mb-4 text-sm font-medium text-gray-500">
                <pre>Collections</pre>
                <div>Floor Price</div>
                <div>Volume</div>
            </div>

            <div className="space-y-2">
                {collections.map((collection) => (
                <div key={collection.id} className="flex items-center justify-between hover:bg-gray-500">
                    <div className="flex items-center space-x-3">
                    <span className="text-amber-500">{collection.id.toString().padStart(2, '0')}</span>
                    <img src={collection.imgSrc} alt={collection.name} className="w-10 h-10 rounded-full" />
                    <pre>{collection.name} <span className="text-yellow-500">🎭</span></pre>
                    </div>
                    <div className="text-right">
                    <div>{collection.floorPrice}</div>
                    <div className={`text-sm ${collection.changeType === 'positive' ? 'text-green-500' : 'text-red-500'}`}>
                        {collection.floorPriceChange}
                    </div>
                    </div>
                    <div className="text-right">
                    <div>{collection.volume}</div>
                    <div className={`text-sm ${collection.changeType === 'positive' ? 'text-green-500' : 'text-red-500'}`}>
                        {collection.volumeChange}
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>
            </div>
        </div>
    </>
  );
};

export default Data;
