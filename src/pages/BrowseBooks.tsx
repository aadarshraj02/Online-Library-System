import BookCard from "../components/BookCard";
import { books } from "../utils/BookData";

const BrowseBooks = (): JSX.Element => {
  return (
    <div className="p-4 flex justify-center">
      <div className="w-full max-w-7xl">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Browse Books
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 flex-wrap">
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
    </div>
  );
};

export default BrowseBooks;
