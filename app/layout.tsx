import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Chiến Thắng Điện Biên Phủ - Khóa Học Lịch Sử VNR",
  description:
    "Tìm hiểu sâu về chiến thắng Điện Biên Phủ (1945-1954) - Một chiến công vĩ đại của dân tộc Việt Nam. Khóa học toàn diện với 12+ giờ nội dung từ các chuyên gia hàng đầu.",
  generator: "v0.app",
  keywords: "Điện Biên Phủ, lịch sử Việt Nam, khóa học, VNR, 1954",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
