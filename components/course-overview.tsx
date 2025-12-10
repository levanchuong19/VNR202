"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const overviewImages = [
  {
    src: "https://d4.violet.vn/uploads/blogs/735185/anh011_01.jpg",
    alt: "Hình ảnh tư liệu lịch sử 1",
  },
  {
    src: "https://hnm.1cdn.vn/2019/12/19/hanoimoi.com.vn-uploads-album-20191219-_87549af4-222e-4803-ae42-f1ca341b6e86.jpg",
    alt: "Hình ảnh tư liệu lịch sử 2",
  },
  {
    src: "https://d4.violet.vn/uploads/blogs/735185/bacho1.jpg",
    alt: "Hình ảnh tư liệu lịch sử 3",
  },
  {
    src: "https://hatinh.gov.vn/uploads/topics/16518947347121.jpeg",
    alt: "Hình ảnh tư liệu lịch sử 4",
  },
];

export default function CourseOverview() {
  return (
    <section
      id="vaitro"
      className="py-20 px-4 md:px-8 bg-gradient-to-b from-stone-800 to-stone-900"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Vai Trò Lãnh Đạo Của Đảng
          </h2>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Vai trò lãnh đạo của Đảng Cộng sản Việt Nam
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {[
            {
              title: "Xây dựng chính quyền cách mạng",
              description: "Xây dựng chính quyền cách mạng của nhân dân.",
            },
            {
              title: "Toàn quốc kháng chiến",
              description:
                "Phát động toàn quốc kháng chiến chống thực dân Pháp (1946)",
            },
            {
              title: "Xây dựng lực lượng vũ trang",
              description: "Xây dựng lực lượng vũ trang ba thứ quân",
            },
            {
              title: "Chiến tranh nhân dân toàn diện",
              description:
                "Lãnh đạo nhân dân tiến hành chiến tranh nhân dân toàn diện.",
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
              <h3 className="text-xl font-bold text-amber-400 mb-3">
                {feature.title}
              </h3>
              <p className="text-amber-50">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 mt-12">
          {overviewImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden bg-stone-800 border-amber-500/20 p-0 shadow-lg hover:shadow-amber-500/20 transition-all duration-300">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {[
            {
              title: "Chiến dịch Biên Giới 1950",
              description: "Mở ra bước ngoặt quan trọng cho cuộc kháng chiến.",
            },
            {
              title: "Xây dựng hậu phương kháng chiến",
              description:
                "Phát triển kinh tế, tự lực tự cường trong thời chiến.",
            },
            {
              title: "Đỉnh cao Điện Biên Phủ 1954",
              description:
                "Chiến thắng quyết định chấm dứt chiến tranh xâm lược.",
            },
            {
              title: "Hiệp định Giơ-ne-vơ",
              description:
                "Đánh dấu thắng lợi về ngoại giao của Việt Nam năm 1954.",
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
              <h3 className="text-xl font-bold text-amber-400 mb-3">
                {feature.title}
              </h3>
              <p className="text-amber-50">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
