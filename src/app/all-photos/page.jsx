import PhotoCard from '@/components/PhotoCard';
import React from 'react';

const AllPhotos = async () => {
    const res = await fetch("https://pixgen-one.vercel.app/data.json")
    const photos = await res.json()
    console.log(photos)
    return (
        <div>
            <h2 className='text-2xl font-bold my-4'>All Photos</h2>
            <div className='grid grid-cols-4 gap-3'>
                {
                    photos.map(photo=> <PhotoCard key={photo.id} photo={photo} />)
                }
            </div>
        </div>
    );
};

export default AllPhotos;