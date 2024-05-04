'use client'

import { useRouter } from 'next/router';
import Link from 'next/link';

import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
} from 'next-share';

import { ProductJsonLd } from 'next-seo';

import { getProducts } from "../../firebase/firestore/getData";

export default function ProductPage({ products }) {

    const router = useRouter();

    const product = products.find(p => p._id == String(router.query.product));

    if (product === undefined) {
        return (
            <>
                <p>
                    product not found
                </p>
                <Link href="/products" >
                    <p className="text-gray-600 hover:text-red-300"> See all products </p>
                </Link>
            </>
        )
    }

    return (
        <>
            <ProductJsonLd
                productName={product.title}
                images={[product.imageURL]+product.altImages}
                description={product.description}
                brand="Ash Smoked Fishes"
            />
            <main className="py-0 px-8">
                <div className='flex flex-col tablet:flex-row my-10'>
                    <div className='w-full tablet:w-1/2'>
                        <div className='flex tablet:flex-row'>
                            <div className='w-1/3'>
                                {
                                    product.altImages.map((imageURL, index) => (
                                        <img 
                                            key={index}
                                            src={imageURL}
                                            className='w-full h-auto'
                                        />
                                    ))
                                }
                            </div>
                            <div className='w-2/3'>
                                <img className='h-full object-cover' src={product.imageURL} alt="Product image" />
                            </div>
                        </div>
                        <div>
                            {/* icons with text under */}
                        </div>
                    </div>

                    <div className='w-full tablet:w-1/2 flex flex-col justify-center items-center'>
                        <div className='w-11/12 desktop:w-1/2 tablet:w-5/6 my-8 p-5 bg-white rounded-lg border border-gray-200 shadow-md'>
                            <div className='mb-8'>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight hover:text-red-300">
                                    <Link href={`/product/${product._id}`} prefetch={false}>
                                        <p>{product.title}</p>
                                    </Link>
                                </h5>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight hover:text-red-300">
                                    <Link href={`/category/${product.category}`}>
                                        <p>{product.category}</p>
                                    </Link>
                                </h5>
                                {
                                    (product.price > 0) && (
                                        <h3>£{product.price}</h3>
                                    )
                                }
                                <p>{product.description}</p>
                                <br />
                                {product.readyToEat ? <p>✔ Ready To Eat</p> : <p>⚠️ Needs Cooking</p>}
                            </div>
                            <p className='text-xl font-bold mb-2'>Share it on:</p>
                            <div className='flex justify-start'> {/* Action Buttons */}
                                <FacebookShareButton
                                    url={`https://www.ashsmokedfishes.co.uk/product/${product._id}`}
                                    quote={`Check out this ${product.title} from Ash Smoked Fishes...`}
                                    hashtag={'#ashsmokedfishes'}
                                >
                                    <FacebookIcon className='mr-8' size={42} round />
                                </FacebookShareButton><TwitterShareButton
                                    url={`https://www.ashsmokedfishes.co.uk/product/${product._id}`}
                                    title={`Check out this ${product.title} from Ash Smoked Fishes...`}
                                    hashtags={['ashsmokedfishes', 'aldeburghsmokehouse']}
                                >
                                    <TwitterIcon className='mr-8' size={42} round />
                                </TwitterShareButton>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

ProductPage.getInitialProps = async () => {

    const data = await getProducts();

    return { products: data };

}