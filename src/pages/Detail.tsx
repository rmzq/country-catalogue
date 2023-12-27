import { Spinner } from "@material-tailwind/react";
import axios from "axios";
import { FunctionComponent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// type DetailProps = {
//   name: string;
//   officialName: string;
//   region: string;
//   flag: string;
// };

const Detail = () => {
  const { ccn3 } = useParams();
  const [country, setCountry] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/alpha/${ccn3}`)
      .then((res: any) => {
        setCountry(res.data?.[0]);
      })
      .catch((err: any) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleHome = (e: any) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div>
      {loading ? (
        <div className="grid place-content-center content-center h-max">
          <Spinner className="h-12 w-12" color="blue" />
        </div>
      ) : (
        <div>
          <div className="">
            <img
              src={country.flags?.png}
              alt="country-flag"
              className="max-w-80 max-h-48"
            />
          </div>
          <div className="grid grid-cols-3 max-w-2xl">
            {/* <h1>this is detail {ccn3}</h1> */}
            <span>Nama</span>
            <span>:</span>
            <span>{country.name?.common}</span>
          </div>
          <div className="mt-6">
            <span
              onClick={handleHome}
              className="p-2 bg-yellow-500 rounded-md hover:cursor-pointer text-slate-200 hover:bg-yellow-400"
            >
              Home
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
