import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import emailjs from "@emailjs/browser";

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    specialRequests: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);

  const serviceId = "service_mweght9";
  const templateId = "template_ddic4dr";
  const userId = "1UZw1Eje3PQ68xFdd";

  const sendOtp = () => {
    if (!formData.email) {
      Swal.fire({
        icon: "warning",
        title: "Email Required",
        text: "Please enter your email before requesting an OTP.",
        confirmButtonColor: "#3085d6",
      });
      return;
    }

    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otpCode);
    setIsLoading(true);

    emailjs
      .send(
        "service_7lhqnqe",
        "template_aix7jbl",
        { user_email: formData.email, otp_code: otpCode },
        userId
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "OTP Sent!",
          text: `An OTP has been sent to ${formData.email}. Please check your inbox.`,
          confirmButtonColor: "#3085d6",
        });
        setIsOtpSent(true);
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Failed to send OTP. Please try again later.",
          confirmButtonColor: "#d33",
        });
      })
      .finally(() => setIsLoading(false));
  };

  const verifyOtp = () => {
    setIsVerifyingOtp(true);

    setTimeout(() => {
      if (otp === generatedOtp) {
        handleSubmit();
      } else {
        Swal.fire({
          icon: "error",
          title: "Invalid OTP!",
          text: "The OTP you entered is incorrect. Please try again.",
          confirmButtonColor: "#d33",
        });
      }
      setIsVerifyingOtp(false);
    }, 1000);
  };

  const handleSubmit = () => {
    setIsLoading(true);
  
    const emailParams = {
      to_email: formData.email,
      customer_name: formData.name,
      customer_email: formData.email,
      customer_phone: formData.phone,
      event_date: formData.date,
      event_time: formData.time,
      guests: formData.guests,
      special_requests: formData.specialRequests,
      message: `
        Hello Admin,
  
        A new booking has been made:
  
        - Name: ${formData.name}
        - Email: ${formData.email}
        - Phone: ${formData.phone}
        - Event Date: ${formData.date}
        - Event Time: ${formData.time}
        - Guests: ${formData.guests}
        - Special Requests: ${formData.specialRequests}
  
        Regards,
        Hotel Pooja.
      `,
    };
  
    emailjs
      .send(serviceId, templateId, emailParams, userId)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Reservation Submitted!",
          text: "Thank you for your reservation! Our team will contact you shortly.",
          confirmButtonColor: "#3085d6",
        }).then(() => {
          setIsSubmitted(true);
          setFormData({
            name: "",
            email: "",
            phone: "",
            date: "",
            time: "",
            guests: "2",
            specialRequests: "",
          });
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Email Failed!",
          text: `Something went wrong while sending the reservation details. Error: ${error.text}`,
          confirmButtonColor: "#d33",
        });
      })
      .finally(() => setIsLoading(false));
  };
  
  

  return (
    <motion.section
      id="reservations"
      className="py-20 bg-gradient-to-br from-white via-gray-100 to-white text-gray-800 relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-12 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Make a Reservation
        </motion.h2>

        {isSubmitted ? (
          <motion.div
            className="flex flex-col items-center justify-center text-green-500 text-xl font-semibold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CheckCircle size={50} className="mb-4 animate-bounce" />
            Reservation Confirmed!
          </motion.div>
        ) : isOtpSent ? (
          <motion.div className="space-y-6">
            <div>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Enter the OTP sent to your email"
                required
              />
              <button
                className="mt-2 w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition-all duration-300"
                onClick={verifyOtp}
                disabled={isVerifyingOtp}
              >
                {isVerifyingOtp ? "Verifying..." : "Verify OTP"}
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white shadow-xl p-8 rounded-xl border border-gray-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div className="group" whileHover={{ scale: 1.05 }}>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-400 rounded-lg text-gray-800 focus:border-blue-500 focus:outline-none transition-all duration-300"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </motion.div>

              <motion.div className="group" whileHover={{ scale: 1.05 }}>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-400 rounded-lg text-gray-800 focus:border-blue-500 focus:outline-none transition-all duration-300"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </motion.div>

              <motion.div className="group relative" whileHover={{ scale: 1.05 }}>
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full px-4 py-3 pl-10 bg-gray-50 border border-gray-400 rounded-lg text-gray-800 focus:border-blue-500 focus:outline-none transition-all duration-300"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </motion.div>

              <motion.div className="group relative" whileHover={{ scale: 1.05 }}>
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                <input
                  type="date"
                  name="date"
                  required
                  className="w-full px-4 py-3 pl-10 bg-gray-50 border border-gray-400 rounded-lg text-gray-800 focus:border-blue-500 focus:outline-none transition-all duration-300"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
              </motion.div>

              <motion.div className="group relative w-full" whileHover={{ scale: 1.05 }}>
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                <input
                  type="time"
                  name="time"
                  required
                  className="w-full px-4 py-3 pl-10 bg-gray-50 border border-gray-400 rounded-lg text-gray-800 focus:border-blue-500 focus:outline-none transition-all duration-300"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                />
              </motion.div>

              <motion.div className="group w-full" whileHover={{ scale: 1.05 }}>
                <select
                  name="guests"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-400 rounded-lg text-gray-800 focus:border-blue-500 focus:outline-none transition-all duration-300"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </motion.div>
            </div>

            <motion.div className="group" whileHover={{ scale: 1.05 }}>
              <textarea
                name="specialRequests"
                rows={4}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-400 rounded-lg text-gray-800 focus:border-blue-500 focus:outline-none transition-all duration-300"
                placeholder="Special Requests"
                value={formData.specialRequests}
                onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
              ></textarea>
            </motion.div>

            <motion.div className="text-center" whileHover={{ scale: 1.1 }}>
              <button
                type="button"
                className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-300"
                onClick={sendOtp}
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send OTP"}
              </button>
            </motion.div>
          </motion.form>
        )}
      </div>
    </motion.section>
  );
};

export default Reservation;