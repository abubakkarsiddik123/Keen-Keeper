import Image from "next/image";
import React from "react";


const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#244D3F] text-white p-10">
      <aside>
            <Image
                  src="/logo-xl.png"
                  alt="keen-keeper"
                  width={412}
                  height={61}
                ></Image>
        <p className="text-white/80">
         Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        <p className="text-xl font-medium">Social Links</p>
        <div className="flex items-center gap-3 mb-4 mt-4">
            <Image
                  src="/instagram.png"
                  alt="instagram"
                  width={40}
                  height={40}
                ></Image>
            <Image
                  src="/facebook.png"
                  alt="facebook"
                  width={40}
                  height={40}
                ></Image>
            <Image
                  src="/twitter.png"
                  alt="twitter"
                  width={40}
                  height={40}
                ></Image>
        </div>
        <div className="flex items-center justify-between container mx-auto">

        <p>© KeenKeeper {new Date().getFullYear()} - All right reserved</p>
        <div className="flex items-center  gap-8">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
        </div>
        </div>
      </aside>
    </footer>
  );
};

export default Footer;
