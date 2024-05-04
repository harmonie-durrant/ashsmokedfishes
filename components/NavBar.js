import Link from "next/link";
import styles from '../styles/NavBar.module.css';
import { useState, useEffect } from 'react';

export default function NavBar() {

    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(function mount() {
        function onResize() {
            setIsNavOpen(false);
        }
    
        window.addEventListener("resize", onResize);
    
        return function unMount() {
            window.removeEventListener("resize", onResize);
        };
    });

    return (
        <>
            <nav className="flex justify-center content-center p-4">
                <ul className="hidden desktop:flex">
                    <li className={styles.navlink}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={styles.navlink}>
                        <Link href="/about">About us</Link>
                    </li>
                    <li className={styles.navlink}>
                        <a href="/products">Our Products</a>
                    </li>
                    <li className={styles.navlink}>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
                <div
                    className="space-y-2 block desktop:hidden"
                    onClick={() => setIsNavOpen((prev) => !prev)}
                >
                    <span className="block w-8 h-0.5 bg-black"></span>
                    <span className="block w-8 h-0.5 bg-black"></span>
                    <span className="block w-5 h-0.5 bg-black"></span>
                </div>
            </nav>
            <nav className={isNavOpen ? "flex" : "hidden"}>
                <ul className="text-white flex flex-col w-full justify-center items-center mt-2 mb-5">
                    <li className={styles.navlink}>
                        <Link href="/" prefetch={true}>Home</Link>
                    </li>
                    <li className={styles.navlink}>
                        <Link href="/about" prefetch={true}>About us</Link>
                    </li>
                    <li className={styles.navlink}>
                        <Link href="/products" prefetch={true}>Our Products</Link>
                    </li>
                    <li className={styles.navlink}>
                        <Link href="/contact" prefetch={true}>Contact</Link>
                    </li>
                </ul>
            </nav>
            <section className='w-full flex flex-col justify-center items-center my-4'>
                <h1 className='text-4xl tablet:text-6xl font-bold mb-8'>
                    Ash Smoked Fishes
                </h1>
                <span className={styles.highlight}>
                    <p className='text-xl tablet:text-2xl font-bold mb-8 text-white mx-12 h-2 tablet:h-4'>
                        Here We Smoke Fish
                    </p>
                </span>
            </section>
        </>
    )
}