import { CalendarToday } from "@mui/icons-material"

export default function Reviews({ reviews }) {


    if (reviews === undefined)
        reviews = [
            {
                rating: 5,
                dateOfVisit: 'March 2024',
                title: 'Taste of the Sea',
                content: "Walked up to this stall and the smell was amazing. We had the Noon tart and the Crab and Samphire tart plus took home mackerel pate and smoked trout. All of the food was amazing we will be back. There is not much room to sit but there are plenty of benches around this area. Get a nice loaf of bread to go with the pate.",
                Link: "https://www.tripadvisor.fr/ShowUserReviews-g186382-d8706775-r944612106-Ash_Smoked_Fishes-Aldeburgh_Suffolk_East_Anglia_England.html",
                PPic: "https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/f3/e4/default-avatar-2020-30.jpg",
                PLink: "https://www.tripadvisor.fr/Profile/jacquelinecU6842OH"
            },
            {
                rating: 5,
                dateOfVisit: 'March 2024',
                title: 'Excellent choice and great fish tarts!',
                content: "Lovely, we had crab and samphire tarts, smoked haddock cheddar and onion tart, prawns with garlic mayo and smoked mackerel pate, it was all delicious.",
                Link: "https://www.tripadvisor.fr/ShowUserReviews-g186382-d8706775-r943985832-Ash_Smoked_Fishes-Aldeburgh_Suffolk_East_Anglia_England.html",
                PPic: "https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/e4/59/default-avatar-2020-49.jpg",
                PLink: "https://www.tripadvisor.fr/Profile/Nrgaudia4"
            }
        ]

    return(
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 desktop:grid-cols-2">
                {
                    reviews.map((review, index) => {
                        return (
                            <div key={index} className="max-w-2xl px-8 py-4 my-8 mx-8 bg-white rounded-lg shadow-md flex flex-col justify-between">
                                <div className="flex items-center justify-between">
                                    <span className="text-md text-center flex justify-center items-center text-gray-700"><CalendarToday />&nbsp;{review.dateOfVisit}</span>
                                    <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-green-600 rounded cursor-pointer hover:bg-green-700">
                                        Tripadvisor
                                    </a>
                                </div>
                                <div className="mt-2">
                                    <a
                                        href={review.Link}
                                        className="text-2xl font-bold text-gray-700 hover:text-gray-800 hover:underline"
                                    >
                                        {review.title}
                                    </a>
                                    <p className="mt-2 text-gray-600">{review.content}</p> {/* truncate | text-ellipsis */}
                                </div>
                                <div className="flex items-center justify-between mt-4">
                                    <a
                                        href={review.Link}
                                        className="text-blue-600 hover:underline"
                                    >
                                    See on Tripadvisor ⟶
                                    </a>
                                    <div className="flex items-center">
                                        <img
                                            src={review.PPic}
                                            alt="Author Photo"
                                            className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                                        />
                                        <a
                                            className="font-bold text-gray-700 hover:text-gray-800 hover:underline cursor-pointer"
                                            href={review.PLink}
                                        >
                                            {review.Name}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

Reviews.getInitialProps = async () => {

    const res = await fetch((process.env.NODE_ENV === "development") ? `http://127.0.0.1:3000/api/reviews`: `https://www.ashsmokedfishes.co.uk/api/reviews`, { method: 'GET' });
    const {data} = await res.json()

    return { reviews: data };
}