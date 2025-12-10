"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function HeroSection({ scrollY }: { scrollY: number }) {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-stone-900 via-amber-900 to-stone-800">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-amber-500 rounded-full opacity-60"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Parallax background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/placeholder.svg?height=1080&width=1920&query=Điện+Biên+Phủ+mountains+landscape)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-8 max-w-4xl">
        {/* Main heading with animation */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">Chiến Thắng</span>
            <motion.span
              className="block text-amber-400"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Điện Biên Phủ
            </motion.span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-amber-100 mb-8 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Tìm hiểu cuộc chiến lịch sử (1945-1954) - Một chiến công vĩ đại của dân tộc Việt Nam
        </motion.p>

        {/* Animated badge */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="inline-block bg-amber-500/20 border border-amber-400 rounded-full px-6 py-2 text-amber-300 font-semibold">
            Khóa học lịch sử VNR
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex gap-4 flex-col md:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 transform hover:scale-105">
            Bắt đầu học ngay
          </Button>
          <Button
            variant="outline"
            className="border-amber-400 text-amber-300 hover:bg-amber-400/10 px-8 py-6 text-lg rounded-lg transition-all duration-300 bg-transparent"
          >
            Tìm hiểu thêm
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-amber-300 text-sm font-semibold">Cuộn xuống</span>
            <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
