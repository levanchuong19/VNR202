"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const pricingPlans = [
  {
    name: "Gói Cơ bản",
    price: "299,000",
    description: "Hoàn hảo cho những người mới bắt đầu",
    features: [
      "Truy cập toàn bộ 24 bài học",
      "Tài liệu PDF đầy đủ",
      "Chứng chỉ hoàn thành",
      "Email support",
      "Truy cập 6 tháng",
    ],
    highlighted: false,
  },
  {
    name: "Gói Premium",
    price: "599,000",
    description: "Truy cập trọn đời và hỗ trợ ưu tiên",
    features: [
      "Tất cả tính năng Gói Cơ bản",
      "Truy cập trọn đời",
      "Video tư liệu độc quyền",
      "Hỗ trợ 24/7 ưu tiên",
      "Cập nhật nội dung miễn phí",
      "Diễn đàn cộng đồng riêng",
      "Tham gia sự kiện trực tiếp",
    ],
    highlighted: true,
  },
  {
    name: "Gói Doanh nghiệp",
    price: "Liên hệ",
    description: "Cho nhóm hoặc tổ chức",
    features: [
      "Tất cả tính năng Premium",
      "Giảm giá hàng loạt",
      "Tài khoản quản trị tập thể",
      "Báo cáo tiến độ chi tiết",
      "Hỗ trợ tùy chỉnh",
      "Tích hợp hệ thống",
    ],
    highlighted: false,
  },
]

export default function PricingSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Gói học tập</h2>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">Chọn gói phù hợp với nhu cầu của bạn</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ y: -8 }} className="h-full">
              <Card
                className={`h-full flex flex-col border-2 transition-all ${
                  plan.highlighted
                    ? "border-amber-500 bg-gradient-to-b from-amber-600/20 to-amber-700/10"
                    : "border-amber-500/20 bg-stone-700/30"
                } p-8 hover:border-amber-500/60 relative`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      Phổ biến nhất
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-amber-100 text-sm mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-amber-400">{plan.price}</span>
                  {plan.price !== "Liên hệ" && <span className="text-amber-100 ml-2">VND</span>}
                </div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mb-8">
                  <Button
                    className={`w-full py-6 font-bold text-lg rounded-lg transition-all ${
                      plan.highlighted
                        ? "bg-amber-500 hover:bg-amber-600 text-white"
                        : "bg-stone-600 hover:bg-stone-700 text-white"
                    }`}
                  >
                    {plan.price === "Liên hệ" ? "Liên hệ tư vấn" : "Đăng ký ngay"}
                  </Button>
                </motion.div>

                <div className="space-y-3 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                      <span className="text-amber-50">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-amber-100 text-lg mb-4">Tất cả gói đều có bảo hành</p>
          <p className="text-amber-50">30 ngày hoàn tiền 100% nếu không hài lòng • Truy cập trọn đời</p>
        </motion.div>
      </div>
    </section>
  )
}
