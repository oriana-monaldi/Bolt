import React from 'react';
import  ItemListContainer from './ItemListContainer'
import info from '/assets/info.webp';
import blusas from '/assets/blusas.webp';
import top from '/assets/top.webp';
import jeans from '/assets/jeans.webp';

function Home() {
return (
<div>
    <div className='flex'>
        <div className='flex w-full'> 
            <img 
                className='w-full h-auto rounded-full object-cover' 
                src={blusas} 
                alt="info" 
            />
        </div>
        <div className='flex w-full'> 
            <img 
                className='w-full h-auto rounded-full object-cover' 
                src={top} 
                alt="info" 
            />
        </div>
        <div className='flex w-full'> 
            <img 
                className='w-full h-auto rounded-full object-cover' 
                src={jeans} 
                alt="info" 
            />
        </div>
    </div>
    <section className="p-6 mt-6">
        <h2 className="text-2xl font-semibold">Nuestros productos destacados</h2>
        <ItemListContainer/>
    </section>
    <div className='flex w-full'> 
        <img 
            className='w-full h-auto rounded-full object-cover' 
            src={info} 
            alt="info" 
        />
    </div>
</div>
);
}

export default Home;
