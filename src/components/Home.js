import "./Home.css";
import i2 from "../images/logo4.gif";
import i3 from "../images/arrow2.png";
// import Skills from "./Skills";

const Home = () => {
  return (
    <>
      <div className="background-blur w-[200px] h-[200px] bg-purple-500 rounded-[100%] absolute z-10 top-[40%] left-[40%] translate-x-[-50%] translate-y-[-50%] blur-[80px]"></div>
      <div className="background-blur w-[200px] h-[200px] bg-blue-500 rounded-[100%] absolute z-10 top-[40%] left-[60%] translate-x-[-50%] translate-y-[-50%] blur-[90px]"></div>
      <div className="background-blur w-[200px] h-[200px] bg-pink-500 rounded-[100%] absolute z-10 top-[65%] left-[50%] translate-x-[-50%] translate-y-[-50%] blur-[90px]"></div>
      <div className="home-main flex  relaive">
        <div className="hero-heading relative ">
          <div className="first flex relative top-[25%] left-[20%] z-10">
            <p className="text-6xl font-bold">Hi</p>
          </div>
          <div className="second relative flex top-[28%] left-[20%] flex gap-3 z-10">
            <p className="no text-6xl font-black font-serif ">I </p>
            <p className="no2 text-6xl font-black font-serif "> am </p>

            <p className="hello text-6xl font-bold font-serif "> Chetan</p>
            <p className="hello text-6xl font-bold font-serif "> Agrawal</p>
          </div>
          <div className="third relative top-[35%] left-[20%] flex gap-3 z-10 flex flex-col">
            <p className="text-[20px] font-semibold text-gray-500 z-10">
              Full Stack Web Developer || Flutter Enthuaist || Precision-Crafted
            </p>
            <p className="text-[20px] font-semibold text-gray-500">
              Websites, Exceeding Expectations Every Time.
            </p>
            <div className="buttons flex gap-4">
              <div className="button1  w-[150px] rounded-lg mt-5 h-[50px] flex justify-center items-center  hover:scale-[1.1] transition duration-500 ease-in-out">
                <a
                  href="https://drive.google.com/file/d/1eICG_aA9AOKnoeef6J9WDrjGDtFS2h3X/view?usp=sharing"
                  download="resume.pdf"
                  className="text-white font-semibold"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-image ">
          <img
            className="image2  relative left-[25%] top-[10%] h-[500px] w-[700px] rounded-lg z-10"
            src={i2}
          ></img>
        </div>
      </div>

      {/* <Skills /> */}
    </>
  );
};
export default Home;
