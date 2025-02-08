


import Button from '@/components/button';
import CardImg from '@/components/cardimg';
import ProductDetail from '@/components/productDetail';
import TwoImagesWithBg from '@/components/twoimages';


import Image from 'next/image'; // Import Image from next/image

const Shop = () => {
  return (
    <div className='pt-24' >
 

      {/* product  */}
      <ProductDetail />

   

  {/* Second use of TwoImagesWithBg with different images and background */}
  <TwoImagesWithBg
        leftImage="/images/Group 107.png"
        rightImage="/images/Group 106.png"
        bgColor="bg-white-100"  // Another background color
      />
   
     {/* card grid */}
     <CardImg
  limit={4}
  title="Related Products"
  description="Explore other products related to your recent selection."
/>

<div className='flex justify-center m-8'>
<Button label="
veiw more" underline={true} />
</div>
    </div>
  );
};

export default Shop;