import { Spinner } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
  });

  const handleHome = (e: any) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div>
      {loading ? (
        <div className="grid place-content-center content-center">
          <Spinner className="h-12 w-12" color="red" />
        </div>
      ) : (
        <div>
          <div className="grid place-content-center">
            <img
              src={country.flags?.png}
              alt="country-flag"
              className="max-w-80 max-h-48"
            />
          </div>
          <div className="grid grid-cols-3 gap-2 max-w-2xl mt-2">
            {/* <h1>this is detail {ccn3}</h1> */}
            <div className="w-4">Nama</div>
            <div className="w-2">:</div>
            <div>{country.name?.common}</div>
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
