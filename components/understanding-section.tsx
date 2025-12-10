"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BrainIcon } from "@/components/icons";
import {
  AlertTriangleIcon,
  ShieldAlertIcon,
  SkullIcon,
  SwordsIcon,
} from "lucide-react";

export function UnderstandingSection() {
  const periods = [
    {
      id: "1",
      title: "Nền kinh tế kiệt quệ sau chiến tranh",
      content:
        "Nhiều năm chiến tranh và bóc lột đã làm sản xuất đình đốn, ruộng đất bị bỏ hoang, công – thương nghiệp tê liệt, đời sống nhân dân vô cùng khó khăn.",
      icon: <AlertTriangleIcon size={28} />,
    },
    {
      id: "2",
      title: "Nạn đói khủng khiếp năm 1945",
      content:
        "Hơn 2 triệu người dân miền Bắc chết đói do chính sách vơ vét của phát xít Nhật – thực dân Pháp, để lại hậu quả nặng nề về nhân đạo và xã hội.",
      icon: <SkullIcon size={28} />,
    },
    {
      id: "3",
      title: "Chính quyền non trẻ, thù trong giặc ngoài",
      content:
        "Nhà nước Việt Nam Dân chủ Cộng hòa vừa ra đời phải đối mặt với nhiều thế lực phản động và khó khăn về kinh tế, chính trị, quân sự.",
      icon: <ShieldAlertIcon size={28} />,
    },
    {
      id: "4",
      title: "Thực dân Pháp âm mưu quay trở lại xâm lược",
      content:
        "Thực dân Pháp được sự hậu thuẫn từ bên ngoài đã quay lại Việt Nam, gây hấn và chuẩn bị chiến tranh, đe dọa trực tiếp nền độc lập non trẻ.",
      icon: <SwordsIcon size={28} />,
    },
  ];

  return (
    <section id="boicanh" className="py-20 px-4 md:px-8 bg-stone-900">
      {/* Background Image */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/bg-mac-lenin.jpg')` }}
      /> */}

      {/* Dark Overlay (tối hơn theo yêu cầu) */}
      <div className="absolute inset-0  "></div>

      {/* Content Layer */}
      <div className="relative max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-(--color-accent) via-amber-400 to-(--color-accent-light) bg-clip-text text-amber-400 font-bold">
              Phần 1: Bối Cảnh Lịch Sử
            </span>
          </h2>
          <p className="text-[--color-text-muted] text-lg">
            Sau thắng lợi của Cách mạng Tháng Tám năm 1945, nước Việt Nam Dân
            chủ Cộng hòa ra đời trong tình thế vô cùng khó khăn:
          </p>
        </motion.div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {periods.map((period) => (
            <AccordionItem
              key={period.id}
              value={period.id}
              className="border border-[--color-border] rounded-xl bg-[--color-surface]/80 backdrop-blur-md overflow-hidden transition-all"
            >
              <AccordionTrigger className="px-6 py-5 hover:bg-[--color-surface]/70 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-(--color-accent)">{period.icon}</span>
                  <span className="font-semibold text-lg text-[--color-text]">
                    {period.title}
                  </span>
                </div>
              </AccordionTrigger>

              <AccordionContent className="px-6 pb-5 text-[--color-text-muted] leading-relaxed bg-[--color-surface]/50 backdrop-blur-sm">
                {period.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Philosophy Section */}
        <motion.div
          className="mt-16 bg-[--color-surface]/80 border border-[--color-border] rounded-xl p-8 md:p-12 backdrop-blur-md"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-[--color-text] mb-8 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <BrainIcon size={32} />Ý nghĩa:
          </motion.h3>

          <div className="grid grid-cols-1  gap-8">
            {/* <div> */}
            <h4 className="text-xl font-semibold text-(--color-accent) mb-4">
              Đảng đã phải lãnh đạo đất nước vừa xây dựng chính quyền vừa chuẩn
              bị kháng chiến lâu dài.
            </h4>
            {/* </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
