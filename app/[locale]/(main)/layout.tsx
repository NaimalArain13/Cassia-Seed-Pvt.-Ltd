import Navbar from '@/components/layout/Navbar';
import SeasonMarquee from '@/components/layout/SeasonMarquee';
import Footer from '@/components/layout/Footer';
import WhatsAppFloatingButton from '@/components/shared/WhatsAppFloatingButton';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <SeasonMarquee />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
