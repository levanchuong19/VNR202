"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

const modules = [
  {
    id: 1,
    title: "Bối cảnh lịch sử",
    lessons: 4,
    color: "from-amber-600/30 to-amber-700/20",
    description: "Chiều sâu chính trị, xã hội Việt Nam thời kỳ 1945-1954",
  },
  {
    id: 2,
    title: "Chiến lược quân sự",
    lessons: 5,
    color: "from-red-600/30 to-red-700/20",
    description: "Phân tích các manuever quân sự, chiến thuật cơ động",
  },
  {
    id: 3,
    title: "Các nhân vật chủ chốt",
    lessons: 3,
    color: "from-orange-600/30 to-orange-700/20",
    description: "Lịch sử cuộc đời những vị tướng lĩnh tài ba",
  },
  {
    id: 4,
    title: "Tác động toàn cầu",
    lessons: 4,
    color: "from-yellow-600/30 to-yellow-700/20",
    description: "Ảnh hưởng của chiến thắng đến chính trị thế giới",
  },
  {
    id: 5,
    title: "Tài liệu sơ cấp",
    lessons: 6,
    color: "from-amber-500/30 to-amber-600/20",
    description: "Các công bố, lệnh chiến dịch, tài liệu gốc hiếm",
  },
  {
    id: 6,
    title: "Kết luận & Tương lai",
    lessons: 2,
    color: "from-amber-400/30 to-amber-500/20",
    description: "Bài học từ lịch sử, tầm quan trọng đối với ngày nay",
  },
]

export default function ModulesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-stone-900 to-stone-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Các mô-đun học tập</h2>
          <p className="text-xl text-amber-100">Khám phá 6 mô-đun tập trung về các khía cạnh khác nhau của lịch sử</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {modules.map((module) => (
            <motion.div key={module.id} variants={itemVariants} whileHover={{ y: -8, transition: { duration: 0.3 } }}>
              <Card
                className={`bg-gradient-to-br ${module.color} border border-amber-500/20 p-6 h-full cursor-pointer group hover:border-amber-500/50 transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    className="text-4xl font-bold text-amber-400 opacity-20"
                  >
                    {module.id}
                  </motion.div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {module.title}
                </h3>

                <p className="text-amber-50 mb-4 text-sm leading-relaxed">{module.description}</p>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="h-1 bg-gradient-to-r from-amber-600 to-amber-400 rounded mb-4"
                />

                <p className="text-amber-300 font-semibold text-sm">{module.lessons} bài học</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
