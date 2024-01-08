"use client";

import { Rating } from "@mui/material";

interface ProductDetailsProps {
  product: any;
}

const Horizontal = () => {
  return <hr className="w-[30%] my-2" />;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const productRating =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-12">
      <div></div>
      <div className="flex flex-col gap-1 text-slate-500">
        <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
        <div className="flex items-center gap-2">
          <Rating value={productRating} readOnly />
          <div>{product.reviews.length} reviews</div>
        </div>
        <Horizontal />
        <div className="text-justify">{product.description}</div>
        <Horizontal />
        <div>
          <span className="font-semibold">CATEGORY: </span> 
          {product.category}
        </div>
        <div>
          <span className="font-semibold">BRAND: </span>
           {product.brand}
        </div>
        <div className={product.inStock ? "text-teal-400" : "text-rose-400"}>
          {product.inStock ? "In Stock" : "Out of Stock"}
        </div>
        <Horizontal />
        <div className="uppercase">Color</div>
        <Horizontal />
        <div className="uppercase">QUANTITY</div>
        <Horizontal />
        <div>Add To Cart</div>
      </div>
    </div>
  );
};

export default ProductDetails;
