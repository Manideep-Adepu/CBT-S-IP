import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from './CartContext'; // Adjust path as necessary
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './AuthContext'; // Adjust path as necessary
import ClientWrapper from './ClientWrapper'; // Adjust path as necessary
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Solitude",
  description: "A Anonymous Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./favicon.png" />
      </Head>
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            <ClientWrapper>
              {children}
            </ClientWrapper>
            <ToastContainer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
