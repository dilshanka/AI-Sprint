import Calender from "@/section/Home/Calender";
import CustomerCalls from "@/section/Home/CustomerCalls";
import ProspectingCustomers from "@/section/Home/ProspectingCustomers";
import ToDoList from "@/section/Home/ToDo";
// import imgbc from "../assets/images/bg_images/imgbc.png";
import imglc from "../assets/images/bg_images/imglc.png";
import imgrc from "../assets/images/bg_images/imgrc.png";
import imgtc from "../assets/images/bg_images/imgtc.png";
import imgtr from "../assets/images/bg_images/imgtr.png";

const Home = () => {
  return (
    <div className="max-w-[1920px] mx-auto px-2 sm:px-4 py-10 sm:py-16 relative">
      <div className="hidden lg:block">
        {/* <img src={imgbc} alt="imgbc" className="absolute bottom-1/2 left-1/2" /> */}
        <img
          src={imglc}
          alt="imgbc"
          className="absolute z-0 top-0 right-0"
        />
        <img
          src={imgrc}
          alt="imgrc"
          className="absolute z-0 right-32 top-1/4"
        />
        <img
          src={imgtc}
          alt="imgtc"
          className="absolute z-0 bottom-0 left-40"
        />
        <img
          src={imgtr}
          alt="imgtr"
          className="absolute bottom-60 right-40 -z-10"
        />
      </div>
      <div>
        <Calender />
        <ToDoList />
        <CustomerCalls />
        <ProspectingCustomers />
      </div>
    </div>
  );
};

export default Home;
