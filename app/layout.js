import Header from '@/components/main-header';
import './globals.css';
import HeaderBackground from '@/components/main-header-background';

export const metadata = {
  title: 'Let\'s Eat',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Header />
        <HeaderBackground />
        {children}
      </body>
    </html>
  );
}
