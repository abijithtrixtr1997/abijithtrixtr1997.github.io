import { motion } from "framer-motion";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export const Connect = () => {
  const [message, setMessage] = useState<string>("");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send("service_jgwb1sj", "template_ucjuy2r", {
        message,
        // Optional: add more fields like name, email if your template uses them
        // user_name: "John Doe",
        // user_email: "john@example.com",
      })
      .then(
        (_) => {
          setFormSubmitted(true);
          setMessage(""); // Clear form
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error("Failed to send message. Error:", error);
        }
      );
  };

  return (
    <motion.div
      className="w-full py-24 px-6"
      id="connect-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-700"
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2" />

          <div className="p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">
              Connect with Me
            </h3>

            {formSubmitted ? (
              <motion.div
                className="bg-green-800 text-green-100 p-4 rounded-lg text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Thank you for your message! I'll get back to you soon.
              </motion.div>
            ) : (
              <form
                className="space-y-6"
                id="connectForm"
                onSubmit={handleSubmit}
              >
                <div className="space-y-2">
                  <label
                    htmlFor="connect-message"
                    className="block text-gray-300 font-medium"
                  >
                    Leave your message:
                  </label>
                  <input
                    type="text"
                    id="connect-message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your message here..."
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
