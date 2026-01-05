"use client";
import { useState } from "react";
import { SlideUp, FadeIn, } from "./Animations";
import { motion } from "framer-motion";
export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    robot: false,
  });
  const [errors, setErrors] = useState<any>({});
  const [submitted, setSubmitted] = useState(false);
  const validateForm = () => {
    let temp: any = {};
    if (!form.name.trim()) temp.name = "Name is required.";
    if (!form.email.trim()) {
      temp.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      temp.email = "Enter a valid email.";
    }
    if (!form.message.trim()) temp.message = "Message is required.";
    if (!form.robot) temp.robot = "Please confirm you're not a robot.";
    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setForm({ name: "", email: "", message: "", robot: false });
      setErrors({});
    }
  };

  return (
    <section className="w-full py-20 bg-primaryBg flex justify-center px-4">
      <div className="max-w-xl w-full text-center">
        
        {/* Success Notification */}
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 p-3 rounded-lg bg-green-500 text-white font-medium"
          >
            Message sent successfully!
          </motion.div>
        )}
        <SlideUp>
          <div className="bg-cardBg shadow-md rounded-xl bg-(--dw-bg) p-6 sm:p-8 text-left hover:shadow-[0_0_40px_#ffed29] transition-shadow duration-500">
            <h3 className="text-xl font-semibold text-textPrimary mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              
              {/* NAME FIELD */}
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={`w-full p-3 rounded-lg bg-primaryBg border ${
                    errors.name
                      ? "border-red-500"
                      : "border-gray-300 focus:border-buttonBg"
                  } text-textPrimary focus:outline-none focus:ring-2 focus:ring-buttonBg`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* EMAIL FIELD */}
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={`w-full p-3 rounded-lg bg-primaryBg border ${
                    errors.email
                      ? "border-red-500"
                      : "border-gray-300 focus:border-buttonBg"
                  } text-textPrimary focus:outline-none focus:ring-2 focus:ring-buttonBg`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* MESSAGE FIELD */}
              <div>
                <textarea
                  placeholder="Message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`w-full p-3 h-32 rounded-lg bg-primaryBg border ${
                    errors.message
                      ? "border-red-500"
                      : "border-gray-300 focus:border-buttonBg"
                  } text-textPrimary resize-none focus:outline-none focus:ring-2 focus:ring-buttonBg`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* ROBOT CHECKBOX */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.robot}
                  onChange={() => setForm({ ...form, robot: !form.robot })}
                  className="w-4 h-4"
                />
                <label className="text-textPrimary">I am not a robot</label>
              </div>
              {errors.robot && (
                <p className="text-red-500 text-sm -mt-2">{errors.robot}</p>
              )}

              {/* BUTTON */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-3 rounded-lg font-semibold bg-(--bg-button) text-[black]"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </SlideUp>
      </div>
    </section>
  );
}
