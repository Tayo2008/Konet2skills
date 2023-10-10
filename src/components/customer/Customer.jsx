import React from "react";

const Customer = () => {
  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-8 mx-auto">
          <div class="lg:flex lg:items-center lg:-mx-6">
            <div class="mt-8 lg:w-full lg:mx-6">
              <div class="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-3xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
                <h1 class="text-lg font-medium text-gray-700 uppercase text-center">
                  <strong>What do you want us to do for you</strong>
                </h1>

                <form class="mt-8">
                  <div class="flex-1">
                    <label class="block mb-3 text-sm text-gray-600 dark:text-gray-200">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      required
                      class="block w-full px-5 py-3 mb-4 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div class="flex-1">
                    <label class="block mb-3 text-sm text-gray-600 dark:text-gray-200">
                      Phone Number
                    </label>
                    <input
                      type="phone"
                      placeholder="Phone"
                      required
                      class="block w-full px-5 py-3 mb-4 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div class="flex-1 mt-6">
                    <label class="block mb-3 text-sm text-gray-600 dark:text-gray-200">
                      Email address
                    </label>
                    <input
                      type="email"
                      placeholder="johndoe@example.com"
                      required
                      class="block w-full px-5 py-3 mb-4 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div class="flex-1">
                    <label class="block mb-3 text-sm text-gray-600 dark:text-gray-200">
                      Address
                    </label>
                    <input
                      type="text"
                      placeholder="Address"
                      required
                      class="block w-full px-5 py-3 mb-4 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div class="w-full mt-6">
                    <label class="block mb-3 text-sm text-gray-600 dark:text-gray-200">
                      Description
                    </label>
                    <textarea
                      class="block w-full h-32 px-5 mb-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <button class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    get in touch
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Customer;
