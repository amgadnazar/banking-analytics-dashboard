import { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import Projects from "./components/Projects";
import Footer from "./components/Footer";


export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ email: "", message: "" });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://formspree.io/f/mgvadjdy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setIsSubmitted(true);
      setFormData({ email: "", message: "" });
    } else {
      alert("There was a problem sending your message.");
    }
  };

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold">Amjad Salih</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border"
          >
            {darkMode ? <Sun /> : <Moon />}
          </button>
        </div>

        <div className="text-4xl font-bold text-blue-500">Welcome to my page!</div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <h2 className="text-xl font-semibold mb-4">Turning data into decisions — one insight at a time.</h2>

          <section className="mb-10">
            <h3 className="text-lg font-semibold mb-2">About Me</h3>
            <p>
              Proficient computer science professional with a strong foundation in data analytics, programming, and technical support. Experienced in solving real-world tech issues in the banking sector and a recognized problem-solver in international coding competitions.
            </p>
          </section>

          <section className="mb-10">
            <h3 className="text-lg font-semibold mb-2">Skills</h3>
            <ul className="list-disc pl-5">
              <li>Python, R, SQL, Java, HTML/CSS/JavaScript</li>
              <li>Excel, Google Sheets, Tableau, SPSS</li>
              <li>Problem Solving, Leadership, Business Acumen</li>
            </ul>
          </section>

          <section className="mb-10">
            <h3 className="text-lg font-semibold mb-2">Certifications</h3>
            <ul className="list-disc pl-5">
              <li>Google Data Analytics (2023)</li>
              <li>Python for Data Science – IBM</li>
              <li>Google Digital Marketing & E-commerce (2024)</li>
              <li>Google Project Management Certificate</li>
            </ul>
          </section>


          <section className="mb-10">
            <h3 className="text-lg font-semibold mb-2">Experience</h3>
            <ul className="list-disc pl-5">
              <li><strong>Bank of Khartoum</strong> – IT Department (2023–Present)</li>
              <li><strong>IEEEXtreme</strong> – Top 5 in Sudan (2023)</li>
            </ul>

          </section>

          <section className="mb-10">
            <h3 className="text-lg font-semibold mb-2">Education</h3>
            <ul className="list-disc pl-5">
              <li>BSc in Computer Science – Sudan University of Science and Technology (Expected 2024)</li>
            </ul>
            
          </section>
          
          <section className="mb-10">
            <h3 className="text-lg font-semibold mb-2"></h3>
            <Projects />

          </section>


          <section className="mb-10">
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p>Email: amgadnazar11@gmail.com</p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/amjad-nazar" className="underline text-blue-400 font-bold">Amjad-Salih</a></p>
            <p>Location: Dubai, UAE</p>
          </section>

          

          {/* 📨 Contact Form (React-powered) */}
          <form onSubmit={handleSubmit} className="space-y-4 mt-10">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-2 border rounded 
                         bg-white text-black 
                         dark:bg-gray-700 dark:text-white 
                         placeholder-gray-500 dark:placeholder-gray-300 
                         border-gray-300 dark:border-gray-600
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full p-2 border rounded 
                         bg-white text-black 
                         dark:bg-gray-700 dark:text-white 
                         placeholder-gray-500 dark:placeholder-gray-300 
                         border-gray-300 dark:border-gray-600
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Send
            </button>
          </form>

          {isSubmitted && (
            <p className="text-green-500 font-semibold mt-2">
              ✅ Message sent successfully!
            </p>
          )}
          <Footer />
        </motion.div>
      </div>
    </div>
  );
}
