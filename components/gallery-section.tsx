"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

const galleryItems = [
  {
    type: "image",
    title: "Chiến trường Điện Biên Phủ",
    description: "Ảnh lịch sử quý giá từ năm 1954",
    image: "/Chien-Truong-Dien-Bi-02.jpg",
  },
  {
    type: "video",
    title: "Phim tư liệu độc quyền",
    description: "Những cảnh quay hiếm có từ cuộc chiến",
    image: "/tu-lieu.jpg",
    videoUrl: "https://vtv.vn/video/phim-tai-lieu-chien-thang-dien-bien-phu-ban-hung-ca-choi-loi-tap-1-674060.htm",
  },
  {
    type: "image",
    title: "Hiện vật lưu giữ",
    description: "Những vũ khí, quân phục từ thời kỳ chiến tranh",
    image: "/hien-vat.jpg",
  },
  {
    type: "image",
    title: "Bản đồ chiến lược",
    description: "Phân tích chi tiết vị trí quân đội hai bên",
    image: "/ban-do-chien-luoc.jpg",
  },
  {
    type: "video",
    title: "Phỏng vấn nhân chứng lịch sử",
    description: "Câu chuyện từ những người sống qua thời kỳ đó",
    image: "/phong-van.jpg",
    videoUrl: "https://www.youtube.com/watch?v=kPpJD6UzSPU",
  },
  {
    type: "image",
    title: "Tài liệu gốc",
    description: "Những bức thư, lệnh chiến dịch được số hóa",
    image: "/lenh.jpg",
  },
];

export default function GallerySection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="thuvien" className="py-20 px-4 md:px-8 bg-stone-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Thư viện Hình ảnh & Video
          </h2>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Khám phá hình ảnh lịch sử, video tư liệu, và hiện vật quý giá từ
            chiến dịch
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryItems.map((item, index) => {
            const CardContent = (
              <Card className="border border-amber-500/20 overflow-hidden cursor-pointer group h-full hover:border-amber-500/40 transition-all">
                <div className="relative h-48 overflow-hidden bg-stone-700">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {item.type === "video" && (
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-all"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Play className="w-12 h-12 text-white fill-white" />
                    </motion.div>
                  )}
                </div>
                <div className="p-4 bg-stone-700/50">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-amber-50 text-sm">{item.description}</p>
                </div>
              </Card>
            );
            return (
              <motion.div key={index} variants={itemVariants}>
                {/* Kiểm tra: Nếu có videoUrl thì bọc bằng thẻ a, nếu không thì hiển thị Card bình thường */}
                {item.videoUrl ? (
                  <a
                    href={item.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full" // Đảm bảo thẻ a bao phủ hết chiều cao
                  >
                    {CardContent}
                  </a>
                ) : (
                  CardContent
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
