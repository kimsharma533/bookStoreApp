import { Link } from "react-router-dom";
function Contact() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-28 items-center text-center justify-center">
          <h1 className="text-2xl  md:text-4xl">
            {" "}
            Get in <span className="text-pink-500">Touch with Us!</span>
          </h1>
          <p className="mt-12">
            We’d love to hear from you! Whether you have questions, feedback, or
            just want to share your thoughts about our books and services, feel
            free to reach out. Our team is dedicated to providing you with the
            best experience possible, and we’re here to assist you.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 justify-center items-center">
          <span className="font-bold"> We’re Here to Help!</span>
          <br />
          At BookStore, we’re committed to providing you with exceptional
          support and service. Whether you have questions about our books, need
          assistance with an order, or want to share your thoughts, our team is
          ready to help.
        </div>
        <div className="mt-6">
          <span>
            Call Us Anytime!
            <br />
          </span>
          Phone: 567388726
          <br />
          Hours: Our operating hours, e.g.,Monday to Friday, 9 AM - 5 PM EST
          <br />
          <p className="mt-4">
            Reach out to us during our business hours, and one of our
            knowledgeable representatives will be available to assist you.
          </p>{" "}
          <br />
        </div>
      </div>
    </>
  );
}

export default Contact;
