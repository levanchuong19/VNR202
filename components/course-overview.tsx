"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

const stats = [
  { label: "Giờ học", value: "12+" },
  { label: "Bài học", value: "24" },
  { label: "Tài liệu", value: "100+" },
  { label: "Chuyên gia", value: "5" },
]

export default function CourseOverview() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-stone-800 to-stone-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Khóa học toàn diện</h2>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Khám phá chi tiết lịch sử, chiến lược quân sự, và tác động của chiến thắng Điện Biên Phủ
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-amber-600/10 border-amber-500/30 p-6 text-center hover:bg-amber-600/20 transition-all duration-300">
                <p className="text-4xl font-bold text-amber-400 mb-2">{stat.value}</p>
                <p className="text-amber-100 font-semibold">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Nội dung phong phú",
              description: "Từ bối cảnh lịch sử đến chi tiết quân sự của cuộc chiến",
            },
            {
              title: "Học từ chuyên gia",
              description: "Được dạy bởi các nhà sử học hàng đầu của Việt Nam",
            },
            {
              title: "Tài liệu gốc",
              description: "Tiếp cận các tài liệu lịch sử quý giá và hiếm có",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-stone-700/50 border border-amber-500/20 rounded-lg p-6 hover:bg-stone-700/70 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-amber-400 mb-3">{feature.title}</h3>
              <p className="text-amber-50">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
