"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card } from "@/components/ui/card";

const modules = [
  {
    id: 1,
    title: "Âm mưu của Thực Dân Pháp",
    lessons: 4,
    color: "from-amber-500/30 to-amber-600/20",
    description: "Âm mưu xây dựng tập đoàn cứ điểm Điện Biên Phủ",
    details: [
      "Thực dân Pháp (được Mỹ hậu thuẫn) dựng Điện Biên Phủ thành tập đoàn cứ điểm mạnh nhất Đông Dương.",
      "Mục tiêu: thu hút chủ lực quân ta, tiêu diệt lực lượng kháng chiến, tạo lợi thế đàm phán.",
    ],
  },
  {
    id: 2,
    title: "Chủ trương của Đảng và chiến lược",
    lessons: 2,
    color: "from-amber-400/30 to-amber-500/20",
    description: "Quyết định lịch sử của Đảng và Bộ Chỉ huy",
    details: [
      "Đảng và Chủ tịch Hồ Chí Minh quyết định chuyển từ “đánh nhanh thắng nhanh” sang “đánh chắc, tiến chắc”.",
      "Chuẩn bị kỹ lưỡng về lực lượng, hậu cần và tinh thần chiến đấu.",
    ],
  },
  {
    id: 3,
    title: "Diễn biến 3 đợt tấn công lịch sử",
    lessons: 4,
    color: "from-amber-600/30 to-amber-700/20",
    description: "56 ngày đêm quyết chiến – quyết thắng",
    details: [
      "Đợt 1 (13–17/3/1954): Tiêu diệt Him Lam, Độc Lập.",
      "Đợt 2 (30/3–26/4/1954): Tấn công các cứ điểm phía Đông.",
      "Đợt 3 (1–7/5/1954): Tổng công kích, bắt sống tướng De Castries.",
    ],
  },
  {
    id: 4,
    title: "Sức mạnh hậu phương nhân dân",
    lessons: 3,
    color: "from-orange-600/30 to-orange-700/20",
    description: "Sức mạnh từ hậu phương và nhân dân",
    details: [
      "Hàng chục vạn dân công, thanh niên xung phong gùi gạo, kéo pháo, mở đường qua núi rừng Tây Bắc.",
      "Bảo đảm hậu cần cho chiến dịch 56 ngày đêm.",
      "Góp phần quyết định vào thắng lợi của chiến dịch.",
    ],
  },
  {
    id: 5,
    title: "Kết quả chiến dịch",
    lessons: 5,
    color: "from-red-600/30 to-red-700/20",
    description: "Kết quả vang dội của chiến thắng",
    details: [
      "Tiêu diệt và bắt sống hơn 16.000 quân Pháp.",
      "Làm sụp đổ hoàn toàn tập đoàn cứ điểm Điện Biên Phủ.",
      "Đập tan kế hoạch Nava của Pháp – Mỹ.",
    ],
  },
  {
    id: 6,
    title: "Ý nghĩa lịch sử toàn cầu",
    lessons: 4,
    color: "from-yellow-600/30 to-yellow-700/20",
    description: "Tầm vóc lịch sử và giá trị thời đại",
    details: [
      "Chiến thắng kết thúc thắng lợi cuộc kháng chiến chống Pháp.",
      "Buộc Pháp ký Hiệp định Giơ-ne-vơ 1954.",
      "Cổ vũ mạnh mẽ phong trào giải phóng dân tộc trên toàn thế giới.",
    ],
  },
];

export default function ModulesSection() {
  const [flippedId, setFlippedId] = useState<number | null>(null);
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="dienbienphu"
      className="py-20 px-4 md:px-8 bg-gradient-to-b from-stone-900 to-stone-800"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Chiến Thắng Điện Biên Phủ
          </h2>
          <p className="text-xl text-amber-100">
            Chiến thắng Điện Biên Phủ – Lừng lẫy năm châu, chấn động địa cầu
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {modules.map((module) => (
            <motion.div
              key={module.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <button
                onClick={() =>
                  setFlippedId(flippedId === module.id ? null : module.id)
                }
                className="w-full text-left focus:outline-none bg-gradient-to-br ${module.color} border border-amber-500/20 p-6 h-full cursor-pointer"
                aria-label={`Xem chi tiết ${module.title}`}
              >
                <div className="relative h-full  min-h-[290px] [perspective:1200px]">
                  <div
                    className={`relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] ${
                      flippedId === module.id
                        ? "[transform:rotateY(180deg)]"
                        : ""
                    }`}
                  >
                    <Card
                      className={`absolute inset-0 bg-gradient-to-br ${module.color} border border-amber-500/20 p-6 h-full cursor-pointer group hover:border-amber-500/50 transition-all duration-300 [backface-visibility:hidden]`}
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

                      <p className="text-amber-50 mb-4 text-sm leading-relaxed">
                        {module.description}
                      </p>

                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="h-1 bg-gradient-to-r from-amber-600 to-amber-400 rounded mb-4"
                      />
                    </Card>

                    <Card className="absolute inset-0 bg-stone-900/80 border border-amber-500/30 p-6 h-full text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      {/* <div className="flex items-center justify-between mb-3">
                        <span className="text-sm uppercase tracking-wide text-amber-300">
                          Mặt sau
                        </span>
                        <span className="text-lg font-bold text-amber-400">
                          #{module.id}
                        </span>
                      </div> */}
                      <h4 className="text-xl font-semibold text-amber-200 mb-0">
                        {module.title}
                      </h4>
                      <ul className="space-y-2 text-sm text-amber-50 leading-relaxed list-disc list-inside">
                        {module.details.map((line, idx) => (
                          <li key={idx}>{line}</li>
                        ))}
                      </ul>
                      <p className="mt-4 text-xs text-amber-300/80">
                        Nhấn lần nữa để lật về mặt trước.
                      </p>
                    </Card>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
