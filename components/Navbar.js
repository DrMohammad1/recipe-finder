import Link from 'next/link';

const Navbar = () => (
    <nav>
        <Link href="/">Home</Link>
        <Link href="/favorites">Favorites</Link>
        <Link href="/about">About Us</Link>
    </nav>
);

export default Navbar;