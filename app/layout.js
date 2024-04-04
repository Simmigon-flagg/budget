
import "bootstrap/dist/css/bootstrap.min.css"
import "./globals.css";
import { Inter } from "next/font/google";
import CartContext from "../libs/CartContext"
import NavbarComponent from "@/components/NavbarComponent";
import Footer from "../components/Footer"
import ThemeRegistry from "../theme/ThemePro"
const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Payment System Template",
  description: "Payment System Template to use with other apps",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter?.className}>
        {/* <ThemeProvider theme={theme}> */}
          <CartContext>
          <ThemeRegistry>
            <NavbarComponent />
            <div className="">
              <div className=''>version: {new Date().toISOString()}</div>
            </div>

            <div className="">
              {children}
            </div>

            <Footer />
          </ThemeRegistry>
          </CartContext>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
