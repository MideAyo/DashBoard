import { Terminals } from "../data";
import { Link } from "react-router-dom";
import Terminalls from "../components/Terminalls";
import TerminalOverview from "../components/TerminalOverview";
import LineChart from "../components/Transacting";
import Map from "../components/Map";
import ArrowDown from "../images/ArrowDown.svg";
import { useGlobalContext } from "../context";

const Home = () => {
  const { date, month, year } = useGlobalContext();
  return (
    <section className="dashboard smd:mx-auto smd:container xxs:pl-0 mt-16 sm:mt-0   ">
      {/* dashboard-center  */}
      <div className="md:p-8 pt-8  ">
        {/* welcome back  */}
        <div className=" pl-16 md:pl-0 md:flex md:space-x-[10rem] lg:space-x-[14rem] large:space-x-[22rem]">
          {/* today  */}
          <div>
            <h3 className="text-[2rem]  font-700 text-textColor1">
              Welcome back,
            </h3>
            <p className="text-[1rem]  text-textColor1 font-400 ">
              Here's what is happening with your POS today
            </p>
          </div>
          {/* end of today  */}

          {/* date  */}
          <div className="flex space-x-3 items-center mt-4">
            <div className="sm:mt-4 text-navToggle ">
              <p>
                {date}th, {month} {year}
              </p>
            </div>

            <button className="sm:mt-4">
              <img src={ArrowDown} alt="arrowDown" />
            </button>
            {/* end of date  */}
          </div>
        </div>
        {/* end of welcome back  */}

        {/* links-container  */}
        <div className="smd:pl-8 md:pl-0 ">
          <div className="mt-10 flex items-center p-[.1rem] smax:space-x-4 smd:space-x-2 space-x-1 bg-white shadow-sm  px-5 rounded-lg md:w-[40rem] text-xs w-[100%] smax:text-sm  md:text-md font-600  ">
            <Link to="/transaction" className="">
              Transaction
            </Link>
            <Link to="/settlements">Settlements</Link>
            <Link to="/performance">Performance</Link>
            <Link
              to="/terminalHealth"
              className="bg-blue text-white  px-3 py-3 rounded-md"
            >
              Terminal Health
            </Link>
            <Link to="/bank">Bank Statement </Link>
          </div>
        </div>

        {/* Terminals  */}
        <div className="smax:grid max-w-5xl smax:grid-cols-2 smax:pl-16 md:pl-0 smax:gap-3 large:grid-cols-4 large:mr-16 large:gap-[6rem] lg:gap-1 exl:gap-[2rem]">
          {Terminals.map(function (terminal) {
            return <Terminalls {...terminal} key={terminal.id} />;
          })}
        </div>
        {/* end of terminals  */}

        {/* Terminal Health Overview  */}
        <TerminalOverview />

        {/* LineChart  */}
        <LineChart />

        <Map />
      </div>
    </section>
  );
};

export default Home;
