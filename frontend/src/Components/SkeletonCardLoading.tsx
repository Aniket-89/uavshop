import Button from "./Button"

const SkeletonCardLoading = () => {
  return (
    <div className="md:w-[250px] w-[200px] bg-white rounded-sm overflow-hidden shadow-sm group">
      <div className="overflow-hidden w-full md:h-[250px] h-[200px] aspect-1 bg-gray-300">
      </div>
      <div className="flex flex-col gap-3 my-4 px-2">
        <h3 className="mb-2 bg-gray-300 rounded-sm w-4/6 h-5">
        </h3>
        <div className="bg-gray-300 h-5 w-1/2">
        </div>
        <Button className="mx-auto lg:px-8 h-10 my-2 w-1/2" variant="secondary"></Button>
      </div>
    </div>
  )
}

export default SkeletonCardLoading
