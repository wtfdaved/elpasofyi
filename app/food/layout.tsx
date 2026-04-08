import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Food & Restaurants in El Paso, TX | elpaso.fyi',
  description: 'Discover El Paso\'s vibrant food scene with our comprehensive guide to the best local restaurants, street food, tacos, and dining experiences. Find where to eat in El Paso today.',
  keywords: 'El Paso food scene, best tacos, local restaurants, where to eat in El Paso, El Paso dining guide, best food El Paso, authentic Mexican food',
  openGraph: {
    title: 'Best Food & Restaurants in El Paso, TX',
    description: 'Your complete guide to El Paso\'s best food, tacos, and local dining spots.',
    url: 'https://elpaso.fyi/food',
    type: 'website',
  },
};

export default function FoodLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
