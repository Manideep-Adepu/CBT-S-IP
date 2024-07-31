"use client"
import { usePathname } from 'next/navigation';
import Header from '../components/nav'; // Adjust path as necessary
import Footer from '../components/footer'; // Adjust path as necessary

const ClientWrapper = ({ children }) => {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';

  return (
    <>
      {!isLoginPage && <Header />}
      {children}
      {!isLoginPage && <Footer />}
    </>
  );
};

export default ClientWrapper;
