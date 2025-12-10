"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

const modulesDetail = [
  {
    id: 1,
    title: "Bối cảnh lịch sử (1945-1953)",
    lessons: [
      "Tổng khởi nghĩa tháng Tám 1945",
      "Sự hình thành của Việt Minh",
      "Xung đột Pháp - Việt Minh ban đầu",
      "Chiến thuật di động và kiên cường",
    ],
  },
  {
    id: 2,
    title: "Chiến lược quân sự Điện Biên Phủ",
    lessons: [
      "Lựa chọn địa điểm chiến dịch",
      "Tập hợp và vận chuyển quân lực",
      "Phân tích lực lượng hai bên",
      "Các giai đoạn chiến dịch quyết định",
      "Tuyệt chiủ chiến pháp pháp quân",
    ],
  },
  {
    id: 3,
    title: "Các tướng lĩnh tài ba",
    lessons: [
      "Võ Nguyên Giáp - Tuyệt chiủ chiến lược",
      "Lê Duẩn - Người cộng sự đắc lực",
      "Phan Bội Châu - Nhân vật lịch sử",
      "Các trung tá, thiếu tá nổi bật",
    ],
  },
  {
    id: 4,
    title: "Ảnh hưởng toàn cầu",
    lessons: [
      "Tác động đến chính trị Đông Nam Á",
      "Ảnh hưởng đến phong trào độc lập thế giới",
      "Phản ứng quốc tế đến chiến thắng",
      "Bài học cho cuộc chiến tranh hiện đại",
    ],
  },
  {
    id: 5,
    title: "Tài liệu sơ cấp & Hiện vật",
    lessons: [
      "Sắc lệnh chiến dịch gốc",
      "Thư từ của các lãnh đạo",
      "Ảnh hiếm có từ chiến trường",
      "Hiện vật lưu giữ từ cuộc chiến",
      "Nhật ký chiến trường của lính",
      "Phim tư liệu độc quyền",
    ],
  },
  {
    id: 6,
    title: "Kết luận & Di sản",
    lessons: ["Bài học rút ra từ chiến thắng", "Ảnh hưởng đến phát triển đất nước", "Những địa điểm lịch sử hiện nay"],
  },
]

export default function ModulesDetailSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 md:px-8 bg-stone-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Chi tiết từng mô-đun</h2>
          <p className="text-xl text-amber-100">Nhấp vào để xem danh sách bài học chi tiết của mỗi mô-đun</p>
        </motion.div>

        <div className="space-y-4">
          {modulesDetail.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card
                className="border border-amber-500/20 hover:border-amber-500/40 transition-all cursor-pointer overflow-hidden"
                onClick={() => setExpandedId(expandedId === module.id ? null : module.id)}
              >
                <div className="bg-gradient-to-r from-amber-600/10 to-amber-700/5 hover:from-amber-600/20 hover:to-amber-700/10 p-6 transition-all flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-500/30 flex items-center justify-center text-amber-400 font-bold">
                      {module.id}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{module.title}</h3>
                      <p className="text-amber-300 text-sm">{module.lessons.length} bài học</p>
                    </div>
                  </div>
                  <motion.div animate={{ rotate: expandedId === module.id ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="w-6 h-6 text-amber-400" />
                  </motion.div>
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    height: expandedId === module.id ? "auto" : 0,
                    opacity: expandedId === module.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="bg-stone-700/50 px-6 py-4">
                    <ul className="space-y-2">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <motion.li
                          key={lessonIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: lessonIndex * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <span className="text-amber-400 font-bold mt-1">▸</span>
                          <span className="text-amber-50">{lesson}</span>
                        </motion.li>
                      ))}
                    </ul>
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
