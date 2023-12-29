import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";

const Home = () => {
  const [countries, setCountries] = useState<any[]>([]);
  const [state, setState] = useState<number>(0);

  useEffect(() => {
    axios
      .get("/all")
      .then((res) => {
        setCountries(res.data);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h1 className="text-5xl mb-2">Country List</h1>
      <div className="flex justify-end">
        <span className="flex items-center">
          <input
            type="text"
            className="my-2 p-3 w-80 stroke-none outline-none rounded-l-lg"
            placeholder="Search.."
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-12 bg-indigo-50 rounded-r-lg hover:cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {countries.map((item) => {
          return (
            <Card
              key={item.ccn3}
              name={item.name.common}
              ccn3={item.ccn3}
              flag={item.flag}
            />
          );
        })}
      </div>
    </>
  );
};
export default Home;
