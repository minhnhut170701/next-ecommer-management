import ToolBar from "./components/ToolBar";
import "./globals.css";
import { Inter } from "next/font/google";
import ProviderCustom from "./components/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex space-x-10">
          <div className="h-screen w-[300px] bg-black p-10">
            <ToolBar />
          </div>
          <ProviderCustom>{children}</ProviderCustom>
        </div>
      </body>
    </html>
  );
}
