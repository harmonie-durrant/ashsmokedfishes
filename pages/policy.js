import Link from 'next/link';

import { NextSeo } from 'next-seo';

export default function Policy() {
    return(
        <>
            <NextSeo
                title="Privacy Policy | Ash Smoked Fishes"
                description="Our passion is smoking fish with a richer more delicious flavour while being minimally processed with simple ingredients. You will taste a wonderful harmony of flavours in our smoked fish."
            />
            <main className="py-0 px-2 tablet:px-8 text-base w-full flex justify-center">
                <div className='max-w-[1200px] mb-8 px-2 tablet:px-24'>
                    <h2 className="flex justify-center items-center text-4xl font-bold underline my-8 w-full">
                        Privacy Policy
                    </h2>
                    <p>
                    This privacy policy discloses the privacy practices for Ash Smoked Fishes. This privacy policy applies solely to information collected by this web site.
                    </p>
                    <h2 className="text-2xl font-bold py-4">
                        INFORMATION COLLECTION, USE, AND SHARING
                    </h2>
                    <p>
                        We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone.
                        We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organisation, other than as necessary to fulfill your request.
                    </p>
                    <h2 className="text-2xl font-bold py-4">
                        YOUR ACCESS TO AND CONTROL OVER INFORMATION
                    </h2>
                    <p>
                        You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address or phone number given on our website:
                    </p>
                    <p className='pl-8'>
                        - See what data we have about you, if any.
                    </p>
                    <p className='pl-8'>
                        - Change/correct any data we have about you.
                    </p>
                    <p className='pl-8'>
                        - Have us delete any data we have about you.
                    </p>
                    <p className='pl-8'>
                        - Express any concern you have about our use of your data.
                    </p>
                    <h2  className="flex justify-center items-center text-3xl font-bold my-8 w-screen hover:text-red-300">
                        <Link href="/contact">Contact us</Link>
                    </h2>
                </div>
            </main>
        </>
    )
}