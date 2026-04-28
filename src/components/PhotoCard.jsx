import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { BiDownload } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";

const PhotoCard = ({ photo }) => {
  return (
    <Card className=" rounded-xl">
      <div className="relative w-full aspect-square">
        <Image
        src={photo.imageUrl}
        fill
        className="rounded-xl object-cover"
        alt={photo.title}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      ></Image>
        <Chip size="sm" color="success" className="absolute top-2 right-2 ">{photo.category}</Chip>
      </div>
      <h2 className="text-xl font-bold">{photo.title}</h2>

      <div className="flex items-center gap-3.5">
        <div className="flex items-center gap-1">
          <p>
            <FaHeart />
          </p>
          <p>{photo.likes}</p>
        </div>
        <Separator orientation="vertical" ></Separator>
        <div className="flex items-center  gap-1">
          <p>
            <BiDownload />
          </p>
          <p>{photo.downloads}</p>
        </div>
      </div>
      <Button variant="outline" className='w-full'>View Details</Button>
    </Card>
  );
};

export default PhotoCard;
