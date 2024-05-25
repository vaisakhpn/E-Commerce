"use client";

import Image from "next/image";
import {
  CartProductType,
  SelectedImgType,
} from "../product/[productId]/ProductDetails";

interface ProductImageProps {
  cartProduct: CartProductType;
  product: any;
  handleColorSelect: (value: SelectedImgType) => void;
}

const ProductImage: React.FC<ProductImageProps> = ({
  cartProduct,
  product,
  handleColorSelect,
}) => {
  return (
  
  );
};

export default ProductImage;
