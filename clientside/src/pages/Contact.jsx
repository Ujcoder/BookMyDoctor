import React from "react";
import { assets } from "../assets/assets";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="px-4 md:px-20">
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-16 text-sm">
        {/* Contact Image */}
        <div className="w-full md:max-w-[360px]">
          <img
            src={assets.contact_image}
            alt="Contact"
            className="w-full h-[300px] object-cover rounded-xl"
          />
        </div>

        {/* Office Info and Facilities */}
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600">OUR OFFICE</p>
          <p className="text-gray-500">
            Government Civil Hospital, Jalgaon <br />
            Maharashtra, India
          </p>
          <p className="text-gray-500">
            Tel: (0257)-123456789 <br />
            Email: BookMyDoctor@gmail.com
          </p>

          <p className="font-semibold text-lg text-gray-600">Our Facilities</p>
          <ul className="text-gray-500 list-disc list-inside space-y-1">
            <li>24/7 Emergency Medical Support</li>
            <li>Online Appointment Booking</li>
            <li>Specialist Doctor Consultations</li>
            <li>Digital Health Records & e-Prescriptions</li>
            <li>Secure Patient Data Management</li>
            <li>Instant SMS/Email Reminders</li>
            <li>Real-Time Appointment Status</li>
            <li>Health Check-Up Packages</li>
            <li>Video Consultations</li>
            <li>Multi-language Support</li>
          </ul>

          <p className="font-semibold text-lg text-gray-600">Follow Us</p>
          <div className="flex gap-4 text-xl text-blue-600">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gray-50 p-6 md:p-10 rounded-xl shadow-md mb-20 max-w-3xl mx-auto">
        <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">Send Us a Message</h3>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border rounded-md outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border rounded-md outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="p-3 border rounded-md outline-none focus:ring-2 focus:ring-blue-300"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
