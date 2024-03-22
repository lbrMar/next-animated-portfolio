"use client"

import { motion } from "framer-motion"

const TestPage = () => {

  const variants = {
    variant1: {
      x: 400,
      y: 300,
    },
    variant2: {
      x: 200,
      y: -300,
      rotate: 75,
    }
  }

return (
  <div className="h-screen overflow-y-auto">
    {/* Adjusting the parent container height to h-screen for simplicity */}
    {/* Content to fill the height */}
    <div className="h-[calc(100vh-20px)] bg-gray-200">
      {/* Adjusting the height calculation to account for the sticky header's height */}
      Scrollable Content
    </div>
    <div className="h-20 sticky top-0 bg-white z-10">
      {/* Adding z-10 to ensure the sticky header stays above other content */}
      Test
    </div>
    <div className="h-[calc(100vh-20px)] bg-gray-200">
      {/* Adjusting the height calculation to account for the sticky header's height */}
      Scrollable Content
    </div>

  </div>
);
}

export default TestPage
