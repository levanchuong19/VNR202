"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-stone-800 to-stone-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-amber-600/20 to-amber-700/20 border-2 border-amber-500/50 rounded-2xl p-8 md:p-12 text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Sẵn sàng khám phá lịch sử?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-amber-100 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Tham gia hàng nghìn học viên khác để tìm hiểu về một trong những chiến thắng vĩ đại nhất của lịch sử Việt
            Nam. Bắt đầu học ngay hôm nay!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg rounded-lg font-bold transition-all duration-300 w-full md:w-auto">
                Đăng ký ngay
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="border-amber-400 text-amber-300 hover:bg-amber-400/10 px-8 py-6 text-lg rounded-lg font-bold transition-all duration-300 w-full md:w-auto bg-transparent"
              >
                Liên hệ tư vấn
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 pt-8 border-t border-amber-500/30"
          >
            <p className="text-amber-200 text-sm">✓ Chứng chỉ hoàn thành • ✓ Hỗ trợ 24/7 • ✓ Truy cập trọn đời</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
