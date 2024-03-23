import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import { Modal } from "../Modal/Modal";
import { useAppSelector } from "../../../redux/hooks";
import { UserIcon, BellIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import Selector from "./Selector";
import api from "../../../services/api";

const Header = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const games = useAppSelector((state) => state.games);
  const auth = useAppSelector((state) => state.auth);

  const getUser = async () => {
    const respons = await api.get("/user/info");
    console.log(respons.data);
    return;
  };

  return (
    <>
      <div className="flex bg-[#0F293E] justify-between px-8">
        <div>
          <img src={logo} alt="" className="w-[250px]" />
        </div>
        <div className="flex justify-center items-center">
          {isAuthenticated && <Selector />}
          <button
            // onClick={() => navigate("/settings", { state: 1 })}
            onClick={async () => {
              console.log(auth)
              const resp = await api.get("/blackjack/actives")
              console.log(resp.data)
            }}
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-xs px-5 py-2.5 mr-2 ml-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            DEPOSIT
          </button>
          <button
            onClick={async () => console.log({
              auth,
              games
            })}
            // onClick={() => navigate("/settings", { state: 2 })}
            type="button"
            className="text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg text-xs px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            WITHDRAW
          </button>
        </div>
        <div className="flex justify-center items-center">
          <button
            type="button"
            className="text-white font-medium rounded-lg text-sm mr-2 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            <BellIcon className="h-5 w-5 mr-4" />
          </button>
          {isAuthenticated ? (
            <button
              onClick={() => setShow(true)}
              type="button"
              className="text-white font-medium rounded-lg text-sm mr-2 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              <UserIcon className="h-5 w-5 self-center" />
            </button>
          ) : (
            <button
              onClick={() => setShow(true)}
              type="button"
              className="text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              ACCOUNT
            </button>
          )}
        </div>
      </div>
      <Modal show={show} setShow={setShow} />
    </>
  );
};

export default Header;
