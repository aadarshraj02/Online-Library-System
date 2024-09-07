import BookCard from "../components/BookCard";

const BrowseBooks = (): JSX.Element => {
  const books = [
    {
      id: 1,
      title: "Book 1",
      image:
        "https://www.senseebooks.com/media/catalog/product/cache/fa9707e46bce5b7963f0dec14ddfaea9/n/o/nodavid_1.png",
      category: "Fiction",
    },
    {
      id: 2,
      title: "Book 2",
      image:
        "https://www.senseebooks.com/media/catalog/product/cache/fa9707e46bce5b7963f0dec14ddfaea9/n/o/nodavid_1.png",
      category: "Sci-Fi",
    },
    {
      id: 3,
      title: "Book 3",
      image:
        "https://www.senseebooks.com/media/catalog/product/cache/fa9707e46bce5b7963f0dec14ddfaea9/n/o/nodavid_1.png",
      category: "Self-help",
    },
    {
      id: 4,
      title: "Book 4",
      image:
        "https://www.senseebooks.com/media/catalog/product/cache/fa9707e46bce5b7963f0dec14ddfaea9/n/o/nodavid_1.png",
      category: "Mystery",
    },
    {
      id: 5,
      title: "Book 5",
      image:
        "https://www.senseebooks.com/media/catalog/product/cache/fa9707e46bce5b7963f0dec14ddfaea9/n/o/nodavid_1.png",
      category: "Self-help",
    },
    {
      id: 6,
      title: "Book 6",
      image:
        "https://www.senseebooks.com/media/catalog/product/cache/fa9707e46bce5b7963f0dec14ddfaea9/n/o/nodavid_1.png",
      category: "True-Crime",
    },
    {
      id: 7,
      title: "Book 7",
      image:
        "https://www.senseebooks.com/media/catalog/product/cache/fa9707e46bce5b7963f0dec14ddfaea9/n/o/nodavid_1.png",
      category: "Non-Fiction",
    },
    {
      id: 8,
      title: "Book 6",
      image:
        "https://www.senseebooks.com/media/catalog/product/cache/fa9707e46bce5b7963f0dec14ddfaea9/n/o/nodavid_1.png",
      category: "Mystery",
    },
    {
      id: 9,
      title: "Book 9",
      image:
        "https://www.senseebooks.com/media/catalog/product/cache/fa9707e46bce5b7963f0dec14ddfaea9/n/o/nodavid_1.png",
      category: "Horror",
    },
    {
      id: 10,
      title: "Book 10",
      image:
        "https://www.senseebooks.com/media/catalog/product/cache/fa9707e46bce5b7963f0dec14ddfaea9/n/o/nodavid_1.png",
      category: "True-Crime",
    },
  ];

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
