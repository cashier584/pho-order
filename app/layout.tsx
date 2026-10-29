import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const font = Be_Vietnam_Pro({
    subsets: ["vietnamese", "latin"],
    weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
    title: "Quán Phở Bát Sứ – Đặt món",
    description: "Đặt món phở bằng điện thoại",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="vi">
        <body className={font.className}>{children}</body>
        </html>
    );
}