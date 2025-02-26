import ProductList from "../Components/ProductList";
import Banner from "../Components/Banner";
import FilterSection from "../Components/FilterSection";

const ShopListPage = () => {
  return (
    <>
      <Banner />
      <div className="md:flex lg:w-[90%] max-w-7xl my-16 mx-auto">
        {/* <div className="bg-green-200 hidden lg:flex md:w-1/3 h-[60vh]">
            <FilterSection onFilter={(category) => console.log(category)} />
        </div> */}
        <div className="bg-gray-100 w-full md:min-h-[40vh] min-h-[60vh]">
          <h2 className="text-2xl font-semibold p-4">Products</h2>
          <ProductList />
        </div>
      </div>
      {/* <div className="bg-violet-100 w-full h-40"></div> */}
    </>
  );
};

export default ShopListPage;
