"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { BookOpen, Users, Award, Zap, Globe, BarChart3 } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Nội dung toàn diện",
    description: "24 bài học chi tiết bao gồm các khía cạnh lịch sử, quân sự, chính trị và xã hội",
  },
  {
    icon: Users,
    title: "Học từ chuyên gia",
    description: "Giáo dạy bởi các nhà sử học, giáo sư đại học hàng đầu của Việt Nam",
  },
  {
    icon: Award,
    title: "Chứng chỉ hoàn thành",
    description: "Nhận chứng chỉ được công nhận sau khi hoàn thành khóa học",
  },
  {
    icon: Zap,
    title: "Truy cập trọn đời",
    description: "Một lần thanh toán, học bất cứ lúc nào, bất cứ nơi đâu",
  },
  {
    icon: Globe,
    title: "Tài liệu gốc",
    description: "Tiếp cận những tài liệu lịch sử quý giá, hiếm có từ các kho lưu trữ",
  },
  {
    icon: BarChart3,
    title: "Hỗ trợ học tập",
    description: "Tài liệu bổ sung, bài tập, quiz và hỗ trợ cộng đồng 24/7",
  },
]

export default function FeaturedSection() {
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
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-stone-900 to-stone-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Tại sao chọn khóa học này?</h2>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Khóa học được thiết kế với đầy đủ tính năng để bạn có trải nghiệm học tập tốt nhất
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-stone-700/50 border border-amber-500/20 p-6 h-full hover:bg-stone-700/70 hover:border-amber-500/40 transition-all duration-300 group">
                  <motion.div
                    className="mb-4 p-3 bg-amber-500/20 w-fit rounded-lg group-hover:bg-amber-500/30 transition-all"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Icon className="w-6 h-6 text-amber-400" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-amber-50 text-sm leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
