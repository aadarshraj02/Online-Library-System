import { Link, useParams } from "react-router-dom";
import { IoStar } from "react-icons/io5";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const BookDetails = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const books = useSelector((state: RootState) => state.books.books);
  const book = books.find((b) => b.id === Number(id));

  return (
    <div className="bg-[url('/bookDetails.jpeg')] min-h-[82vh] bg-cover relative flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 bg-white bg-opacity-50 backdrop-blur-sm p-4 rounded-lg w-3/4 min-h-[50vh]">
        <div>
          <h1 className="text-center text-2xl font-semibold text-zinc-100">
            {book?.title}
          </h1>
        </div>
        <div className="mt-2 flex flex-col lg:flex-row w-full items-center lg:items-start">
          <div className="lg:w-1/4 mr-4">
            <img className="h-[50vh] rounded-lg" src={book?.image} alt="" />
          </div>
          <div className="lg:w-2/3">
            <h3 className="text-zinc-700 text-lg">
              <span className="text-black font-semibold">Author: </span>
              {book?.author}
            </h3>
            <p className="text-justify text-sm leading-2 text-zinc-700">
              <span className="text-black font-semibold">Description: </span>
              {book?.description}
            </p>
            <p className="text-sm mt-4 text-zinc-700">
              <span className="text-black font-semibold">Release Year: </span>
              {book?.releaseYear}
            </p>
            <div className="flex items-center gap-2 text-sm mt-1">
              <div>
                <span className="text-black font-semibold">Rating: </span>
              </div>
              <IoStar className="text-yellow-500" />
              <p className="text-zinc-700"> {book?.rating}</p>
            </div>
            <div className="mt-1 flex flex-col sm:flex-row sm:items-center sm:justify-around">
              <p className="text-sm text-zinc-700">
                <span className="text-black font-semibold">No. of Pages: </span>
                {book?.pages}
              </p>
              <p className="text-sm text-zinc-700">
                <span className="text-black font-semibold">Category: </span>
                {book?.category}
              </p>
            </div>
            <div className="mt-8 flex items-center justify-center">
              <Link to="/books">
                <button className="bg-green-600 px-4 py-1 rounded-md text-white hover:bg-green-700 transition-all">
                  Back to Browse
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
