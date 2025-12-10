"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const modulesDetail = [
  {
    id: 1,
    title: "Bối cảnh lịch sử (1945–1953)",
    lessons: [
      "Cách mạng Tháng Tám năm 1945",
      "Thành lập nước Việt Nam Dân chủ Cộng hòa",
      "Thực dân Pháp quay lại xâm lược Việt Nam",
      "Cuộc kháng chiến toàn quốc bùng nổ (1946)",
    ],
  },
  {
    id: 2,
    title: "Chiến lược quân sự tại Điện Biên Phủ",
    lessons: [
      "Lựa chọn Điện Biên Phủ làm điểm quyết chiến",
      "Chuẩn bị lực lượng và xây dựng trận địa",
      "So sánh tương quan lực lượng hai bên",
      "Phương châm: đánh chắc – tiến chắc",
      "Ba đợt tấn công chiến dịch lịch sử",
    ],
  },
  {
    id: 3,
    title: "Những người lãnh đạo tiêu biểu",
    lessons: [
      "Đại tướng Võ Nguyên Giáp – Tổng chỉ huy chiến dịch",
      "Chủ tịch Hồ Chí Minh – Người định hướng chiến lược",
      "Các tướng lĩnh và chỉ huy chủ chốt",
      "Tinh thần chiến đấu của bộ đội và nhân dân",
    ],
  },
  {
    id: 4,
    title: "Tầm ảnh hưởng quốc tế",
    lessons: [
      "Kết thúc ách thống trị của Pháp tại Đông Dương",
      "Thúc đẩy phong trào giải phóng dân tộc trên thế giới",
      "Tác động tới Hội nghị Giơ-ne-vơ năm 1954",
      "Nâng cao vị thế của Việt Nam trên trường quốc tế",
    ],
  },
  {
    id: 5,
    title: "Tư liệu lịch sử tiêu biểu",
    lessons: [
      "Hình ảnh tư liệu về chiến dịch Điện Biên Phủ",
      "Lệnh tác chiến và chỉ thị chiến trường",
      "Thư từ và tài liệu của các lãnh đạo",
      "Hiện vật lịch sử được lưu giữ",
      "Nhật ký và hồi ký của chiến sĩ",
      "Phim tư liệu về chiến dịch",
    ],
  },
  {
    id: 6,
    title: "Kết luận và bài học lịch sử",
    lessons: [
      "Bài học về sự lãnh đạo đúng đắn của Đảng",
      "Sức mạnh của khối đại đoàn kết dân tộc",
      "Tinh thần tự lực, tự cường và ý chí độc lập",
    ],
  },
];

export default function ModulesDetailSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="baihoc" className="py-20 px-4 md:px-8 bg-stone-900 ">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Bài Học Kinh Nghiệm
          </h2>
          <p className="text-xl text-amber-100">
            Bài học rút ra từ giai đoạn 1945–1954
          </p>
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
                onClick={() =>
                  setExpandedId(expandedId === module.id ? null : module.id)
                }
              >
                <div className="bg-gradient-to-r from-amber-600/10 to-amber-700/5 hover:from-amber-600/20 hover:to-amber-700/10 p-6 transition-all flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-500/30 flex items-center justify-center text-amber-400 font-bold">
                      {module.id}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {module.title}
                      </h3>
                      <p className="text-amber-300 text-sm">
                        {module.lessons.length} bài học
                      </p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedId === module.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
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
                          <span className="text-amber-400 font-bold mt-1">
                            ▸
                          </span>
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
  );
}
