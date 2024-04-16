import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '../components/ProductCard';

import { NextSeo } from 'next-seo';

export default function Products( { products } ) {

    return (
        <>
            <NextSeo
                title="Products - Ash Smoked Fishes"
                description="Our passion is smoking fish with a richer more delicious flavour while being minimally processed with simple ingredients. You will taste a wonderful harmony of flavours in our smoked fish."
            />
            <main className="py-0 px-8">
                <div className="m-2 flex-auto relative h-96">
                    <Image className="border-2 border-solid border-black" alt="productsTopImage" src="/images/productsTop.png" layout='fill' objectFit='cover' priority={true} />
                    <div className="absolute top-1/2 left-1/2 bg-white p-6 text-center -translate-x-1/2 -translate-y-1/2 opacity-80 border border-black border-solid">
                        <div>
							{
							(process.env.NODE_ENV === "development") ? "DEV" : "PROD"

							}
                            <h2 className='text-5xl font-bold mb-4'>Products</h2>
                            <p className='text-xl'>Browse our fish selection</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div className={"grid gap-4 grid-cols-1 tablet:grid-cols-3 desktop:grid-cols-4"}>
                        {products.map((product) => (
                            <ProductCard key={product._id} product={product} diff={false} />
                        ))}
                    </div>
                </div>
                <div className="m-2 flex-auto relative h-96">
                    <Image className="border-2 border-solid border-black" alt="productsBottomImage" src="/images/productsBottom.png" layout='fill' objectFit='cover' priority={false} />
                    <div className="absolute top-1/2 left-1/2 bg-white p-6 text-center -translate-x-1/2 -translate-y-1/2 opacity-80 border border-black border-solid">
                        <div>
                            <h2 className='text-5xl font-bold mb-4'>Products</h2>
                            <p className='text-xl'>Browse our fish selection</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

Products.getInitialProps = async () => {

    const res = await fetch((process.env.NODE_ENV === "development") ? `http://127.0.0.1:3000/api/products`: `https://www.ashsmokedfishes.co.uk/api/products`, { method: 'GET' });
    const {data} = await res.json()

    return { products: data };

}