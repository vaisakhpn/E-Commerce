"use client";

import Avatar from "@/app/component/Avatar";
import Heading from "@/app/component/Heading";
import { Rating } from "@mui/material";
import moment from "moment";

interface ListRatingProps {
  product: any;
}

const ListRating: React.FC<ListRatingProps> = ({ product }) => {
  return (
    <div>
      <Heading title="Product Review" />
      <div className="text-sm mt-2">
        {product.reviews &&
          product.reviews.map((review: any) => {
            return (
              <div key={review.id} className="max-w-[300px]">
                <div className="flex items-center gap-2 ">
                  <div><Avatar src={review?.user.image} /></div>
                  <div className="font-semibold">{review?.user.name}</div>
                  <div className="font-light">
                    {moment(review.createdDate).fromNow()}
                  </div>
                </div>
                <div className="mt-2">
                <Rating value={review.rating} readOnly/>
                <div className="ml-2">{review.comment}</div>
                <hr className="mt-4 mb-4 max-w-500px" />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ListRating;
