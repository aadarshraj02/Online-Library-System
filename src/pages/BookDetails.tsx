import { useParams } from "react-router-dom";
import { books } from "../utils/BookData";
import { IoStar } from "react-icons/io5";

const BookDetails = (): JSX.Element => {
  const { id } = useParams<{ id: any }>();
  const book = books.find((b) => b.id == id);
  return (
    <div className="bg-[url('/bookDetails.jpeg')] min-h-[82vh] bg-cover relative flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 bg-white bg-opacity-50 backdrop-blur-sm p-4 rounded-lg w-3/4 min-h-[50vh]">
        <div>
          <h1 className="text-center text-2xl font-semibold text-zinc-100">
            {book?.title}
          </h1>
        </div>
        <div className="mt-2 flex flex-col lg:flex-row w-full">
          <div className="lg:w-1/4">
            <img className="h-[50vh] rounded-lg" src={book?.image} alt="" />
          </div>
          <div className="lg:w-2/3">
            <h3>
              {" "}
              <span>Author: </span>
              {book?.author}
            </h3>
            <p className="text-justify">
              <span>Description: </span>
              {book?.description}
            </p>
            <p>
              <span>Release Year: </span>
              {book?.releaseYear}
            </p>
            <div>
              <p>
                <span>Rating: </span>
                <IoStar />
                {book?.rating}
              </p>
            </div>
            <div>
              <p>
                <span>No. of Pages: </span>
                {book?.pages}
              </p>
              <p>
                <span>Category: </span>
                {book?.category}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
