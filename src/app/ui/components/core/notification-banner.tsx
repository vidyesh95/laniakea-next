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
      <div className="w-[1024px] flex justify-center ps-6 pe-18 relative">
        {/* banner_ad */}
        <Link
          href="https://play.google.com/"
          className="min-h-[40px] flex gap-1 items-center"
        >
          <p className="text-sm py-1">
            <span className="text-black">
              Download the Laniakea Store app available both on android and
              ios.&nbsp;
            </span>
            <span className="text-[#9C4330] underline">Download the App</span>
            <span className="text-[#9C4330]">&nbsp;&gt;</span>
          </p>
        </Link>
        {/* close_bannerbutton */}
        <button
          type="button"
          className="absolute top-1/2 end-4 p-2 -translate-y-1/2 hover:cursor-pointer "
        >
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
