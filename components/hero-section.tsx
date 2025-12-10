"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection({ scrollY }: { scrollY: number }) {
  const [particles, setParticles] = useState<
    { x: number; y: number; delay: number; duration: number }[]
  >([]);

  useEffect(() => {
    const positions = Array.from({ length: 20 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
    }));
    setParticles(positions);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-stone-900 via-amber-900 to-stone-800">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-amber-500 rounded-full opacity-60"
            initial={{
              x: p.x,
              y: p.y,
              opacity: 0,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Parallax background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJqRS8TgNx0wZtz4Z8V1n8RbGorMUZ2ei80QsheZOvGlpDaqqNMld_ncPExWM300Ubnwis8l2fIQldtVoUSTQCNVWypauIkOWs27MTEkRxoZsbB1-8nkG9n4asyj6X3eOHkey7uWLJvMk/s640/Chien-Tranh-Viet-Nam-War-2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top",
          opacity: 0.3,
          // transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-8 max-w-6xl">
        {/* Main heading with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-5xl mx-auto">
            <span className="block">Giai đoạn 1945–1954</span>
            <motion.span
              className="block text-amber-400"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Hành trình giữ vững độc lập và chiến thắng lịch sử Điện Biên Phủ
            </motion.span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-amber-100 mb-8 max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Giai đoạn 1945–1954 là thời kỳ bản lề của cách mạng Việt Nam – từ khi
          nước Việt Nam Dân chủ Cộng hòa ra đời đến chiến thắng Điện Biên Phủ
          lừng lẫy năm châu, chấn động địa cầu
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex gap-4 flex-col md:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <Button
            type="button"
            onClick={() =>
              document
                .getElementById("boicanh")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Khám phá ngay
          </Button>
          <Button
            type="button"
            onClick={() =>
              document
                .getElementById("boicanh")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            variant="outline"
            className="border-amber-400 text-amber-300 hover:bg-amber-400/10 px-8 py-6 text-lg rounded-lg transition-all duration-300 bg-transparent"
          >
            Tìm hiểu thêm
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute top-110 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          onClick={() =>
            document
              .getElementById("boicanh")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-amber-300 text-sm font-semibold">
              Cuộn xuống
            </span>
            <svg
              className="w-6 h-6 text-amber-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
