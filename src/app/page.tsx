import NotificationBanner from "./ui/components/core/notification-banner";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="bg-red-500">
        <NotificationBanner />
        {/* navigation_bar */}
        <nav>
          {/* navigation_container */}
          <div>
            {/* logo */}
            <a href="#" className="bg-blue-500 inline-block">
              <Image
                src="/svg/core/logo.svg"
                width={133}
                height={44}
                alt="Laniakea"
              />
            </a>

            {/* tabs */}
            <div className="bg-blue-500 inline-block">
              <a href="/themed-jewelery">Themed Jewelry</a>
              <a href="/all-categories">All Categories</a>
              <a href="/customized">Customized</a>
              <a href="/explore">Explore</a>
              <a href="/support">Support</a>
            </div>

            {/* buttons */}
            <div className="bg-blue-500 inline-block">
              <a href="/search">search-svg</a>
              <a href="/cart">cart-svg</a>
              <a href="/language">language-svg</a>
              <a href="/sign-in">
                <button type="button">person-svg Sign in</button>
              </a>
            </div>
          </div>
        </nav>
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}
