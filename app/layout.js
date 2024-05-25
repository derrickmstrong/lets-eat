import Header from '@/components/main-header/main-header';
import './globals.css';

export const metadata = {
  title: 'Let\'s Eat',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Header />
        {children}
      </body>
    </html>
  );
}
