import { FaCopyright } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <section>
      <footer className="bg-gray-50 text-black py-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left px-6">
          
          {/* Address Column */}
          <div>
            <h2 className="font-bold text-gray-400 text-sm mb-2">400 University Drive Suite 200 Coral Gables,</h2>
            <h3 className="font-extralight text-sm">FL 33134 USA</h3>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="font-bold text-gray-400 mb-4">Links</h3>
            <ul className="space-y-2">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/productList">Shop</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h3 className="font-bold text-gray-400 mb-4">Help</h3>
            <ul className="space-y-2">
              <li><Link href="/payment-options">Payment Options</Link></li>
              <li><Link href="/returns">Returns</Link></li>
              <li><Link href="/privacy-policies">Privacy Policies</Link></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="font-bold text-gray-400 mb-4">Newsletter</h3>
            <p className="text-sm">Enter your email address</p>
            <input type="email" placeholder="Your email" className="w-full mt-2 p-2 border rounded-md" />
            <button className="mt-2 bg-black text-white py-2 px-4 rounded-md">Subscribe</button>
          </div>
        </div>
        
        <hr className="w-full border-t border-gray-400 my-6" />
      </footer>

      <div className="bg-gray-50 w-full h-12 flex items-center justify-center">
        <p className="text-black flex items-center text-sm">
          <FaCopyright className="mr-2" /> 2022 Meubel House. All rights reserved.
        </p>
      </div>
    </section>
  );
}
