"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Nguyễn Văn A",
    role: "Sinh viên Lịch sử",
    content:
      "Khóa học này cung cấp một cái nhìn toàn diện về chiến thắng Điện Biên Phủ. Tài liệu rất chi tiết và những giảng viên rất tâm huyết.",
    rating: 5,
  },
  {
    name: "Trần Thị B",
    role: "Giáo viên",
    content:
      "Tôi sử dụng nội dung từ khóa học này để dạy học sinh. Nó giúp các em hiểu rõ hơn về một giai đoạn quan trọng của lịch sử đất nước.",
    rating: 5,
  },
  {
    name: "Lê Minh C",
    role: "Nhà sử học",
    content:
      "Chất lượng nội dung cao, animation tạo sự hứng thú. Đây là một cách tuyệt vời để truyền tải kiến thức lịch sử cho thế hệ trẻ.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 md:px-8 bg-stone-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Lời nhận xét từ người học</h2>
          <p className="text-xl text-amber-100">Những đánh giá từ các học viên hài lòng</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-amber-600/10 border border-amber-500/30 p-6 flex flex-col h-full hover:bg-amber-600/20 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-amber-50 mb-6 flex-grow leading-relaxed">"{testimonial.content}"</p>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-amber-300 text-sm">{testimonial.role}</p>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
