'use client'

import { useRouter } from 'next/router';
import ProductCard from '../../components/ProductCard';

import { NextSeo } from 'next-seo';

import { getProducts } from "../../firebase/firestore/getData";

export default function CategoryPage({ products }) {

    const router = useRouter();

    const productsByCategory = products.filter(p => p.category === router.query.category);

    return (
        <>
            <NextSeo
                title={`${router.query.category} - Categories - Ash Smoked Fishes`}
                description="Ash Smoked Fishes passion is smoking fish with a richer more delicious flavour while being minimally processed with simple ingredients. You will taste a wonderful harmony of flavours in our smoked fish, here on the beach of Aldeburgh."
            />
            <main className="py-0 px-8">
                <h2 className="text-3xl font-bold mb-8">Results for {router.query.category}</h2>
                <div className='flex justify-center items-center'>
                    <div className="grid gap-4 grid-cols-1 tablet:grid-cols-3 desktop:grid-cols-4 mb-44">
                        {productsByCategory.map((product) => (
                            <ProductCard key={product._id} product={product} diff={false} />
                        ))}
                    </div>
                </div>
                <h2 className="text-3xl font-bold mb-8">All Results</h2>
                <div className='flex justify-center items-center'>
                    <div className={"grid gap-4 grid-cols-1 tablet:grid-cols-3 desktop:grid-cols-4"}>
                        {products.map((product) => (
                            <ProductCard key={product._id} product={product} diff={false} />
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
};

CategoryPage.getInitialProps = async () => {

    const data = await getProducts();

    return { products: data };

}