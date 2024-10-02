import React from "react";

function Contact() {
  return (
    <section
      id="Contact"
      className="flex flex-col items-center justify-center min-h-screen bg-color-3"
    >
      <p className="text-5xl mb-10 reveal-top-contact">
        Contact <span className="text-color-1">Me</span>
      </p>
      <div class="w-full px-4 sm:px-8 md:px-16 lg:px-24">
        <div class="w-full px-4 sm:px-8 md:px-16 lg:px-24">
          <form class="w-full space-y-4 flex flex-col items-center justify-center">
            <div class="flex flex-wrap gap-4 justify-center w-full mt-4">
              <div class="w-full sm:w-[300px]">
                <input
                  class="bg-gray-600 appearance-none border-2 border-gray-600 rounded-lg w-full py-2 px-4 leading-tight focus:outline-none reveal-left-contact focus:text-white focus:bg-color-3"
                  id="inline-full-name"
                  type="text"
                  placeholder="Full Name"
                />
              </div>
              <div class="w-full sm:w-[300px]">
                <input
                  class="bg-gray-600 appearance-none border-2 border-gray-600 rounded-lg w-full py-2 px-4 leading-tight focus:outline-none reveal-right-contact focus:text-white focus:bg-color-3"
                  id="inline-email"
                  type="text"
                  placeholder="Email Address"
                />
              </div>
            </div>

            <div class="flex flex-wrap gap-4 justify-center w-full">
              <div class="w-full sm:w-[300px]">
                <input
                  class="bg-gray-600 appearance-none border-2 border-gray-600 rounded-lg w-full py-2 px-4 leading-tight focus:outline-none reveal-left-contact focus:text-white focus:bg-color-3"
                  id="inline-mobile"
                  type="text"
                  placeholder="Mobile Number"
                />
              </div>
              <div class="w-full sm:w-[300px]">
                <input
                  class="bg-gray-600 appearance-none border-2 border-gray-600 rounded-lg w-full py-2 px-4 leading-tight focus:outline-none reveal-right-contact focus:text-white focus:bg-color-3"
                  id="inline-subject"
                  type="text"
                  placeholder="Email Subject"
                />
              </div>
            </div>

            <div class="w-full sm:w-[616px]">
              <textarea
                class="bg-gray-600 appearance-none border-2 border-gray-600 rounded-lg w-full py-2 px-4 leading-tight focus:outline-none h-40 resize-none reveal-bottom-contact focus:text-white focus:bg-color-3"
                id="inline-message"
                placeholder="Your message"
              ></textarea>
            </div>

            <div class="mt-8 reveal-bottom-contact">
              <a
                href="#contact"
                class="px-4 py-2 bg-color-1 rounded-md transition-all hover:drop-shadow-[0_8px_10px_rgba(0,204,143,0.3)] "
              >
                Send Me the Message
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
