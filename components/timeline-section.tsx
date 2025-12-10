"use client";

import { motion } from "framer-motion";

const timelineEvents = [
  {
    year: "1945",
    title: "Nổi dậy cách mạng tháng Tám",
    description:
      "Việt Minh tổng khởi nghĩa, thành lập Việt Nam Dân chủ Cộng hòa",
  },
  {
    year: "1950-1953",
    title: "Giai đoạn chiến đấu ban đầu",
    description: "Quân Việt Minh phát triển sức mạnh, các chiến dịch tấn công",
  },
  {
    year: "1954 (I-III)",
    title: "Chuẩn bị chiến dịch Điện Biên Phủ",
    description: "Tổng huy động lực lượng, tập hợp quân đội, chuẩn bị tấn công",
  },
  {
    year: "1954 (IV-V)",
    title: "Chiến dịch Điện Biên Phủ",
    description: "Những trận chiến quyết định, thắng lợi lịch sử của Việt Minh",
  },
];

export default function TimelineSection() {
  return (
    <section id="thoigian" className="py-20 px-4 md:px-8 bg-stone-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          Dòng thời gian lịch sử
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-500 via-amber-400 to-amber-600" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-12 text-right" : "pl-12"
                  }`}
                >
                  <div className="bg-amber-600/10 border border-amber-500/30 rounded-lg p-6 hover:bg-amber-600/20 transition-all duration-300">
                    <h3 className="text-2xl font-bold text-amber-400 mb-2">
                      {event.year}
                    </h3>
                    <h4 className="text-xl font-semibold text-white mb-3">
                      {event.title}
                    </h4>
                    <p className="text-amber-50">{event.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <motion.div
                  className="w-6 h-6 bg-amber-500 rounded-full border-4 border-stone-800 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 bg-white rounded-full" />
                </motion.div>

                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
