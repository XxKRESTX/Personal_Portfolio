
import "./globals.css";



export const metadata = {
  title: "Nathan's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta charSet="utf-8" />
      <body>
        {children}
      </body>
    </html>
  );
}
