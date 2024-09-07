const HomePage = (): JSX.Element => {
  return (
    <div className="bg-[url('/Background-image.jpeg')] min-h-screen relative bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div>
        <h1 className="text-center text-zinc-100 z-50 relative p-2 text-xl sm:text-2xl md:text-3xl font-semibold">
          Good AfterNoon, Welcome to Online Library!
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
