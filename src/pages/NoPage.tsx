import { useNavigate } from "react-router-dom";

const NoPage = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  return (
    <div className="flex h-screen">
      <div className="m-auto flex flex-col">
        <span className="text-6xl text-red-600">Oops..</span>
        <span className=" text-xl">Halaman yang anda cari tidak ditemukan</span>
        <span
          onClick={handleHome}
          className="hover:underline text-blue-500 hover:cursor-pointer"
        >
          kembali ke halaman utama
        </span>
      </div>
    </div>
  );
};
export default NoPage;
