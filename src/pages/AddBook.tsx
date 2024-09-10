import { ErrorMessage, Field, Form, Formik } from "formik";
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
        <h1 className="text-center text-3xl text-zinc-100 font-bold">
          Add a New Book
        </h1>
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
          >
            {() => (
              <Form>
                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-5">
                  <label htmlFor="title" className="text-lg font-semibold">
                    Title:
                  </label>
                  <Field
                    type="text"
                    id="title"
                    name="title"
                    className="lg:w-[40vw] xl:w-[30vw] outline-none px-3 py-1 rounded-md text-lg my-3 bg-white bg-opacity-40 backdrop-blur-sm text-zinc-700"
                  />
                  <ErrorMessage name="title" component="div" />
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-5">
                  <label htmlFor="author" className="text-lg font-semibold">
                    Author:
                  </label>
                  <Field
                    type="text"
                    id="author"
                    name="author"
                    className="lg:w-[40vw] xl:w-[30vw] outline-none px-3 py-1 rounded-md text-lg my-3 bg-white bg-opacity-40 backdrop-blur-sm text-zinc-700"
                  />
                  <ErrorMessage name="author" component="div" />
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-5">
                  <label htmlFor="image" className="text-lg font-semibold">
                    Image Url:
                  </label>
                  <Field
                    type="text"
                    id="image"
                    name="image"
                    className="lg:w-[40vw] xl:w-[30vw] outline-none px-3 py-1 rounded-md text-lg my-3 bg-white bg-opacity-40 backdrop-blur-sm text-zinc-700"
                  />
                  <ErrorMessage name="image" component="div" />
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-5">
                  <label
                    htmlFor="description"
                    className="text-lg font-semibold"
                  >
                    Description:
                  </label>
                  <Field
                    as="textarea"
                    id="description"
                    name="description"
                    className="lg:w-[40vw] xl:w-[30vw] outline-none px-3 py-1 rounded-md text-lg my-3 bg-white bg-opacity-40 backdrop-blur-sm text-zinc-700"
                  />
                  <ErrorMessage name="description" component="div" />
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-5">
                  <label
                    htmlFor="releaseYear"
                    className="text-lg font-semibold"
                  >
                    Release Year:
                  </label>
                  <Field
                    type="text"
                    id="releaseYear"
                    name="releaseYear"
                    className="lg:w-[40vw] xl:w-[30vw] outline-none px-3 py-1 rounded-md text-lg my-3 bg-white bg-opacity-40 backdrop-blur-sm text-zinc-700"
                  />
                  <ErrorMessage name="releaseYear" component="div" />
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-5">
                  <label htmlFor="rating" className="text-lg font-semibold">
                    Rating:
                  </label>
                  <Field
                    type="number"
                    id="rating"
                    name="rating"
                    className="lg:w-[40vw] xl:w-[30vw] outline-none px-3 py-1 rounded-md text-lg my-3 bg-white bg-opacity-40 backdrop-blur-sm text-zinc-700"
                  />
                  <ErrorMessage name="rating" component="div" />
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-5">
                  <label htmlFor="pages" className="text-lg font-semibold">
                    Page Numbers:
                  </label>
                  <Field
                    type="number"
                    id="pages"
                    name="pages"
                    className="lg:w-[40vw] xl:w-[30vw] outline-none px-3 py-1 rounded-md text-lg my-3 bg-white bg-opacity-40 backdrop-blur-sm text-zinc-700"
                  />
                  <ErrorMessage name="pages" component="div" />
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-5">
                  <label htmlFor="category" className="text-lg font-semibold">
                    Category
                  </label>
                  <Field
                    as="select"
                    id="category"
                    name="category"
                    className="lg:w-[40vw] xl:w-[30vw] outline-none px-3 py-1 rounded-md text-lg my-3 bg-white bg-opacity-40 backdrop-blur-sm text-zinc-700"
                  >
                    <option value="">Select a category</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Non-Fiction">Non-Fiction</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                    <option value="Romance">Romance</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Self-help">Self-help</option>
                    <option value="True-Crime">True-Crime</option>
                  </Field>
                  <ErrorMessage name="category" component="div" />
                </div>
                <button
                  type="submit"
                  className="bg-green-600 px-4 py-1 rounded-md text-white hover:bg-green-700 transition-all w-full"
                >
                  Add Book
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
