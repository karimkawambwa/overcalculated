import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <div className="flex justify-between h-16 px-10 items-center">
              <div className="flex items-center space-x-8">
                <Link href="/">
                  <div className="p-5 text-center text-3xl">
                    <span className="text-orange-500">Over</span>calculated
                  </div>
                </Link>
              </div>
              <div className="flex space-x-4 items-center">
                <Link
                  href="/login"
                  className="bg-gray-600 px-4 py-2 rounded text-white hover:bg-orange-500 text-sm"
                >
                  SIGN IN / UP
                </Link>
              </div>
            </div>
          </nav>
        </header>
        <main className="w-screen min-h-screen flex flex-col items-center">
          {children}
        </main>
        <footer></footer>
      </body>
    </html>
  );
}
