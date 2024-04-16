import Image from 'next/image';

import { NextSeo } from 'next-seo';

export default function About() {
    return (
        <>
            <NextSeo
                title="About | Ash Smoked Fishes"
                description="Ash Smoked Fishes passion is smoking fish with a richer more delicious flavour while being minimally processed with simple ingredients. You will taste a wonderful harmony of flavours in our smoked fish, here on the beach of Aldeburgh."
            />
            <div className="flex flex-col">
                <section className="w-full flex flex-col justify-center items-center tablet:mt-4 mb-12">
                    <div className="text-md tablet:mx-8 tablet:text-xl bg-white rounded-lg border shadow-md p-6">
                        <h2 className="w-full text-center text-3xl tablet:text-7xl font-bold mb-2 tablet:mb-8">
                            About Us
                        </h2>
                        <p>
                            All our fishes are lightly smoked here on Aldeburgh beach. Traditionally fish is more heavily smoked as a preservative, but our light smoking is sufficient only to enhance the flavour.
                        </p>
                        <br/>
                        <p>
                            Usually hot smoked fish is ready to eat and cold smoked will need cooking. the exception being our favourite crusted cold smoked salmon, which is dry cured prior to light smoking.
                        </p>
                        <br/>
                        <p>
                            Most of our smoked fishes are ready to eat and therefore suitable to eat here and now or take away and enjoy later.
                        </p>
                        <br/>
                        <p>
                            In addition to our wide range of smoked fishes, we also prepare a selection of Pastry Tarts, various smoked fishes patés, individual smoked fish pie mixes and recently our popular Noon Tarts.
                        </p>
                        <br/>
                        <p className='w-full text-center'>
                            Not sure? Come in and have a look... nows or laters.
                        </p>
                    </div>
                </section>
                <section className="w-full flex flex-col tablet:flex-row justify-center items-center">
                    <div className="w-full tablet:w-1/2 h-[50rem] flex flex-col justify-center items-center text-white bg-slate-600 rounded-r-m">
                        <div className="w-11/12 my-4 tablet:w-4/6 tablet:my-10 h-full flex flex-col justify-center">
                            <h2 className="text-2xl tablet:text-4xl font-bold mb-8">
                                Our Story
                            </h2>
                            <p>
                            Duncan and his team have been smoking fish in Aldeburgh for over ten years now. Becoming a part of the landscape within the fishing town.
                            <br />
                            <br />
                            This shingle beach is probably the best known of all Suffolk&apos;s beaches, with people visiting from far and wide to explore.
                            The quirky buildings, the historic architecture and of course the cultural heritage; are just some of the beautiful features of Aldeburgh. 
                            The fish huts along Crag Path are another, with ASH located just opposite the Moot Hall - wafting the tasty smell of smoked fish across the square. 
                            <br />
                            <br />
                            Duncan had a clear vision when he started building ASH - literally from the shingle beach upwards - a sustainable smokehouse thats one focus is taste. 
                            Customers love his mouthwatering creations, in particular the Noon Tarts and platters.
                            </p>
                        </div>
                    </div>
                    <div className="w-full tablet:w-1/2 h-[50rem] flex relative">
                        <Image className="w-full" src="https://i.imgur.com/27x6lXN.jpg" alt='Image of owner inside' layout='fill' objectFit='cover' />
                    </div>
                </section>
            </div>
        </>
    )
}