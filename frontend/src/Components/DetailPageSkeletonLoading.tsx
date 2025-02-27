import Button from "./Button";

const DetailPageSkeletonLoading = () => {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Product Overview Section */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image Section */}
        <div className="md:w-1/2">
          <div className=" bg-gray-200 h-[450px] rounded-md overflow-hidden"></div>
          <div className="flex gap-4 mt-4">
            {[...Array(3)].map((_, index) => (
              <div className="bg-gray-200 size-32 rounded-md" key={index}></div>
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="md:w-1/2 h-fit flex flex-col justify-between my-4">
          <div className="grid gap-3">
            <div className="h-8 bg-gray-300 w-4/5 rounded-sm"></div>
            <div className="h-8 bg-gray-300 w-1/2 rounded-sm"></div>
            <p className="my-8 bg-gray-300 rounded-sm h-6 w-1/3"></p>
            <p className="rounded-sm"></p>
            <ul className="w-full grid gap-3">
                <li className="h-4 bg-gray-300 w-3/5 rounded-sm"></li>
                <li className="h-4 bg-gray-300 w-2/3 rounded-sm"></li>
                <li className="h-4 bg-gray-300 w-1/3 rounded-sm"></li>
                <li className="h-4 bg-gray-300 w-3/5 rounded-sm"></li>
            </ul>
            <div className="h-24 w-full bg-gray-200 mt-8"></div>
          </div>

          {/* Add to Cart Button */}
          {/* <Button className="mt-4 w-full md:w-auto" onClick={handleAddToCart}>
            Add to Cart
          </Button> */}
          <Button className="mx-auto my-8 lg:w-1/2 w-full bg-gray-300 h-10"></Button>
        </div>
      </div>
      {/* Full Description Section */}
      <div className="mt-8 px-6 h-[40vh] py-8 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-semibold border-b border-gray-300 pb-2">
          Description
        </h2>
        <div className="grid gap-2 my-4">

        <div className="bg-gray-300 w-3/5 h-5 rounded-sm"></div>
        <div className="bg-gray-300 w-full h-5 rounded-sm"></div>
        <div className="bg-gray-300 w-full h-5 rounded-sm"></div>
        <div className="bg-gray-300 w-4/5 h-5 rounded-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default DetailPageSkeletonLoading;
