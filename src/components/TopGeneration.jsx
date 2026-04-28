import React from 'react';
import PhotoCard from './PhotoCard';

const TopGeneration = async() => {
    const res = await fetch("https://pixgen-one.vercel.app/data.json")
    const photos = await res.json();
    const topPhotos = photos.slice(0,8)
    console.log(topPhotos)
    console.log(photos)
    return (
        <div className='px-2'>
            <h2 className='text-2xl font-bold mt-5'>Top Generation</h2>
            <div className='grid lg:grid-cols-4 gap-2.5'> 
                {
                topPhotos.map(photo=> <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
            }
            </div>
        </div>
    );
};

export default TopGeneration;