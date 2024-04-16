import Link from "next/link";

export default function CategoryCard() {
    return (
        <>
            <h3 className='w-full text-center text-4xl font-bold mb-4'>
                Product Categories
            </h3>
            <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-2">
                {/* HOT SMOKED */}
                <Link href="category/hot-smoked" prefetch={true}>
                    <div className="flex items-center h-36 justify-center rounded-lg shadow-md max-w-md bg-hot-smoked bg-center bg-cover">
                        <span className="bg-black h-full rounded-lg flex justify-center items-center bg-opacity-40 w-full text-center text-white text-4xl font-bold my-6">Hot Smoked</span>
                    </div>
                </Link>
                {/* COLD SMOKED */}
                <Link href="category/cold-smoked" prefetch={true}>
                    <div className="flex items-center h-36 justify-center rounded-lg shadow-md max-w-md bg-cold-smoked bg-center bg-cover">
                        <span className="bg-black h-full rounded-lg flex justify-center items-center bg-opacity-40 w-full text-center text-white text-4xl font-bold my-6">Cold Smoked</span>
                    </div>
                </Link>
                {/* NOWS + LATERS SMOKED */}
                <Link href="category/nows-laters" prefetch={true}>
                    <div className="flex items-center h-36 justify-center rounded-lg shadow-md max-w-md bg-nows-laters bg-center bg-cover">
                        <span className="bg-black h-full rounded-lg flex justify-center items-center bg-opacity-40 w-full text-center text-white text-4xl font-bold my-6">
                            Nows or Laters
                        </span>
                    </div>
                </Link>
            </div>
        </>
    );
}