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
    <div className="grid grid-cols-3 gap-4">
      {countries.map((item) => {
        return <Card key={item.cca2} name={item.name.common} />;
      })}
    </div>
  );
};
export default Home;
