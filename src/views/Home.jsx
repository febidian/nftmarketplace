import React, { useEffect, useState } from "react";
import Cari from "../assets/icon/Cari";
import RowAtas from "../assets/icon/RowAtas";
import RowBawah from "../assets/icon/RowBawah";
import Annotion from "../assets/icon/Annotion";
import Notifikasi from "../assets/icon/Notifikasi";
import Notifikasi1 from "../assets/icon/Notifikasi1";
import Profil from "../assets/img/Profil.jpg";
import MaskGroup from "../assets/img/MaskGroup.png";
import RowDown from "../assets/icon/RowDown";
import axios from "axios";

import Ellipse75 from "../assets/img/Ellipse75.png";
import Ellipse76 from "../assets/img/Ellipse76.png";
import Ellipse77 from "../assets/img/Ellipse77.png";
import Ellipse78 from "../assets/img/Ellipse78.png";
import Ellipse79 from "../assets/img/Ellipse79.png";
import Love from "../assets/icon/Love";
import Logo from "../assets/icon/Logo";
import Dashboard from "../assets/icon/Dashboard";
import Tracsation from "../assets/icon/Tracsation";
import Note from "../assets/icon/Note";
import Gear from "../assets/icon/Gear";
import Boorkmark from "../assets/icon/Boorkmark";
import Menu from "../assets/icon/Menu";
// import Sidebar from "../component/Sidebar";
import Close from "../assets/icon/Close";

import DashboardDestop from "../assets/icon/destop/DashboardDestop";
import TracsationDestop from "../assets/icon/destop/TracsationDestop";
import NoteDestop from "../assets/icon/destop/NoteDestop";
import GearDestop from "../assets/icon/destop/GearDestop";
import BoorkmarkDestop from "../assets/icon/destop/BoorkmarkDestop";
import EthereumDestop from "../assets/icon/destop/EthereumDestop";

function Home(props) {
  const [artistop, setAristop] = useState({});
  const [artworks, setArtworks] = useState({});
  const [recents, setRecents] = useState({});
  const [load, setLoad] = useState(false);
  const [loadworks, setLoadworks] = useState(false);
  const [loadrecents, setLoadrecents] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const artis = async () => {
      let response = await axios.get(
        "https://6196ed95af46280017e7e326.mockapi.io/waveast/api/nft-marketplace/top-artist"
      );

      setAristop(response.data);
      setLoad(true);
    };
    artis();
  }, []);

  let data = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    const jobs = async () => {
      let response = await axios.get(
        "https://6196ed95af46280017e7e326.mockapi.io/waveast/api/nft-marketplace/featured-artworks"
      );
      setArtworks(response.data);
      setLoadworks(true);
    };
    jobs();
  }, []);
  useEffect(() => {
    const recentactivity = async () => {
      let response = await axios.get(
        "https://6196ed95af46280017e7e326.mockapi.io/waveast/api/nft-marketplace/recent-activities"
      );
      setRecents(response.data);
      setLoadrecents(true);
    };
    recentactivity();
  }, []);

  function date() {
    let d = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let da = days[new Date().getDay()];
    return [`${da} : ${d} : ${m} : ${s}`];
  }

  return (
    <div className="font-poopins flex flex-col">
      <div className="flex flex-row relative ">
        <div className={`${open ? "block " : "hidden "} md:hidden w-full `}>
          <div className="fixed  z-20 w-full bg-grayblue-500 h-screen flex flex-col  py-3 overflow-hidden">
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
                <button onClick={() => setOpen(false)}>
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
        {/* <Sidebar result={open} /> */}
        {/* sidebar */}
        <div className="w-20 z-10 h-full md:block sm:hidden hidden">
          <div className="w-20 fixed bg-grayblue-500 h-screen flex flex-col items-center py-3 overflow-hidden">
            <div className="pt-4 pb-5 border-gray-600 border-b-2 w-full flex justify-center">
              <div className="w-9 h-9 bg-violet-600 rounded-full flex justify-center items-center">
                <Logo />
              </div>
            </div>
            <div className="mt-7 space-y-5">
              <div className="flex flex-row ">
                <div className="bg-violet-800 py-4 px-1"></div>
                <div className="bg-grayblue-400 flex w-full py-5 pr-6 pl-4 ">
                  <button>
                    <DashboardDestop />
                  </button>
                </div>
              </div>
              <div className="flex flex-row ">
                <div className=" flex w-full py-6 px-6 ">
                  <button>
                    <TracsationDestop />
                  </button>
                </div>
              </div>
              <div className="flex flex-row ">
                <div className=" flex w-full py-5 px-6 ">
                  <button>
                    <NoteDestop />
                  </button>
                </div>
              </div>
              <div className="flex flex-row ">
                <div className=" flex w-full py-5 px-6 ">
                  <button>
                    <GearDestop />
                  </button>
                </div>
              </div>
              <div className="flex flex-row ">
                <div className=" flex w-full py-5 px-6 ">
                  <button>
                    <BoorkmarkDestop />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end sidebar */}
        {/* content */}
        <div className="flex lg:flex-row flex-col  w-full px-6 py-4 container lg:space-x-5">
          <div className="lg:w-8/12 w-full flex flex-col">
            <div className="flex flex-row items-center space-x-3 w-full lg:-mx-0 md:-mx-3">
              <div className="md:hidden block">
                <button
                  onClick={() => setOpen(!open)}
                  className="focus:outline-none "
                >
                  <Menu />
                </button>
              </div>
              <div className="bg-grayblue-500 lg:w-4/6 md:w-9/12 w-3/5 h-[56px] rounded-lg items-center flex flex-row px-4">
                <Cari />
                <input
                  type="text"
                  className=" bg-transparent py-3 px-4 text-base text-gray-100 w-full placeholder:text-gray-100 focus:outline-none"
                  placeholder="Search"
                />
              </div>
              <div className="w-2/6 h-14  hidden bg-grayblue-500 rounded-lg lg:flex flex-row items-center px-4">
                <div className="mr-3">
                  <EthereumDestop />
                </div>
                <div className="text-gray-100 text-base">543,694,489 ETH</div>
              </div>
              <div className="lg:hidden lg:w-1/4 md:w-3/12 w-2/5 flex flex-row  items-center space-x-3">
                <div className="flex fex-row space-x-3">
                  <div className="flex items-center bg-grayblue-500 rounded-full p-3">
                    <button>
                      <Annotion />
                    </button>
                  </div>
                  <div className="flex items-center bg-grayblue-500 rounded-full p-3">
                    <button>
                      <Notifikasi />
                    </button>
                  </div>
                </div>
                <div className="flex  flex-row items-center space-x-3 w-full">
                  <div className="h-12 w-12 rounded-full border-2 border-gray-300 object-center overflow-hidden">
                    <img
                      src={Profil}
                      className="h-full w-full  object-cover"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#6763FD] to-[#B84EF1] md:px-8 md:py-14 px-5 py-7 w-full  mt-7 rounded-xl relative">
              <img
                src={MaskGroup}
                alt=""
                className="absolute right-0 bottom-0 select-none w-4/12"
              />
              <div className="text-white lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-semibold">
                One Stop NFT Marketplace
              </div>
              <div className="text-white lg:text-xl md:text-lg text-base sm:mt-6 mt-4 md:w-3/5 w-full">
                Discover limited-edition digital artwork Create, Sell, and
                Collect yours now!
              </div>
              <div className="mt-7 flex flex-row items-center space-x-3">
                <div>
                  <button className="lg:text-lg sm:text-base text-sm text-violet-700 font-medium bg-white sm:py-3 sm:px-6 py-2 px-3 rounded-lg">
                    Start Create
                  </button>
                </div>
                <div>
                  <button className="lg:text-lg sm:text-base text-sm text-violet-700 font-medium bg-white sm:py-3 sm:px-6 py-2 px-3 rounded-lg">
                    How It works
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-8 text-gray-100 font-semibold text-xl">
              Explore
            </div>
            <div className="flex flex-row lg:space-x-4 space-x-2 items-center mt-5 py-4 px-2 overflow-x-auto snap-x scrollbar-hide">
              <button className=" bg-grayblue-500 rounded-3xl py-3 px-5  text-base whitespace-nowrap text-gray-100 ring-2 ring-violet-500 focus:ring-violet-700 transition duration-200 ">
                Live Action
              </button>
              <button className=" bg-grayblue-400 rounded-3xl py-3 px-5 text-gray-100 text-base  focus:ring-2 focus:ring-violet-700 transition duration-200">
                Art
              </button>
              <button className=" bg-grayblue-400 rounded-3xl py-3 px-5 text-gray-100 text-base focus:ring-2 focus:ring-violet-700 transition duration-200">
                Photography
              </button>
              <button className=" bg-grayblue-400 rounded-3xl py-3 px-5 text-gray-100 text-base focus:ring-2 focus:ring-violet-700 transition duration-200">
                Games
              </button>
              <button className=" bg-grayblue-400 rounded-3xl py-3 px-5 text-gray-100 text-base focus:ring-2 focus:ring-violet-700 transition duration-200">
                Music
              </button>
              <button className=" bg-grayblue-400 rounded-3xl py-3 px-5 text-gray-100 text-base focus:ring-2 focus:ring-violet-700 transition duration-200">
                Utility
              </button>
            </div>

            <div className="mt-7 flex md:flex-row w-full md:flex-wrap lg:-mx-2 overflow-x-auto snap-x scrollbar-hide">
              {loadworks
                ? artworks.slice(0, 6).map((job) => {
                    return (
                      <div
                        key={job.id}
                        className="lg:w-2/6 md:w-3/6 max-w-5xl lg:p-2 p-3 flex-shrink-0 w-72"
                      >
                        <div className="bg-grayblue-500 rounded-xl p-2 w-full flex flex-col ">
                          <div className="w-full object-center relative overflow-hidden">
                            <img
                              src={job.artworksUrl}
                              alt=""
                              className="w-full h-full object-cover rounded-md "
                            />
                            <div className="flex flex-row justify-between absolute top-0 inset-x-0 px-2 pt-2">
                              <div className="bg-white bg-opacity-50  rounded-xl py-1 px-2 flex items-center">
                                <div className="text-base font-medium text-white">
                                  Art
                                </div>
                              </div>
                              <div className="bg-white bg-opacity-50 rounded-full p-2  flex items-center">
                                <div className="text-base font-medium">
                                  <Love />
                                </div>
                              </div>
                            </div>
                            <div className="bg-grayblue-500 bg-opacity-70 py-1 absolute bottom-0 inset-x-0">
                              <span className="text-white font-medium text-sm flex justify-center">
                                Ends in : {date()}
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-row justify-between  mt-3 w-full">
                            <div className="text-white text-base">
                              Current Bid :{" "}
                            </div>
                            <div className="text-violet-600 text-base">
                              {job.currentBid}
                            </div>
                          </div>
                          <div className="text-white text-lg font-medium mt-5 ">
                            {job.name}
                          </div>
                          <div className="mt-4 border-t-2 border-gray-600 pt-4">
                            <div>
                              <div className="rounded-full flex flex-row">
                                <img
                                  src={Ellipse75}
                                  alt=""
                                  className="w-9 h-9"
                                />
                                <img
                                  src={Ellipse76}
                                  alt=""
                                  className="w-9 h-9 -ml-3"
                                />
                                <img
                                  src={Ellipse77}
                                  alt=""
                                  className="w-9 h-9 -ml-3"
                                />
                                <img
                                  src={Ellipse78}
                                  alt=""
                                  className="w-9 h-9 -ml-3"
                                />
                                <img
                                  src={Ellipse79}
                                  alt=""
                                  className="w-9 h-9 -ml-3"
                                />
                                <div className="bg-violet-600 w-10 h-10  rounded-full text-white font-medium -ml-3 flex items-center p-2 justify-center ">
                                  <div className="text-sm">100+</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : data.map((k, index) => {
                    return (
                      <div
                        key={index}
                        className="lg:w-2/6 md:w-3/6 flex-shrink-0 w-72 p-2 animate-pulse"
                      >
                        <div className="bg-grayblue-500 rounded-xl p-2 w-full h-72 flex flex-col ">
                          <div className="w-full rounded-xl object-center relative overflow-hidden bg-grayblue-400 h-44"></div>
                          <div className=" bg-grayblue-400 h-6 rounded-xl mt-3 w-full"></div>
                          <div className="bg-grayblue-400 h-8 rounded-xl mt-5 w-full "></div>
                          <div className="bg-grayblue-400 h-8 rounded-xl mt-4 w-full"></div>
                        </div>
                      </div>
                    );
                  })}
            </div>
          </div>
          {/* endd */}
          <div className="lg:w-4/12 w-full flex flex-col">
            <div className="lg:flex flex-row hidden items-center space-x-3">
              <div className="flex fex-row space-x-3">
                <div className="flex items-center bg-grayblue-500 rounded-full p-3">
                  <button>
                    <Annotion />
                  </button>
                </div>
                <div className="flex items-center bg-grayblue-500 rounded-full p-3">
                  <button>
                    {/* <Annotion /> */}
                    <Notifikasi1 />
                    {/* <Notifikasi /> */}
                  </button>
                </div>
              </div>
              <div className="flex  flex-row items-center space-x-3 w-full">
                <div className="h-12 w-12 rounded-full border-2 border-gray-300 object-center overflow-hidden">
                  <img
                    src={Profil}
                    className="h-full w-full  object-cover"
                    alt=""
                  />
                </div>
                <div className="text-gray-50 text-base">Marvin McKinney</div>
                <div>
                  <RowDown />
                </div>
              </div>
            </div>
            <div className="bg-grayblue-500 rounded-xl w-full py-5 px-7 mt-9">
              <div className="text-xl font-bold text-white">Top Artist</div>
              <div className="mt-5 lg:space-y-3 space-y-5 overflow-hidden">
                {load ? (
                  artistop.slice(0, 4).map((get, index) => {
                    return (
                      <div
                        key={index}
                        className="flex  justify-between space-x-3 items-center"
                      >
                        <div className="flex flex-row space-x-3 items-center">
                          <div className="text-lg font-bold text-white">
                            {index + 1}.
                          </div>
                          <div className=" h-12 w-12 rounded-full object-center overflow-hidden">
                            <img
                              src="https://i.pravatar.cc/300"
                              alt=""
                              className="h-full w-full object-cover rounded-full"
                            />
                          </div>
                          <div>
                            <span className="text-white text-base font-medium block">
                              {get.name}
                            </span>
                            <span className="text-sm text-gray-400">
                              @{get.username}
                            </span>
                          </div>
                        </div>
                        <div>
                          <button className="bg-gradient-to-br from-[#6763FD] to-[#B84EF1] py-2 px-4 rounded-lg text-white text-base">
                            Follow
                          </button>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="mt-5 space-y-4  animate-pulse">
                    <div className="flex flex-row space-x-3">
                      <div className="bg-grayblue-600 h-11 w-11 rounded-full"></div>
                      <div className="bg-grayblue-600 h-10 w-4/5 rounded-xl"></div>
                    </div>
                    <div className="flex flex-row space-x-3">
                      <div className="bg-grayblue-600 h-11 w-11 rounded-full"></div>
                      <div className="bg-grayblue-600 h-10 w-4/5 rounded-xl"></div>
                    </div>
                    <div className="flex flex-row space-x-3">
                      <div className="bg-grayblue-600 h-11 w-11 rounded-full"></div>
                      <div className="bg-grayblue-600 h-10 w-4/5 rounded-xl"></div>
                    </div>
                    <div className="flex flex-row space-x-3">
                      <div className="bg-grayblue-600 h-11 w-11 rounded-full"></div>
                      <div className="bg-grayblue-600 h-10 w-4/5 rounded-xl"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="bg-grayblue-500 rounded-xl w-full py-5 px-7 mt-9">
              <div className="text-xl font-bold text-white">
                Recent Activity
              </div>
              <div className="mt-5 space-y-4  overflow-hidden">
                {loadrecents ? (
                  recents.slice(0, 8).map((recent, index) => {
                    return (
                      <div
                        key={index}
                        className="flex  justify-between space-x-3 items-center w-full bg-grayblue-400 rounded-2xl py-3 px-3 transition duration-200 hover:bg-violet-300 hover:bg-opacity-40"
                      >
                        <div className="flex flex-row space-x-3 items-center">
                          <div className=" h-12 w-12 rounded-full object-center overflow-hidden">
                            <img
                              src="https://i.pravatar.cc/200"
                              alt=""
                              className="w-full h-full rounded-full object-cover"
                            />
                          </div>
                          <div>
                            <span className="text-white text-base font-medium block">
                              {recent.name}
                            </span>
                            <span className="text-sm text-gray-400">
                              {recent.message}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="mt-5 space-y-4  animate-pulse">
                    <div className="flex flex-row space-x-3">
                      <div className="bg-grayblue-600 h-12 w-12 rounded-full"></div>
                      <div className="bg-grayblue-600 h-11 w-4/5 rounded-xl"></div>
                    </div>
                    <div className="flex flex-row space-x-3">
                      <div className="bg-grayblue-600 h-12 w-12 rounded-full"></div>
                      <div className="bg-grayblue-600 h-11 w-4/5 rounded-xl"></div>
                    </div>
                    <div className="flex flex-row space-x-3">
                      <div className="bg-grayblue-600 h-12 w-12 rounded-full"></div>
                      <div className="bg-grayblue-600 h-11 w-4/5 rounded-xl"></div>
                    </div>
                    <div className="flex flex-row space-x-3">
                      <div className="bg-grayblue-600 h-12 w-12 rounded-full"></div>
                      <div className="bg-grayblue-600 h-11 w-4/5 rounded-xl"></div>
                    </div>
                    <div className="flex flex-row space-x-3">
                      <div className="bg-grayblue-600 h-12 w-12 rounded-full"></div>
                      <div className="bg-grayblue-600 h-11 w-4/5 rounded-xl"></div>
                    </div>
                    <div className="flex flex-row space-x-3">
                      <div className="bg-grayblue-600 h-12 w-12 rounded-full"></div>
                      <div className="bg-grayblue-600 h-11 w-4/5 rounded-xl"></div>
                    </div>
                    <div className="flex flex-row space-x-3">
                      <div className="bg-grayblue-600 h-12 w-12 rounded-full"></div>
                      <div className="bg-grayblue-600 h-11 w-4/5 rounded-xl"></div>
                    </div>
                    <div className="flex flex-row space-x-3">
                      <div className="bg-grayblue-600 h-12 w-12 rounded-full"></div>
                      <div className="bg-grayblue-600 h-11 w-4/5 rounded-xl"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* end content */}
      </div>
      <div className="mt-10 pb-5 flex justify-center items-center">
        <div className="text-base mr-5 mt-3 flex md:flex-row flex-col items-center  text-gray-300">
          <div>
            &copy; Copyright{" "}
            <a
              className="text-violet-400"
              target="_blank"
              rel="noopener noreferrer"
              href="https://imsaputra.my.id/"
            >
              Imsaputra.my.id &nbsp;
            </a>
          </div>
          <div>
            Desain UI by{" "}
            <a
              className="text-yellow-500"
              target="_blank"
              rel="noopener noreferrer"
              href="https://azhariemuhammad.notion.site/NFT-Marketplace-47b852dcc99f4181966988f363882915"
            >
              Mhdfariz
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
