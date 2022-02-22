import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    };
    axios
      .post("https://usebasin.com/f/ab2214293c2b", userData)
      .then((response) => {
        // console.log(response.status);
        // console.log(response.data.token);
        if (response.status === 200) {
          swal({
            title: "Thanks for the message",
            text: "Your submission was received :)",
            icon: "success",
            button: "okay",
          });
        }
      })

      .catch((error) => {
        if (error.response) {
          swal({
            title: "Something Went Wrong",
            text: "please try after sometime:)",
            icon: "error",
            button: "okay",
          });
        } else if (error.request) {
          swal({
            title: "Network Error",
            text: "please try after sometime:)",
            icon: "error",
            button: "okay",
          });
        } else {
          swal({
            title: "Thanks for the message",
            text: "Your submission was received :)",
            icon: "success",
            button: "okay",
          });
        }
      });
  };

  return (
    <>
      <section className="container mx-auto pb-20 pt-10 px-6 md:px-0">
        <div className="flex items-center justify-between form-group flex-col sm:flex-row">
          <div className="basis-1/2 py-5 order-last md:order-first">
            <h1 className="header">Say Hello!</h1>
            <p className="highlight py-5">
              {`We love coffee and good conversations, if you'd like to meet us, feel free to drop by.`}
            </p>
            <div className="gmap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1705213995974!2d77.50796631443322!3d12.960937990862842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15f0c2e0cd7f%3A0xaa864935a9fe268!2sZysk%20Technologies!5e0!3m2!1sen!2sin!4v1571311716189!5m2!1sen!2sin"
                width="100%"
                height="380"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
          <div className="basis-2/5 py-5 w-full">
            <h1 className="header mb-5">Write to us!</h1>
            <form
              name="contact"
              autoComplete="off"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <label htmlFor="name" className=" block text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="John Doe"
                    className="mt-1 focus:ring-gray-300 focus:border-gray-300 block w-full shadow-sm  border-gray-300 rounded-md"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-span-6">
                  <label htmlFor="email" className=" block text-gray-700">
                    Email ID
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="test@example.com"
                    className="mt-1 focus:ring-gray-300 focus:border-gray-300 block w-full shadow-sm  border-gray-300 rounded-md"
                    onChange={handleChange}
                  />
                </div>

                <div className="col-span-6">
                  <label htmlFor="phone" className="block text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    pattern="[0-9]{10}"
                    id="phone"
                    placeholder="xxxxx xxxxx"
                    className="mt-1 focus:ring-gray-300 focus:border-gray-300 block w-full shadow-sm  border-gray-300 rounded-md"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-span-6">
                  <label htmlFor="Message" className="mb-1 block text-gray-700">
                    Message
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="shadow-sm block w-full focus:ring-gray-300 focus:border-gray-300  border border-gray-300 rounded-md"
                      defaultValue={""}
                      placeholder="Please enter your message"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <button
                className="btn btn-custom btn-black py-2 mt-5"
                type="submit"
              >
                Submit form
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
