import React from 'react';
import logo from "../../../image/simply2cloud.jpg";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";

const LoginPage = () => {

  const inputTag = [{
    type: "email",
    id: "username",
    name: "username",
    required: true,
    placeholder: "Enter your Email",
    icon: <PersonIcon className="absolute top-2 border-r border-black peer-focus:text-violet-700" />
  }, {
    type: "password",
    id: "password",
    name: "password",
    required: true,
    placeholder: "Enter Your Password",
    icon: <LockIcon className="absolute top-2 border-r border-black peer-focus:text-violet-700" />
  }]

  return (
    <>
      <section className="gradient-form h-[100vh] bg-neutral-200  dark:bg-neutral-700">
        <div className=" h-full p-10">
          <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200 md:w-[55%] mx-auto">
            <div className="w-full">
              <div className="block rounded-lg bg-white shadow-xl dark:bg-neutral-800 py-20 md:py-0">
                {/* Left column container */}
                <div className="px-4 md:px-0">
                  <div className="md:mx-6 md:p-12">
                    {/* Logo */}
                    <div className="text-center mt-4">
                      <img
                        className="mx-auto w-48"
                        src={logo}
                        alt="logo"
                      />
                    </div>
                    <form onSubmit={(e) => {
                      e.preventDefault()
                      console.log(e.target.values)
                    }}>
                      {/* Username input */}
                      {inputTag.map((element, index) => {
                        return (
                          <div className="relative my-4" data-te-input-wrapper-init>
                            <input
                              type={element.type}
                              id={element.id}
                              name={element.name}
                              required
                              className=" border border-gray-300 outline-none peer  block min-h-[auto] w-full pl-8 bg-transparent py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear focus:border-orange-600  focus:border rounded"
                              placeholder={element.placeholder}
                            />
                            {element.icon}
                          </div>
                        )
                      })}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <button
                          className={`mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 font-semibold mt-5 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]`}
                          type="submit"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                          style={{
                            background: "green",
                          }}
                        >
                          Login
                        </button>
                      </div>
                      {/* End of Loading Button */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LoginPage


// ${
//   selectedCategory === 0
//     ? " bg-blue-500  shadow-sm border border-white p-1 font-semibold"
//     : " bg-gray-800  border border-gray-700"
// }