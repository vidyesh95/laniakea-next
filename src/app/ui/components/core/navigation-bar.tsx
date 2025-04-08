import Image from "next/image";
import Link from "next/link";

export default function NavigationBar() {
  return (
    <nav className="w-full flex justify-center bg-[#E0BFB8]">
      {/* navigation_container */}
      <div className="w-[1024px] px-6 py-2 flex items-center justify-between">
        {/* logo */}
        <Link
          href="#"
          className="w-[133px] h-[44px] flex justify-center items-center"
        >
          <Image
            src="/svg/core/logo.svg"
            width={133}
            height={44}
            alt="Laniakea"
          />
        </Link>

        {/* tabs */}
        <div className="flex flex-wrap items-center">
          <Link href="/themed-jewelery" className="text-white text-sm p-3">
            Themed Jewelry
          </Link>
          <Link href="/all-categories" className="text-white text-sm p-3">
            All Categories
          </Link>
          <Link href="/customized" className="text-white text-sm p-3">
            Customized
          </Link>
          <Link href="/explore" className="text-white text-sm p-3">
            Explore
          </Link>
          <Link href="/support" className="text-white text-sm p-3">
            Support
          </Link>
        </div>

        {/* buttons */}
        <div className="flex flex-wrap gap-2.5">
          {/* outline_button_container */}
          <div className="flex flex-wrap">
            <Link href="/search" className="p-2.5">
              <Image
                src="svg/core/search_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
                width={24}
                height={24}
                alt="Search"
              />
            </Link>
            <Link href="/cart" className="p-2.5">
              <Image
                src="svg/core/local_mall_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
                width={24}
                height={24}
                alt="Cart"
              />
            </Link>
            <Link href="/language" className="p-2.5">
              <Image
                src="svg/core/language_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
                width={24}
                height={24}
                alt="Language"
              />
            </Link>
          </div>

          {/* sign_in_button */}
          <Link
            href="/sign-in"
            className="bg-[#9C4330] pl-4 pr-6 py-2.5 rounded-full flex items-center gap-2"
          >
            <Image
              src="/svg/core/person_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
              width={24}
              height={24}
              alt="Sign in"
            />
            <p className="text-sm text-white">Sign in</p>
          </Link>
        </div>
      </div>
    </nav>
  );
}
