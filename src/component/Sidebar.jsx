import React from "react";
import Boorkmark from "../assets/icon/Boorkmark";
import Dashboard from "../assets/icon/Dashboard";
import Gear from "../assets/icon/Gear";
import Logo from "../assets/icon/Logo";
import Close from "../assets/icon/Close";
import Note from "../assets/icon/Note";
import RowAtas from "../assets/icon/RowAtas";
import RowBawah from "../assets/icon/RowBawah";
import Tracsation from "../assets/icon/Tracsation";

function Sidebar({ result }) {
  return (
    <div className={`${result ? "block" : "hidden"}`}>
      <div className="absolute z-10 w-full bg-grayblue-500 h-full flex flex-col  py-3 overflow-hidden">
        <div className="pt-4 pb-5 border-gray-600 border-b-2 w-full flex justify-between items-center px-7">
          <div className="flex flex-row items-center">
            <div className="w-9 h-9 bg-violet-600 rounded-full flex justify-center items-center mr-4">
              <Logo />
            </div>
            <div className="text-violet-700 text-xl font-semibold">
              CuanMakers
            </div>
          </div>
          <div>
            <button>
              <Close />
            </button>
          </div>
        </div>
        <div className="px-6 mt-7">
          <div className="w-full h-16 flex bg-grayblue-700 rounded-lg  flex-row items-center px-5 ">
            <div className="mr-5">
              <RowAtas />
              <RowBawah />
            </div>
            <div className="text-gray-100 text-lg">543,694,489 ETH</div>
          </div>
        </div>
        <div className="mt-7 space-y-7">
          <div className="flex flex-row ">
            <div className="bg-violet-800 py-4 px-1"></div>
            <div className="bg-grayblue-400 flex w-full py-5 pr-6 pl-4 ">
              <button className="mr-5">
                <Dashboard />
              </button>
              <div className="text-gray-100 text-lg">Dashboard</div>
            </div>
          </div>
          <div className="flex flex-row ">
            <div className=" flex w-full py-6 px-6 ">
              <button className="mr-5">
                <Tracsation />
              </button>
              <div className="text-gray-100 text-lg">Activity</div>
            </div>
          </div>
          <div className="flex flex-row ">
            <div className=" flex w-full py-5 px-6 ">
              <button className="mr-5">
                <Note />
              </button>
              <div className="text-gray-100 text-lg">Transaction</div>
            </div>
          </div>
          <div className="flex flex-row ">
            <div className=" flex w-full py-5 px-6 ">
              <button className="mr-5">
                <Gear />
              </button>
              <div className="text-gray-100 text-lg">Setting</div>
            </div>
          </div>
          <div className="flex flex-row ">
            <div className=" flex w-full py-5 px-6 ">
              <button className="mr-5">
                <Boorkmark />
              </button>
              <div className="text-gray-100 text-lg">My Collection</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
