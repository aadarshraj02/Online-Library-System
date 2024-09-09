const AddBook = (): JSX.Element => {
  return (
    <div className="bg-[url('/bgimg.jpg')] min-h-[82vh] bg-cover bg-center relative w-full items-center flex justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 bg-white bg-opacity-50 backdrop-blur-sm p-4 rounded-lg w-2/4">
        <h1 className="text-center text-2xl text-zinc-100">Add a New Book</h1>
      </div>
    </div>
  );
};

export default AddBook;
