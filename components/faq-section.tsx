"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "Khóa học này dành cho ai?",
    answer:
      "Khóa học này dành cho bất kỳ ai muốn tìm hiểu về lịch sử Việt Nam, từ học sinh, sinh viên đến những người yêu thích lịch sử. Không cần có kiến thức nền tảng trước đó.",
  },
  {
    question: "Thời gian hoàn thành khóa học là bao lâu?",
    answer:
      "Khóa học có tổng cộng 12+ giờ nội dung. Thời gian hoàn thành phụ thuộc vào tốc độ học của bạn, thường từ 2-4 tuần nếu học thường xuyên.",
  },
  {
    question: "Tôi có thể học bất cứ lúc nào không?",
    answer:
      "Có, bạn sẽ có quyền truy cập trọn đời vào khóa học. Bạn có thể học bất kỳ lúc nào, bất kỳ nơi đâu, với bất kỳ thiết bị nào có kết nối internet.",
  },
  {
    question: "Chứng chỉ hoàn thành có được công nhận không?",
    answer:
      "Chứng chỉ hoàn thành được cấp bởi Viện Giáo dục Liên tục Việt Nam và công nhận rộng rãi. Nó có thể được thêm vào CV của bạn.",
  },
  {
    question: "Có hỗ trợ nếu tôi gặp khó khăn?",
    answer:
      "Có, bạn sẽ được hỗ trợ 24/7 qua email, forum cộng đồng, và các buổi hỏi đáp trực tiếp với giảng viên. Chúng tôi cam kết giúp bạn thành công.",
  },
  {
    question: "Có chính sách hoàn tiền không?",
    answer:
      "Có, chúng tôi cung cấp chính sách hoàn tiền 30 ngày. Nếu bạn không hài lòng, bạn có thể nhận lại toàn bộ tiền thanh toán.",
  },
  {
    question: "Tôi có thể tải xuống tài liệu để học offline không?",
    answer:
      "Có, tất cả tài liệu, slide, và ghi chú có thể được tải xuống để học offline. Bạn cũng có thể tải video để xem sau này.",
  },
  {
    question: "Khóa học có bao gồm bài tập thực hành không?",
    answer: "Có, mỗi mô-đun bao gồm bài tập, câu hỏi trắc nghiệm, và các dự án nhỏ để giúp bạn cố định kiến thức.",
  },
]

export default function FAQSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-stone-900 to-stone-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Câu hỏi thường gặp</h2>
          <p className="text-xl text-amber-100">Tìm câu trả lời cho những câu hỏi phổ biến nhất</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card
                className="border border-amber-500/20 hover:border-amber-500/40 transition-all cursor-pointer overflow-hidden"
                onClick={() => setExpandedId(expandedId === index ? null : index)}
              >
                <div className="bg-gradient-to-r from-amber-600/10 to-amber-700/5 hover:from-amber-600/20 hover:to-amber-700/10 p-4 transition-all flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white flex-1">{faq.question}</h3>
                  <motion.div animate={{ rotate: expandedId === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  </motion.div>
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    height: expandedId === index ? "auto" : 0,
                    opacity: expandedId === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="bg-stone-700/50 px-4 py-4">
                    <p className="text-amber-50 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
