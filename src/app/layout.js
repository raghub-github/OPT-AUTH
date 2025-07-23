import { Toaster } from 'react-hot-toast'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'OTP Phone Auth App',
  description: 'Secure phone authentication with OTP',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 text-gray-900 flex items-center justify-center min-h-screen`}>
        {/* Global Toasts */}
        <Toaster position="top-center" toastOptions={{ duration: 3000 }} />

        {/* Page Content */}
        <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-xl">
          {children}
        </div>
      </body>
    </html>
  )
}
