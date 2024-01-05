import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Swal from "sweetalert2";

const Home = () => {
  const [countries, setCountries] = useState<any[]>([]);
  const [state, setState] = useState<number>(0);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = () => {
    setLoading(true);
    axios
      .get(`/name/${search}`)
      .then((res: any) => {
        setCountries(res.data);
      })
      .catch((error: AxiosError) => {
        if(error.response?.status){
          Swal.fire({
            icon: "warning",
            title: 'Not Found',
            text: 'The country you are searching for is not found'

          })
          setCountries([])
        };
      })
      .finally(() => {
        setLoading(false);
      });
    setState(Math.random);
  };
  const keyDownSearch = (e: any) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("/all")
      .then((res) => {
        setCountries(res.data);
      })
      .catch((err: any) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <>
      <h1 className="text-5xl mb-2">Country List</h1>
      <div className="flex justify-end">
        <span className="flex items-center">
          <input
            type="text"
            className="my-2 p-3 w-80 stroke-none outline-none rounded-l-lg bg-white"
            placeholder="Search.."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onKeyDown={keyDownSearch}
          />
          <span onClick={handleSearch}>
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
        </span>
      </div>
      {loading ? (
        <div className="flex h-screen bg-inherit">
          <div className="m-auto">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {countries.map((item) => {
            return (
              <Card
                key={item.ccn3}
                name={item.name.common}
                ccn3={item.ccn3}
                flag={item.flag}
                officialName={item.name.official}
              />
            );
          })}
        </div>
      )}
    </>
  );
};
export default Home;
