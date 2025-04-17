import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Projects</h2>

      {/* 🛒 Project 1: Sales Data Analysis */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6"
      >
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          🛒 Sales Data Analysis
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          An in-depth data analysis project exploring one year of retail sales. Includes trends by month, city, and product using Python, Pandas, and Matplotlib.
        </p>
        <a
          href="https://github.com/amgadnazar/sales-data-analysis"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
        >
          🔗 View on GitHub
        </a>
      </motion.div>

      {/* 🧮 Project 2: Google Sheets KPI Dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6"
      >
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          🧮 Google Sheets KPI Dashboard
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          A Google Apps Script project that automates KPI calculations like total revenue, quantity sold, and monthly sales. Uses raw sales data in Google Sheets to create a dynamic, one-click dashboard.
        </p>
        <a
          href="https://github.com/amgadnazar/google-sheets-kpi-dashboard"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
        >
          🔗 View on GitHub
        </a>
      </motion.div>
    </section>
  );
}
