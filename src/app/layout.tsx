import type { Metadata } from "next";
import "./globals.css";
import MasterLayout from "@/components/master/layout/MasterLayout";
import { ThemeProvider } from "@/components/master/Theme-provider"
import { solaimanlipi, sutonnyOMJ} from "../../public/font/font";




export const metadata: Metadata = {
  title: "বাংলায় শিখুন সি# ",
  description: "সি শার্প এর বাংলা টিউটোরিয়াল",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${solaimanlipi.className} ${sutonnyOMJ.variable} `}>
      <body>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <MasterLayout> 
        {children}
        </MasterLayout>
        </ThemeProvider>
        </body>
    </html>
  );
}
