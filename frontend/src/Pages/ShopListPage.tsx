import ProductList from "../Components/ProductList"
import Banner from "../Components/Banner"

const ShopListPage = () => {
  return (
    <>
        <Banner />
        <div className="flex w-[80%] max-w-7xl mx-auto">
            <div className="bg-green-200 w-1/3 h-[60vh]">
                
            </div>
            <div className="bg-red-200 w-2/3 h-[90vh]">
                <ProductList />
            </div>
        </div>
        <div className="bg-violet-100 w-full h-40"></div>
    </>
  )
}

export default ShopListPage
