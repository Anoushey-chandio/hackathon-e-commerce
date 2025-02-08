import { FaPhoneAlt, FaMapMarkerAlt, FaRegClock } from 'react-icons/fa';
import Button from './button';

const ContactInfo = () => {
  return (
    <div className="py-16 px-4 sm:px-8 lg:px-16">
      {/* Heading and Paragraph */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Get in Touch with Us</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      {/* Contact Information and Form */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
        {/* Left side: Address, Phone, Working Hours */}
        <div className="space-y-8">
          {/* Address */}
          <div className="flex items-start space-x-4">
            <FaMapMarkerAlt className="text-2xl text-gray-600" />
            <div>
              <h3 className="font-semibold text-lg">Address</h3>
              <p className="text-gray-500">236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start space-x-4">
            <FaPhoneAlt className="text-2xl text-gray-600" />
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <p className="text-gray-500">Mobile: +(84) 546-6789</p>
              <p className="text-gray-500">Hotline: +(84) 456-6789</p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex items-start space-x-4">
            <FaRegClock className="text-2xl text-gray-600" />
            <div>
              <h3 className="font-semibold text-lg">Working Hours</h3>
              <p className="text-gray-500">Monday-Friday: 9:00 AM - 10:00 PM</p>
              <p className="text-gray-500">Saturday-Sunday: 9:00 AM - 9:00 PM</p>
            </div>
          </div>
        </div>

        {/* Right side: Form */}
        <div>
          <form className="space-y-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-700">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows={6}
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button label="Submit" outline={true} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
