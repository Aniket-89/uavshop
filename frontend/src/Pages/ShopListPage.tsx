import ProductList from "../Components/ProductList";
import BannerCarousel from "../Components/BannerCarousel";
import { BannerImages } from "../assets/assets";
// import FilterSection from "../Components/FilterSection";



const ShopListPage = () => {


    return (
    <>
    <div className="w-full h-full">

      <BannerCarousel slides={BannerImages}/>
    </div>
      <div className="md:flex lg:w-[90%] my-16 mx-auto">
        {/* <div className="bg-green-200 hidden lg:flex md:w-1/3 h-[60vh]">
            <FilterSection onFilter={(category) => console.log(category)} />
        </div> */}
        <div className="w-full mx-auto md:min-h-[40vh] min-h-[60vh] px-1">
          <h2 className="text-3xl font-bold p-4 my-4 font-heading">Products</h2>
          <ProductList />
        </div>
      </div>
      {/* <div className="bg-violet-100 w-full h-40"></div> */}
    </>
  );
};

export default ShopListPage;
