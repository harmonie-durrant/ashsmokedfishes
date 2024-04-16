import CategoryCards from '../components/CategoryCards';
import ImageSlider from '../components/ImageSlider';

import { NextSeo } from 'next-seo';

export default function Home() {
    return(
        <>
            <NextSeo
                title="Ash Smoked Fishes - Aldeburgh"
                description="Ash Smoked Fishes passion is smoking fish with a richer more delicious flavour while being minimally processed with simple ingredients. You will taste a wonderful harmony of flavours in our smoked fish, here on the beach of Aldeburgh."
            />
            <main className="py-0 px-2 tablet:px-8">
                <ImageSlider />
                <CategoryCards />
            </main>
        </>
    )
}