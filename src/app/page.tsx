import NotificationBanner from "./ui/components/core/notification-banner";
import NavigationBar from "./ui/components/core/navigation-bar";

export default function Home() {
  return (
    <>
      <header>
        <NotificationBanner />
        <NavigationBar />
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}
