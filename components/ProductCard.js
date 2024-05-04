import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ProductCard({ product }) {

    const formatPrice = (price) => {
        return Number(price).toFixed(2);
    }

	const [isLoaded, setIsLoaded] = useState(false)

    return (
        <div className="max-w-lg card card-compact shadow-xl border">
            <figure>
				<Image data-loaded='false' onLoad={(e) => e.currentTarget.setAttribute('data-loaded', 'true')} src={product.imageURL} alt={product.name} height={1600} width={1200} className='data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-400 h-64 w-full content-center object-cover' />
			</figure>
            <div className="card-body">
                <div className="card-title text-3xl">
                    <Link href={'/product/'+product._id}>
                        {product.title}
                    </Link>
                    {
                        product.price > 0 ? (<div className="badge badge-primary">£{formatPrice(product.price)}</div>)
                        : (<></>)
                    }
                </div>
				<a href={'/category/'+product.category} className="hidden desktop:block badge badge-secondary">
					{product.category}
				</a>
                <p>{product.description}</p>
                <div className="card-actions justify-end">
                    <Link href={'/product/'+product._id}>
                        <button className="btn btn-primary">More Info</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};