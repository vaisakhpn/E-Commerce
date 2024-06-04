import Image from "next/image";

const HomeBanner = () => {
    return ( <div className="relative bg-gradient-to-r from-sky-500 to-sky-700 mb-8">
        
            <div className="w-1/3 relative aspect-video">
                <Image src='/banner-image.png' fill alt="Banner image" className="object-contain" />
            </div>
        </div>
    </div> );
}
 
export default HomeBanner;