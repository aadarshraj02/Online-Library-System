import BookCard from "../components/BookCard";

const HomePage = (): JSX.Element => {
  const greeting = (): string => {
    const currHour = new Date().getHours();
    if (currHour < 12) return "Good Morning,";
    if (currHour < 16) return "Good Afternoon,";
    return "Good Evening,";
  };

  const categories = [
    "Fiction",
    "Non-Fiction",
    "Sci-Fi",
    "Romance",
    "Mystery",
    "Self-help",
    "True-Crime",
  ];

  return (
    <div className="bg-[url('/Background-image.jpeg')] relative bg-cover bg-center w-full">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="z-50 relative p-2">
        <div>
          <h1 className="text-center text-zinc-100  text-xl sm:text-2xl md:text-3xl font-semibold">
            {greeting()} Welcome to Online Library!
          </h1>
        </div>
        <div className="mt-8">
          <h2 className="text-zinc-300 text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-center">
            Book Categories
          </h2>
          <div className="flex justify-center flex-wrap gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-40 backdrop-blur-sm p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer flex items-center justify-center text-center text-zinc-800 font-semibold"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
        <div className="p-4">
          <h1 className="text-2xl text-zinc-300 font-semibold px-2">
            Popular Books
          </h1>
          <div>
            <BookCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
