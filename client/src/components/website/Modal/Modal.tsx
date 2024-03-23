import React, { useState, useEffect } from "react";
import { useAuth } from "../../../hooks/auth/useAuth";
import { useAppDispatch } from "../../../redux/hooks";
import { login } from "../../../redux/slices/authThunk";
import api from "../../../services/api";

interface Modal {
  show: boolean;
  setShow: (x: any) => void;
}

interface State {
  email: string;
  password: string;
  username?: string;
  reference?: string;
}

export const Modal = ({ show, setShow }: Modal) => {
  const [isLogin, setIsLogin] = useState(true);
  const [checkbox, setCheckbox] = useState(false);
  const [state, setState] = useState<State>({
    email: "",
    password: "",
    username: "",
    reference: "",
  });
  const dispatch = useAppDispatch()

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const singin = async () => {
    dispatch(login({email: state.email, password: state.password}))
  }

  return (
    <>
      {show && (
        <div>
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <button
                    onClick={() => setShow(false)}
                    type="button"
                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="authentication-modal"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                  {isLogin ? (
                    <div className="px-6 py-6 lg:px-8">
                      <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                        Sign in to our platform
                      </h3>
                      <form className="space-y-6" action="#">
                        <div>
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Your email
                          </label>
                          <input
                            onChange={handleChange}
                            type="email"
                            name="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="name@company.com"
                            required
                          />
                        </div>
                        <div>
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Your password
                          </label>
                          <input
                            onChange={handleChange}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required
                          />
                        </div>
                        <div className="flex justify-between">
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id="remember"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                required
                              />
                            </div>
                            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                              Remember me
                            </label>
                          </div>
                          <a
                            href="#"
                            className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                          >
                            Lost Password?
                          </a>
                        </div>
                        <button
                          onClick={async (e) => {
                            e.preventDefault();
                            const r = await singin()
                            console.log(r)
                            setShow(false);
                          }}
                          type="submit"
                          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Login to your account
                        </button>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                          Not registered?{" "}
                          <a
                            onClick={() => setIsLogin(false)}
                            className="text-blue-700 hover:underline dark:text-blue-500"
                          >
                            Create account
                          </a>
                        </div>
                      </form>
                    </div>
                  ) : (
                    <div className="px-6 py-6 lg:px-8">
                      <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                        Sign up to our platform
                      </h3>
                      <form className="space-y-6" action="#">
                        <div>
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Your email
                          </label>
                          <input
                            onChange={handleChange}
                            type="email"
                            name="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="name@company.com"
                            required
                          />
                        </div>
                        <div>
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Your password
                          </label>
                          <input
                            onChange={handleChange}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required
                          />
                        </div>
                        <div>
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Your username
                          </label>
                          <input
                            onChange={handleChange}
                            type="text"
                            name="username"
                            id="password"
                            placeholder="user_999"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required
                          />
                        </div>
                        <div className="flex justify-between">
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id="remember"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                required
                              />
                            </div>
                            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                              Reference code (optional)
                            </label>
                          </div>
                        </div>
                        <button
                          onClick={async () => {
                            const response = await api.post("/auth/signup", {
                              email: state.email,
                              password: state.password,
                              username: state.username
                            })
                            console.log(response.data)
                          }}
                          type="submit"
                          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Sign up
                        </button>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                          Already have an account?{" "}
                          <a
                            onClick={() => setIsLogin(true)}
                            className="text-blue-700 hover:underline dark:text-blue-500"
                          >
                            Sign in
                          </a>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
