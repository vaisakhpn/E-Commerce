"use client";

import { formatPrice } from "@/utils/formatPrice";
import { truncateText } from "@/utils/truncateText";
import { Rating } from "@mui/material";
import Image from "next/image";

interface ProductCardProps {
  data: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {

  const productRating = data.reviews.reduce((acc:number,item:any)=>item.rating + acc,0)/data.reviews.length  


  return (
    <div className="col-span-1 text-center text-sm cursor-pointer p-2 hover:shadow-slate-400 shadow-md  rounded-lg border border-slate-200 bg-slate-50 m-2 transition-shadow duration-200 group">
      <div className="flex flex-col items-center w-full gap-1">
        <div  className="aspect-square overflow-hidden relative w-full">
          <Image
            fill
            src={data.images[0].image}
            alt={data.name}
            blurDataURL="/spinner.svg"
            className="rounded-t-lg group-hover:opacity-80 transition-opacity duration-200 w-full h-full object-contain"
          />
        </div>
        <div className="mt-4">{truncateText(data.name)}</div>
        <div><Rating value={productRating} readOnly /></div>
        <div>{data.reviews.length} reviews</div>
        <div className="font-semibold">{formatPrice(data.price)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
