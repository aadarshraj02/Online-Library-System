const HomePage = (): JSX.Element => {
  const greeting = (): string => {
    const currHour = new Date().getHours();
    if (currHour < 12) return "Good Morning,";
    if (currHour < 16) return "Good Afternoon,";
    return "Good Evening,";
  };

  return (
    <div className="bg-[url('/Background-image.jpeg')] min-h-screen relative bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="z-50 relative p-2">
        <div>
          <h1 className="text-center text-zinc-100  text-xl sm:text-2xl md:text-3xl font-semibold">
            {greeting()} Welcome to Online Library!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
