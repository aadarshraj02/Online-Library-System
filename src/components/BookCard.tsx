const BookCard = (): JSX.Element => {
  return (
    <div className="p-2">
      <div className="relative bg-white rounded-lg h-[300px] w-[250px] shadow-lg bg-opacity-50 backdrop-blur-sm overflow-hidden">
        <img
          src="https://www.senseebooks.com/media/catalog/product/cache/fa9707e46bce5b7963f0dec14ddfaea9/n/o/nodavid_1.png"
          alt=""
          className="h-3/4 object-cover w-full"
        />
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-xl text-center mb-2">Book Title</h1>
          <button className="bg-green-600 px-4 py-1 rounded-md text-white hover:bg-green-700 transition-all ease-linear duration-200">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
