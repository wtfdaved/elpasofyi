import Hero from './components/Hero';
import TheRadar from './components/TheRadar';
import FeaturedHighlight from './components/FeaturedHighlight';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="bg-dark-bg text-dark-text">
      <Hero />
      <TheRadar />
      <FeaturedHighlight />
      <Footer />
    </main>
  );
}
