import { FaRegSadTear } from "react-icons/fa";

export default function NotFound() {
  const notFound = "That page can't be found.";

  return (
    <div className="max-w-screen-2xl mx-auto flex justify-center">
      <div className="sm:text-3xl text-xl font-bold ">
        <div className="flex justify-center text-align my-10 mt-28">
          <FaRegSadTear size="200px" color="black" />
        </div>
        <h1 className="my-10">{`Oops! ${notFound}`}</h1>
      </div>
    </div>
  );
}
