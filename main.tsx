import { roboto } from "./app/layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <header>
          <h1>Hello Note Hub</h1>
        </header>

        <main>{children}</main>

        <footer>
          <p>
            Created <time dateTime="2025">2025</time>
          </p>
        </footer>
      </body>
    </html>
  );
}
