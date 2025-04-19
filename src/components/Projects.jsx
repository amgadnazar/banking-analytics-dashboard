import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Projects</h2>

      {/* 🔲 Grid wrapper starts here */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 🛒 Project 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
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

        {/* 🧮 Project 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
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
        {/* 📊 Project: Eefaa Marketing Tableau Dashboard */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.6 }}
  viewport={{ once: true }}
  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6"
>
  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
    📊 Eefaa Marketing Dashboard (Tableau)
  </h3>
  <p className="text-gray-700 dark:text-gray-300 mb-4">
    An interactive Tableau dashboard analyzing Q1 2024 marketing performance at Eefaa Marketing Agency. Includes CPA, ROI, profit by region, and spend trends using Google Sheets + Tableau.
  </p>
  <div className="flex flex-wrap gap-4">
    <a
      href="https://public.tableau.com/views/EefaaMarketingDashboardQ12024/MarketingPerformanceDashboard"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-4 py-2 bg-purple-600 text-white font-semibold rounded hover:bg-purple-700 transition"
    >
      🌐 View on Tableau Public
    </a>
    <a
      href="https://github.com/amgadnazar/marketing-dashboard-tableau"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-4 py-2 bg-gray-900 text-white font-semibold rounded hover:bg-gray-700 transition"
    >
      💻 View on GitHub
    </a>
  </div>
</motion.div>

{/* 🏦 Project: Banking Analytics Dashboard (Power BI) */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.7 }}
  viewport={{ once: true }}
  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6"
>
  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
    🏦 Banking Analytics Dashboard (Power BI)
  </h3>

  {/* Dashboard Preview Image */}
  <img
    src="/images/banking-dashboard-preview.png"
    alt="Banking Analytics Dashboard Preview"
    className="w-full h-auto rounded mb-4 border dark:border-gray-700"
  />

  <p className="text-gray-700 dark:text-gray-300 mb-4">
    A financial dashboard that analyzes customer transactions and revenue using Power BI.
    It includes KPIs, year-over-year performance, top customers, and transaction breakdowns —
    fully interactive and inspired by real banking processes.
  </p>

  <div className="flex flex-wrap gap-4">
    <a
      href="https://github.com/amgadnazar/banking-analytics-dashboard"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-4 py-2 bg-gray-900 text-white font-semibold rounded hover:bg-gray-700 transition"
    >
      💻 View on GitHub
    </a>
  </div>
</motion.div>


      </div>
      {/* 🔲 Grid wrapper ends here */}
    </section>
  );
}
