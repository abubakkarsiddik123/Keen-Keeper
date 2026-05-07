import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/Components/Navbar/NavBar";
import Footer from "@/Components/Footer/Footer";
import ContextProvider, { FriendsContext } from "@/context/ContextProvider";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KeenKeeper | Friendship Tracker",
  description:
    "KeenKeeper - Track your friendships, calls, texts, and video interactions easily",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
       data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavBar />
        <ContextProvider>
          <main>{children}</main>
        </ContextProvider>
        <ToastContainer position="top-center" />
        <Footer />
      </body>
    </html>
  );
}
