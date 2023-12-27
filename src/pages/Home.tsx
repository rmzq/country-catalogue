import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";

const Home = () => {
  const [countries, setCountries] = useState<any[]>([]);

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
      <div className="grid grid-cols-3 gap-4">
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
