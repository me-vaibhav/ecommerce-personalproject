import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div>
          <div className="p-4 flex flex-col gap-4">
        <div className="skeleton h-32 w-full "></div>
        <div className="skeleton h-4 w-[60%] "></div>
        <div className="skeleton h-4 w-full "></div>
        <div className="skeleton h-4 w-full "></div>
          </div>

<div className="flex">
<div className="flex px-4 w-[50%] flex-col gap-4">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-52"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>

        <div className="flex px-4 w-[25%] flex-col gap-4">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
        <div className="flex px-4 w-[25%] flex-col gap-4">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
</div>
      </div>
    </div>
  );
};

export default Home;
