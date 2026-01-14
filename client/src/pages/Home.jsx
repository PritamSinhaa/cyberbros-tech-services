import "react";
import Navbar from "../components/layout/Navbar";
import ButtonWithIcon from "../components/common/ButtonWithIcon";
import { FaArrowRight } from "react-icons/fa";


function Home() {

  const btnWhite = "text-black bg-white"

  return (
    <div
      id="home"
      className="bg-black/90 font-sens flex justify-center h-screen w-screen border-2 "
    >
      <Navbar />

      <div className="mt-40  text-white/90 w-270">
        <div className="w-[65%]">
          <h2 className="text-4xl font-medium leading-14">
          We build reliable, high-performing websites that help bussiness grow
          with confidence.
        </h2>

        <p className="text-white/60 text-xl my-8">
          Through Structured planning, clear communication , and attention to
          technical detail. We deliver web solutions that work seamlessly and scale with your bussiness needs.
        </p>

        <div className=" flex gap-4 mt-12">
            <ButtonWithIcon title={"Start a Project"} icon={<FaArrowRight className=" ml-2" color={btnWhite}/>}/>
            <ButtonWithIcon title={"View my Process"}/>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
