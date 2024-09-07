import BookCard from "../components/BookCard";

const BrowseBooks = (): JSX.Element => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Browse Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center">
        {books.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            image={book.image}
            id={book.id}
          />
        ))}
      </div>
    </div>
  );
};

export default BrowseBooks;
