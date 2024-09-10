import { Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addBook } from "../redux/slices/booksSlice";

const validation = Yup.object({
  title: Yup.string().required("Title is required"),
  author: Yup.string().required("Author is required"),
  image: Yup.string().url("Invalid URL").required("Image URL is required"),
  description: Yup.string().required("Description is required"),
  releaseYear: Yup.string().required("Release Year is required"),
  rating: Yup.number().min(0).max(5).required("Rating is required"),
  pages: Yup.number().required("Number of Pages is required"),
  category: Yup.string()
    .oneOf([
      "Fiction",
      "Non-Fiction",
      "Sci-Fi",
      "Romance",
      "Mystery",
      "Self-help",
      "True-Crime",
    ])
    .required("Category is required"),
});

const AddBook = (): JSX.Element => {
  const dispatch = useDispatch();

  const handleSubmit = (values: any) => {
    dispatch(addBook(values));
  };
  return (
    <div className="bg-[url('/bgimg.jpg')] min-h-[82vh] bg-cover bg-center relative w-full items-center flex justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 bg-white bg-opacity-50 backdrop-blur-sm p-4 rounded-lg w-2/4">
        <h1 className="text-center text-2xl text-zinc-100">Add a New Book</h1>
        <div>
          <Formik
            initialValues={{
              title: "",
              author: "",
              image: "",
              description: "",
              releaseYear: "",
              rating: "",
              pages: "",
              category: "",
            }}
            validation={validation}
            onSubmit={handleSubmit}
          ></Formik>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
