import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/lib/theme-provider";
import { Header } from "@/components/layout/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OpenNyAI Legal Case Management",
  description: "Legal case management system for paralegals and legal aid workers",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico"
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
