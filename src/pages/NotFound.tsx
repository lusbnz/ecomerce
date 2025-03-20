import { Link } from "react-router";
import { motion } from "motion/react";
import { Home } from "lucide-react";
import Container from "@/components/Container";
const NotFound = () => {
  return (
    <Container className="bg-gradient-to-b from-white to-gray-200 flex items-center justify-center py-20">
      <div className="max-w-xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <svg
            className="w-32 h-32 mx-auto mb-8"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
              stroke="#0E3989"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path
              d="M14 2V8H20"
              stroke="#0E3989"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
            />
            <motion.path
              d="M9.5 12.5L14.5 17.5"
              stroke="#0E3989"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 2 }}
            />
            <motion.path
              d="M14.5 12.5L9.5 17.5"
              stroke="#0E3989"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 2 }}
            />
          </svg>
          <h1 className="text-6xl font-bold text-gray-800 mb-4">
            <span className="text-primaryBlue">404</span> - Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Oops! It seems the page you're looking for has vanished into thin
            air. Don't worry, even the best bookings sometimes go astray!
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link to="/">
            <motion.button
              className="bg-[#0E3989] text-white px-6 py-3 rounded-full font-semibold inline-flex items-center transition duration-300 ease-in-out hover:bg-[#0A2D6D]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Home className="w-5 h-5 mr-2" />
              Return to Homepage
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </Container>
  );
};

export default NotFound;
