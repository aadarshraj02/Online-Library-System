import { useParams } from "react-router-dom";
import { books } from "../utils/BookData";

const BookDetails = (): JSX.Element => {
  const { id } = useParams<{ id: any }>();
  const book = books.find((b) => b.id == id);
  return (
    <div className="bg-[url('/bookDetails.jpeg')] min-h-[82vh] bg-cover relative">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 bg-white bg-opacity-50 backdrop-blur-sm p-4 rounded-lg w-full max-w-[330px] sm:max-w-md">
        <div>
          <h1>{book?.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
