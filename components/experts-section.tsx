"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

const experts = [
  {
    name: "Prof. Nguyễn Văn Mạnh",
    role: "Giáo sư Lịch sử",
    bio: "Chuyên gia hàng đầu về lịch sử Việt Nam hiện đại với 30+ năm kinh nghiệm nghiên cứu",
    specialty: "Lịch sử chính trị & xã hội",
    image: "/professor-asian-male.jpg",
  },
  {
    name: "Dr. Trần Thị Hương",
    role: "Tiến sĩ Lịch sử Quân sự",
    bio: "Nhà nghiên cứu chiến lược quân sự của Đông Nam Á, tác giả nhiều tác phẩm học thuật",
    specialty: "Chiến lược & Tấn công",
    image: "/female-historian-asian.jpg",
  },
  {
    name: "GS.TS. Lê Minh Đức",
    role: "Học viên Viện Sử học",
    bio: "Cộng tác viên của các dự án lưu giữ tài liệu lịch sử quốc gia, chuyên gia về di sản",
    specialty: "Tài liệu & Di sản",
    image: "/scholar-historian-asian.jpg",
  },
  {
    name: "Tiến sĩ Phạm Hoàng Tuấn",
    role: "Nhà phân tích Chính sách",
    bio: "Chuyên gia về tác động địa chính trị của chiến thắng Điện Biên Phủ trên thế giới",
    specialty: "Địa chính trị & Quốc tế",
    image: "/asian-academic-male.jpg",
  },
]

export default function ExpertsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-stone-800 to-stone-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Các chuyên gia giảng dạy</h2>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Học từ những nhà sử học, giáo sư, và chuyên gia hàng đầu của Việt Nam
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {experts.map((expert, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-stone-700/50 border border-amber-500/20 overflow-hidden hover:border-amber-500/40 transition-all duration-300 group h-full">
                <div className="relative h-64 overflow-hidden bg-gradient-to-b from-amber-600/20 to-stone-700/50">
                  <img
                    src={expert.image || "/placeholder.svg"}
                    alt={expert.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{expert.name}</h3>
                  <p className="text-amber-400 font-semibold mb-3">{expert.role}</p>
                  <p className="text-amber-50 mb-4 text-sm leading-relaxed">{expert.bio}</p>
                  <div className="flex items-center gap-2 pt-4 border-t border-amber-500/20">
                    <span className="text-amber-300 text-xs font-semibold bg-amber-500/10 px-3 py-1 rounded-full">
                      {expert.specialty}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
