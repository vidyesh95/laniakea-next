// import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function NotificationBanner() {
  // const [isCollapsed, setIsCollapsed] = useState(false);

  // if (isCollapsed) {
  //   return (
  //    null 
  //   ) 
  // }

  return (
    // collapsing_banner
    <section className="w-full bg-white flex justify-center">
      {/* banner_container */}
      <div className="w-[1024px] flex ps-6 pe-4 gap-2 bg-green-500">
        {/* banner_ad */}
        <Link
          href="https://play.google.com/"
          className="grow flex flex-wrap gap-1 justify-center items-center bg-amber-500"
        >
          <p className="text-sm">
            <span className="text-black">
              Download the Laniakea Store app available both on android and
              ios.&nbsp;
            </span>
            <span className="text-[#9C4330] underline">Download the App</span>
            <span className="text-[#9C4330]">&nbsp;&gt;</span>
          </p>
        </Link>
        {/* close_bannerbutton */}
        <button type="button" className="p-2 grow-0 hover:cursor-pointer">
          <Image
            src="/svg/core/close_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
            width={24}
            height={24}
            alt="Close banner"
          />
        </button>
      </div>
    </section>
  );
}
