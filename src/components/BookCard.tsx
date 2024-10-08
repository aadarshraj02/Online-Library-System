import { useNavigate } from "react-router-dom";

interface BookCardProps {
  id: number;
  title: string;
  image: string;
}

const BookCard = ({ id, title, image }: BookCardProps): JSX.Element => {
  const shortenedTitle = (title: string, maxLength: number = 20): string => {
    return title.length > maxLength ? `${title.slice(0, maxLength)}...` : title;
  };

  const navigate = useNavigate();

  const handleBookDetails = () => {
    navigate(`/book/${id}`);
  };

  return (
    <div className="p-2">
      <div className="relative bg-white rounded-lg h-[300px] w-[250px] shadow-lg bg-opacity-50 backdrop-blur-sm overflow-hidden">
        <img src={image} alt={title} className="h-3/4  w-full" />
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-xl text-center mb-2">{shortenedTitle(title)}</h1>
          <button
            onClick={handleBookDetails}
            className="bg-green-600 px-4 py-1 rounded-md text-white hover:bg-green-700 transition-all ease-linear duration-200"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
