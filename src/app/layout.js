import "./globals.css";

export const metadata = {
  title: "Pagina di accesso",
  description: "Pagina di accesso",
  icons: { icon: '/pagina-de-login.png' } //LOGO SE ENCONTRA NA PASTA PUBLIC
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="main">
        {children}
      </body>
    </html>
  );
}