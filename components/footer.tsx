"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <footer className="bg-gradient-to-b from-stone-900 to-stone-950 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
        >
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold text-lg mb-4">Khóa học</h4>
            <ul className="space-y-2 text-amber-100 text-sm">
              <li>
                <a href="#" className="hover:text-amber-400 transition">
                  Nội dung khóa học
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition">
                  Các mô-đun
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition">
                  Chứng chỉ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition">
                  Giảng viên
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold text-lg mb-4">Tài nguyên</h4>
            <ul className="space-y-2 text-amber-100 text-sm">
              <li>
                <a href="#" className="hover:text-amber-400 transition">
                  Blog lịch sử
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition">
                  Tư liệu tham khảo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition">
                  Thư viện ảnh
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition">
                  Bản đồ chiến dịch
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold text-lg mb-4">Công ty</h4>
            <ul className="space-y-2 text-amber-100 text-sm">
              <li>
                <a href="#" className="hover:text-amber-400 transition">
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition">
                  Liên hệ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition">
                  Chính sách quyền riêng tư
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition">
                  Điều khoản dịch vụ
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold text-lg mb-4">Theo dõi</h4>
            <ul className="space-y-2 text-amber-100 text-sm">
              <li>
                <a href="#" className="hover:text-amber-400 transition">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition">
                  YouTube
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition">
                  Instagram
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-amber-500/20 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-amber-100 text-sm text-center md:text-left">
              <p>© 2025 Khóa học Chiến Thắng Điện Biên Phủ. Bảo lưu mọi quyền.</p>
              <p className="mt-2">Một dự án của Viện Giáo dục Liên tục Việt Nam</p>
            </div>
            <div className="text-amber-400 text-sm font-semibold">Cùng tìm hiểu lịch sử, xây dựng tương lai</div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
