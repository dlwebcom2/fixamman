import type React from "react"
import type { Metadata } from "next"
import { Tajawal } from "next/font/google"
import "./globals.css"

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-tajawal",
})

export const metadata: Metadata = {
  title: "مركز صيانة عمان المعتمد | صيانة الأجهزة الكهربائية في الأردن",
  description:
    "أفضل شركة لصيانة الغسالات والثلاجات والجلايات والمكيفات في عمان الأردن. خدمة منزلية سريعة وقطع غيار أصلية. اتصل الآن 0785580007",
  keywords: "صيانة غسالات، صيانة ثلاجات، صيانة جلايات، صيانة مكيفات، عمان، الأردن",
  openGraph: {
    title: "مركز صيانة عمان المعتمد",
    description: "أفضل شركة لصيانة الأجهزة الكهربائية في عمان الأردن",
    locale: "ar_JO",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${tajawal.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
